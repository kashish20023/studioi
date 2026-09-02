import * as THREE from 'three';

/**
 * Generates a procedural cloud texture using layered canvas radial gradients.
 * @param {number} size - Canvas size in pixels (default 512)
 * @returns {THREE.CanvasTexture} Three.js texture
 */
function createProceduralCloudTexture(size = 512) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, size, size);

  // Define overlapping circular blobs to construct a soft puffy cloud shape
  const blobs = [
    { x: 0.50, y: 0.50, r: 0.28, opacity: 0.85 },
    { x: 0.35, y: 0.52, r: 0.22, opacity: 0.80 },
    { x: 0.65, y: 0.52, r: 0.22, opacity: 0.80 },
    { x: 0.25, y: 0.56, r: 0.16, opacity: 0.70 },
    { x: 0.75, y: 0.56, r: 0.16, opacity: 0.70 },
    { x: 0.42, y: 0.40, r: 0.20, opacity: 0.75 },
    { x: 0.58, y: 0.40, r: 0.20, opacity: 0.75 },
    { x: 0.48, y: 0.34, r: 0.16, opacity: 0.70 },
    // Soft ambient glow / outer padding
    { x: 0.50, y: 0.50, r: 0.40, opacity: 0.25 }
  ];

  blobs.forEach(blob => {
    const cx = blob.x * size;
    const cy = blob.y * size;
    const radius = blob.r * size;

    const grad = ctx.createRadialGradient(cx, cy, radius * 0.05, cx, cy, radius);
    grad.addColorStop(0, `rgba(255, 255, 255, ${blob.opacity})`);
    grad.addColorStop(0.5, `rgba(255, 255, 255, ${blob.opacity * 0.4})`);
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/**
 * Initializes an animated procedural clouds background.
 *
 * @param {Object} options Configuration options
 * @param {HTMLElement} [options.container=document.body] Container element to attach canvas to
 * @param {number} [options.cloudCount=18] Number of cloud sprites
 * @param {string|null} [options.skyTop='#a1c4fd'] Top sky gradient color
 * @param {string|null} [options.skyBottom='#c2e9fb'] Bottom sky gradient color
 * @param {number} [options.speed=25] Base horizontal drift speed in px/s
 * @returns {Function} Teardown function to clean up listeners, animation, and DOM elements
 */
export function initCloudsBackground(options = {}) {
  const {
    container = document.body,
    cloudCount = 18,
    skyTop = '#a1c4fd',
    skyBottom = '#c2e9fb',
    speed = 25
  } = options;

  let width = container === document.body ? window.innerWidth : container.clientWidth;
  let height = container === document.body ? window.innerHeight : container.clientHeight;

  // Create canvas element
  const canvas = document.createElement('canvas');
  canvas.className = 'clouds-background-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '-1';
  canvas.style.pointerEvents = 'none';

  if (skyTop && skyBottom) {
    canvas.style.background = `linear-gradient(to bottom, ${skyTop}, ${skyBottom})`;
  } else if (skyTop) {
    canvas.style.background = skyTop;
  }

  if (container.style.position === '' || container.style.position === 'static') {
    if (container !== document.body) {
      container.style.position = 'relative';
    }
  }
  container.appendChild(canvas);

  // Setup Three.js scene, orthographic camera & renderer
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(
    -width / 2,
    width / 2,
    height / 2,
    -height / 2,
    1,
    1000
  );
  camera.position.z = 10;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Generate cloud texture & shared sprite material
  const cloudTexture = createProceduralCloudTexture(512);
  const cloudMaterial = new THREE.SpriteMaterial({
    map: cloudTexture,
    transparent: true,
    depthTest: false,
    depthWrite: false,
    blending: THREE.NormalBlending
  });

  // Create cloud sprites with randomized position, speed, and bobbing properties
  const clouds = [];

  for (let i = 0; i < cloudCount; i++) {
    const sprite = new THREE.Sprite(cloudMaterial);
    
    // Scale cloud sprites proportionally
    const baseScale = 180 + Math.random() * 220; // 180px - 400px width
    const aspect = 1.0;
    const w = baseScale;
    const h = baseScale * aspect;
    sprite.scale.set(w, h, 1);

    // Random initial position distributed across the viewport
    const x = (Math.random() - 0.5) * (width + w * 2);
    const baseY = (Math.random() - 0.5) * (height * 0.85);

    sprite.position.set(x, baseY, 0);

    const cloudData = {
      sprite,
      x,
      baseY,
      width: w,
      height: h,
      speed: speed * (0.6 + Math.random() * 0.8), // Variation in drift speed
      bobOffset: Math.random() * Math.PI * 2,
      bobSpeed: 0.6 + Math.random() * 0.8,         // Frequency of vertical bobbing
      bobAmplitude: 8 + Math.random() * 16,        // Height of bobbing motion
      opacity: 0.45 + Math.random() * 0.45
    };

    // Vary opacity slightly per sprite
    sprite.material = cloudMaterial.clone();
    sprite.material.opacity = cloudData.opacity;

    scene.add(sprite);
    clouds.push(cloudData);
  }

  // Animation loop
  let animationFrameId = null;
  let lastTime = performance.now();
  let elapsedTime = 0;

  function animate(now) {
    const delta = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;
    elapsedTime += delta;

    clouds.forEach(cloud => {
      // Horizontal drift
      cloud.x += cloud.speed * delta;

      // Vertical sinusoidal bobbing
      const bob = Math.sin(elapsedTime * cloud.bobSpeed + cloud.bobOffset) * cloud.bobAmplitude;
      
      cloud.sprite.position.x = cloud.x;
      cloud.sprite.position.y = cloud.baseY + bob;

      // Viewport edge wrapping (left -> right loop)
      const rightMargin = width / 2 + cloud.width / 2 + 50;
      const leftMargin = -width / 2 - cloud.width / 2 - 50;

      if (cloud.x > rightMargin) {
        cloud.x = leftMargin;
        cloud.baseY = (Math.random() - 0.5) * (height * 0.85);
      }
    });

    renderer.render(scene, camera);
    animationFrameId = requestAnimationFrame(animate);
  }

  animationFrameId = requestAnimationFrame(animate);

  // Resize handler
  function onResize() {
    width = container === document.body ? window.innerWidth : container.clientWidth;
    height = container === document.body ? window.innerHeight : container.clientHeight;

    camera.left = -width / 2;
    camera.right = width / 2;
    camera.top = height / 2;
    camera.bottom = -height / 2;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  window.addEventListener('resize', onResize);

  // Teardown / destroy function
  function teardown() {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
    }
    window.removeEventListener('resize', onResize);

    // Dispose scene objects
    clouds.forEach(cloud => {
      if (cloud.sprite.material) {
        cloud.sprite.material.dispose();
      }
      scene.remove(cloud.sprite);
    });

    cloudTexture.dispose();
    cloudMaterial.dispose();
    renderer.dispose();

    if (canvas.parentNode) {
      canvas.parentNode.removeChild(canvas);
    }
  }

  teardown.destroy = teardown;
  return teardown;
}

export default initCloudsBackground;
