export interface LibraryItem {
  id: string;
  title: string;
  category: "Essays & Guides" | "Venture Playbooks" | "Founder Stories" | "Podcasts & Media" | "Research & Reports";
  author: string;
  date: string;
  readTime: string;
  image: string;
  description: string;
  takeaways: string[];
  link?: string;
  featured?: boolean;
}

export const libraryData: LibraryItem[] = [
  {
    id: "zero-to-one-ventures",
    title: "Zero to One: Building Category-Defining Ventures",
    category: "Venture Playbooks",
    author: "Studio i Venture Lab",
    date: "Jan 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    description: "A strategic roadmap on scaling proprietary tech, market dominance, and monopoly dynamics in emerging markets.",
    takeaways: [
      "Identifying 10x product advantages in crowded sectors",
      "Escaping competition through vertical niche expansion",
      "Designing flywheel network effects from day one"
    ],
    featured: true,
  },
  {
    id: "raise-seed-round-2026",
    title: "How to Raise Your Seed Round in 2026",
    category: "Essays & Guides",
    author: "Studio i Capital Team",
    date: "Feb 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop",
    description: "Tactical guidance on pitch deck structure, investor term sheet dynamics, valuation benchmarks, and cap table hygiene.",
    takeaways: [
      "Structuring early pitch narratives that hook tier-1 VCs",
      "Valuation benchmarks and dilution targets for seed stages",
      "Navigating SAFE notes vs priced equity rounds"
    ],
    featured: true,
  },
  {
    id: "jaipur-to-global-bharat",
    title: "From Jaipur to Global Markets: The Bharat Ventures Story",
    category: "Founder Stories",
    author: "Studio i Editorial",
    date: "Dec 2025",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    description: "How emerging tech hubs in India are producing world-class SaaS, AI, and consumer platforms built for scale.",
    takeaways: [
      "Overcoming regional ecosystem bottlenecks through strong capital bridges",
      "Hiring and retaining top-tier talent in tier-2 cities",
      "Scaling cross-border sales from day zero"
    ],
    featured: true,
  },
  {
    id: "venture-studio-architecture",
    title: "The Venture Studio Architecture Guide",
    category: "Venture Playbooks",
    author: "Studio i Labs",
    date: "Nov 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    description: "How we validate concepts, co-found startups, and provide operational runway before public market launch.",
    takeaways: [
      "Rapid prototype validation loops in under 6 weeks",
      "Shared operational infrastructure for finance, legal, and hiring",
      "Managing venture studio equity split models fairly"
    ],
  },
  {
    id: "frontier-ai-agents",
    title: "Frontier AI & Autonomous Agents in Enterprise",
    category: "Research & Reports",
    author: "Studio i AI Initiative",
    date: "Feb 2026",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    description: "In-depth research on LLM orchestration, agentic workflows, and market opportunities in corporate AI automation.",
    takeaways: [
      "Evaluating multi-agent orchestration frameworks for enterprise workflows",
      "Data privacy, local model fine-tuning, and security protocols",
      "Monetization strategies for vertical B2B AI agents"
    ],
  },
  {
    id: "scaling-eng-teams",
    title: "Scaling Engineering Teams from 1 to 50",
    category: "Essays & Guides",
    author: "CTO Office @ Studio i",
    date: "Jan 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop",
    description: "Engineering culture, hiring frameworks, modular code architecture, and CI/CD best practices for fast-moving ventures.",
    takeaways: [
      "Structuring microservices vs monolithic architectures at early stages",
      "Automating code quality checks and automated deployment pipelines",
      "Building high-ownership engineering cultures"
    ],
  },
  {
    id: "fintech-pmf-playbook",
    title: "Building Product-Market Fit in FinTech & Payments",
    category: "Venture Playbooks",
    author: "CTPL Online & Studio i",
    date: "Oct 2025",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    description: "Lessons on regulatory compliance, unit economics, fraud mitigation, and financial infrastructure scaling.",
    takeaways: [
      "Navigating RBI compliance and payment gateway integrations",
      "Optimizing customer acquisition costs (CAC) vs Lifetime Value (LTV)",
      "Designing intuitive checkout experiences for high conversion"
    ],
  },
  {
    id: "vc-term-sheets-decoded",
    title: "Venture Capital & Term Sheets Decoded",
    category: "Essays & Guides",
    author: "Studio i Legal & Capital",
    date: "Dec 2025",
    readTime: "16 min read",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop",
    description: "Understanding liquidation preferences, anti-dilution clauses, board seats, and founder-friendly equity terms.",
    takeaways: [
      "Distinguishing 1x non-participating vs participating liquidation preferences",
      "Understanding protective provisions and board control dynamics",
      "Negotiating founder vesting schedules and acceleration clauses"
    ],
  },
  {
    id: "fireside-ai-startups",
    title: "Studio i Fireside Chat: Building AI-First Startups",
    category: "Podcasts & Media",
    author: "Studio i Media",
    date: "Feb 2026",
    readTime: "45 min listen",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1200&auto=format&fit=crop",
    description: "Keynote panel with top AI founders, seed investors, and venture builders discussing market shifts and technical moats.",
    takeaways: [
      "How to defend against big tech wrapper commoditization",
      "Building proprietary data loops for defensible moats",
      "Fundraising strategies for AI infrastructure vs AI applications"
    ],
  },
  {
    id: "design-systems-identity",
    title: "Design Systems & Brand Identity for Modern Startups",
    category: "Essays & Guides",
    author: "Studio i Design Team",
    date: "Jan 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    description: "Crafting iconic brand aesthetics, design tokens, micro-interactions, and high-converting web applications.",
    takeaways: [
      "Choosing typography, glassmorphism, and color palettes that wows users",
      "Building scalable Figma-to-Tailwind design systems",
      "Optimizing UI micro-animations for mobile response"
    ],
  },
  {
    id: "next-decade-indian-startups",
    title: "The Next Decade of Indian Startup Ecosystem",
    category: "Research & Reports",
    author: "InnovIdea & Studio i Research",
    date: "Nov 2025",
    readTime: "20 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    description: "Comprehensive market report on capital flows, Tier 2/3 ecosystem acceleration, and global expansion routes.",
    takeaways: [
      "Macroeconomic catalysts driving India's next trillion-dollar digital economy",
      "Emerging startup hubs beyond Mumbai, Bangalore, and Delhi",
      "Global cross-border expansion playbooks for Indian founders"
    ],
  },
  {
    id: "bootstrapping-to-profitable",
    title: "Operations Playbook: Bootstrapping to Cash-Flow Positive",
    category: "Venture Playbooks",
    author: "BAX & Studio i Ops",
    date: "Oct 2025",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    description: "Operational discipline, burn rate management, pricing model iteration, and cash flow optimization for early stage teams.",
    takeaways: [
      "Extending startup runway without sacrificing aggressive growth",
      "Optimizing pricing models for maximum cash collection upfront",
      "Lean operational efficiency tactics for early stage startups"
    ],
  },
];
