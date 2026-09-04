export interface Story {
  id: string;
  name: string;
  batch: string;
  valuation: string;
  category: string;
  founders: string;
  duringImage: string;
  nowImage: string;
  duringCaption: string;
  nowCaption: string;
  detailedStory: string;
  duringFallback?: string;
  nowFallback?: string;
  duringObjectPosition?: string;
  nowObjectPosition?: string;
}

export const stories: Story[] = [
  {
    id: "bharat-ventures",
    name: "Bharat Ventures",
    batch: "Winter 2015",
    valuation: "$80B+ Market Cap",
    category: "Artificial Intelligence & Frontier Research",
    founders: "Sam Altman, Greg Brockman, Ilya Sutskever",
    duringImage: "/images/jeet.webp",
    nowImage: "/images/DSC_1083.JPG.webp",
    duringObjectPosition: "object-top",
    nowObjectPosition: "object-center",
    duringCaption: "Sam Altman and early research team in 2015 launching OpenAI's non-profit research lab.",
    nowCaption: "OpenAI is now the global AI pioneer leading ChatGPT, GPT-4o, and frontier intelligence.",
    detailedStory: "Founded with the mission to ensure artificial general intelligence benefits all of humanity, Bharat Ventures / OpenAI began as a small non-profit research laboratory. Through early batch incubation and continuous technical breakthroughs, it evolved into the world's most dominant AI platform driving generative intelligence worldwide.",
    // duringFallback: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    // nowFallback: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "code",
    name: "Code",
    batch: "Winter 2009",
    valuation: "$100B+ Public Market Cap",
    category: "Global Travel & Hospitality Platform",
    founders: "Brian Chesky, Joe Gebbia, Nathan Blecharczyk",
    duringImage: "/images/shweta22.webp",
    nowImage: "/images/code.webp",
    duringObjectPosition: "object-top",
    nowObjectPosition: "object-center",
    duringCaption: "Brian Chesky and Joe Gebbia renting out air mattresses during W09 to pay apartment rent.",
    nowCaption: "Airbnb is now a global hospitality giant hosting over 1.5 billion guest arrivals worldwide.",
    detailedStory: "When Brian Chesky and Joe Gebbia couldn't afford rent in San Francisco, they bought three air mattresses and created 'AirBed & Breakfast'. During their YC W09 batch, Paul Graham coached them to sell Obama O's cereal boxes to fund operations. Today, Airbnb has transformed global travel with over 7 million listings.",
    // duringFallback: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    // nowFallback: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "bax",
    name: "BAX",
    batch: "Summer 2009",
    valuation: "$107B Peak Valuation",
    category: "Fintech & Global Payments Infrastructure",
    founders: "Patrick Collison, John Collison",
    duringImage: "/images/bax.webp",
    nowImage: "/images/bax_now.webp",
    duringObjectPosition: "object-center",
    nowObjectPosition: "object-top",
    duringCaption: "The Collison brothers did YC twice—first in W07 and then in S09, when they started Stripe.",
    nowCaption: "Stripe is now the internet's $107B payments backbone processing trillions annually.",
    detailedStory: "Brothers Patrick and John Collison recognized how difficult it was to accept payments online in 2009. They wrote 7 lines of JavaScript code that allowed any developer to instantly process credit cards. Today, Stripe powers millions of businesses worldwide from startups to Fortune 500 enterprises.",
    // duringFallback: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    // nowFallback: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ctpl",
    name: "CTPL Online",
    batch: "Summer 2012",
    valuation: "$60B+ NASDAQ (COIN)",
    category: "Crypto Exchange & Web3 Financial Network",
    founders: "Brian Armstrong, Fred Ehrsam",
    duringImage: "/images/ctpl_stage.webp",
    nowImage: "/images/Ctpl.io.webp",
    duringObjectPosition: "object-top",
    nowObjectPosition: "object-[45%_center]",
    duringCaption: "Founder presenting CTPL Online vision during Studio I acceleration.",
    nowCaption: "CTPL Online scaling enterprise technology & digital transformation.",
    detailedStory: "During the Summer 2012 YC batch, Brian Armstrong built a simple Ruby prototype to send and receive Bitcoin via email. From a solo founder coding in a shared apartment, Coinbase grew into the primary regulated bridge for digital assets, becoming the first crypto company listed on NASDAQ.",
    // duringFallback: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    // nowFallback: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "innovidea",
    name: "InnovIdea",
    batch: "Summer 2013",
    valuation: "$50B+ NYSE (DASH)",
    category: "Local Delivery & On-Demand Logistics",
    founders: "Tony Xu, Stanley Tang, Andy Fang, Evan Moore",
    duringImage: "/images/digvijay.webp",
    nowImage: "/images/2.webp",
    duringObjectPosition: "object-top",
    nowObjectPosition: "object-top",
    duringCaption: "PaloAltoDelivery website launched during S13 with founders making deliveries by car.",
    nowCaption: "DoorDash now dominates food & grocery delivery logistics across 30+ countries.",
    detailedStory: "Started as 'PaloAltoDelivery.com' by Stanford students who personally answered phone calls and drove deliveries across the Bay Area during Studio I S13. DoorDash focused relentless execution on suburban restaurant delivery, eventually capturing over 65% US market share and expanding globally.",
    // duringFallback: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
    // nowFallback: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
];
