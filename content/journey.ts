export type JourneyItem = {
  slug: string;
  year: "2024" | "2025" | "2026";
  order: number;
  title: string;
  eyebrow: string;
  role: string;
  organization: string;
  summary: string;
  featured?: boolean;
  tags: string[];
  background: string[];
  responsibilities: string[];
  challenges: string[];
  approach: string[];
  outcomes: string[];
  lessons: string[];
  quote?: string;
};

export const journeyItems: JourneyItem[] = [
  {
    slug: "entering-telkom-university",
    year: "2024",
    order: 1,
    title: "A New Beginning at Telkom University",
    eyebrow: "Starting point",
    role: "Business Administration Student",
    organization: "Telkom University",
    summary:
      "University became the starting point for a deliberate journey to learn beyond the classroom through business, organizations, and real collaboration.",
    tags: ["Learning", "Adaptability", "Initiative"],
    background: [
      "Entering Telkom University marked a new chapter. I arrived with curiosity, ambition, and a desire to understand how organizations and businesses work in practice.",
      "I decided early that university would be more than a degree. I wanted it to be a place to build character, relationships, and the confidence to take responsibility.",
    ],
    responsibilities: [
      "Build a strong academic foundation in Business Administration",
      "Explore organizations aligned with entrepreneurship and leadership",
      "Learn to work with people from different backgrounds",
    ],
    challenges: [
      "Adapting to a new academic and social environment",
      "Finding the right opportunities without prior large-scale organizational experience",
    ],
    approach: [
      "Joined HIPMI PT Telkom to learn through real programs",
      "Started from operational roles and observed how each division worked",
      "Used every assignment as a chance to build trust and competence",
    ],
    outcomes: [
      "Built an early foundation in teamwork, communication, and responsibility",
      "Found a clear learning path across operations, partnership, and leadership",
    ],
    lessons: [
      "Growth starts when I choose to participate, even before I feel fully ready.",
    ],
  },
  {
    slug: "hipmi-jejak-budaya",
    year: "2024",
    order: 2,
    title: "HIPMI Jejak Budaya",
    eyebrow: "Community service",
    role: "Logistics Division",
    organization: "HIPMI PT Telkom",
    summary:
      "My first major organizational project introduced me to the invisible operational work behind a meaningful community program in Cimahi.",
    featured: true,
    tags: ["Operations", "Teamwork", "Community"],
    background: [
      "HIPMI Jejak Budaya was designed to introduce local culture in Cimahi while supporting local communities and promoting beras singkong as a distinctive local product.",
      "As a logistics team member, I learned that the audience sees the event, but the committee is responsible for every detail that makes the event possible.",
    ],
    responsibilities: [
      "Prepare operational equipment and activity requirements",
      "Coordinate logistics before and during the event",
      "Distribute resources based on each division's needs",
      "Support field operations and respond to changing requirements",
    ],
    challenges: [
      "Coordinating changing needs across divisions",
      "Working within a short preparation window",
      "Responding quickly to unexpected field requirements",
    ],
    approach: [
      "Used a practical checklist to reduce missed items",
      "Maintained active communication with other divisions",
      "Prioritized critical operational needs before secondary requests",
    ],
    outcomes: [
      "Supported the event's operational readiness from preparation to execution",
      "Strengthened my understanding of teamwork and behind-the-scenes responsibility",
    ],
    lessons: [
      "Successful execution starts with disciplined preparation.",
      "No role is small when every person works toward the same mission.",
    ],
    quote: "The audience sees the event. The committee understands every process behind it.",
  },
  {
    slug: "company-visit-sari-roti-oppo",
    year: "2024",
    order: 3,
    title: "Industry Learning: Sari Roti & OPPO",
    eyebrow: "Company visit",
    role: "Logistics Division",
    organization: "HIPMI PT Telkom",
    summary:
      "Two company visits connected classroom concepts with real production, supply chain, innovation, branding, and customer experience.",
    featured: true,
    tags: ["Operations", "Industry", "Innovation"],
    background: [
      "Company Visit and Explore Business took us directly into established companies to observe how business systems work in real settings.",
      "Sari Roti highlighted production precision and operational consistency. OPPO broadened the discussion toward innovation, technology, brand building, and customer experience.",
    ],
    responsibilities: [
      "Support logistical readiness for the company visit programs",
      "Coordinate operational needs with the committee",
      "Observe and document key business lessons from each visit",
    ],
    challenges: [
      "Balancing operational responsibilities with active learning",
      "Translating a short visit into useful business insights",
    ],
    approach: [
      "Connected observations with Business Administration concepts",
      "Compared the operating focus of manufacturing and technology businesses",
      "Reflected on how standards, people, and innovation reinforce one another",
    ],
    outcomes: [
      "Developed a practical view of supply chain, quality control, SOPs, and production planning",
      "Recognized that strong companies build systems and experiences, not only products",
    ],
    lessons: [
      "Consistency comes from repeatable systems.",
      "Innovation becomes valuable when it improves the customer experience.",
    ],
  },
  {
    slug: "partnership-department",
    year: "2025",
    order: 1,
    title: "Building a Partnership System",
    eyebrow: "External affairs",
    role: "Partnership Staff",
    organization: "HIPMI PT Telkom",
    summary:
      "I moved from operational execution to external relationship building and helped develop a more structured company prospect database.",
    featured: true,
    tags: ["Partnership", "CRM", "Business Development"],
    background: [
      "Joining the Partnership Department introduced a different kind of responsibility. The work required research, professional communication, follow-up discipline, and long-term relationship thinking.",
      "One of my key initiatives was structuring a company database that future committees could use for Company Visit and Explore Business programs.",
    ],
    responsibilities: [
      "Research prospective companies and relevant industries",
      "Record profiles, contact persons, communication history, and visit feasibility",
      "Support outreach, follow-up, and partner coordination",
      "Maintain information that could support future committees",
    ],
    challenges: [
      "Turning scattered company information into a usable system",
      "Maintaining professional follow-up without making communication transactional",
      "Identifying prospects that matched program objectives",
    ],
    approach: [
      "Organized prospects by industry and opportunity type",
      "Documented contact and communication history for continuity",
      "Focused outreach on shared value and program relevance",
    ],
    outcomes: [
      "Introduced a more structured foundation for prospecting and follow-up",
      "Built practical experience in business development, CRM, and stakeholder management",
    ],
    lessons: [
      "A contact list stores names. A partnership system preserves context, trust, and continuity.",
    ],
  },
  {
    slug: "explore-business-agate",
    year: "2025",
    order: 2,
    title: "Explore Business at PT Agate",
    eyebrow: "Creative industry",
    role: "Partnership & Program Support",
    organization: "HIPMI PT Telkom",
    summary:
      "A closer look at Indonesia's game industry showed me how creative work depends on disciplined product, team, and execution systems.",
    featured: true,
    tags: ["Product", "Creative Industry", "Innovation"],
    background: [
      "Explore Business at PT Agate expanded my understanding of the game industry beyond entertainment. It revealed the coordination required across product, creative, technical, and business functions.",
    ],
    responsibilities: [
      "Support program preparation and external coordination",
      "Observe how creative and business teams collaborate",
      "Translate industry insights into relevant learning for a Business Administration student",
    ],
    challenges: [
      "Understanding an unfamiliar industry's operating model",
      "Identifying lessons that could apply beyond game development",
    ],
    approach: [
      "Studied the game development lifecycle and product workflow",
      "Focused on collaboration patterns and innovation culture",
      "Connected creative execution with product management principles",
    ],
    outcomes: [
      "Gained a clearer view of how multidisciplinary teams build digital products",
      "Expanded my interest in product management and creative business models",
    ],
    lessons: ["Innovation happens when creativity meets consistent execution."],
  },
  {
    slug: "staff-muda",
    year: "2025",
    order: 3,
    title: "Leading Logistics for Staff Muda",
    eyebrow: "Leadership case study",
    role: "Head of Logistics Division",
    organization: "HIPMI PT Telkom",
    summary:
      "My first division leadership role shifted my focus from completing tasks to creating clarity, trust, and readiness for the whole team.",
    featured: true,
    tags: ["Leadership", "Operations", "Delegation"],
    background: [
      "Being appointed Head of Logistics Division for the Staff Muda program became a major turning point. I was responsible for the division's performance across the program, from inauguration to closing.",
    ],
    responsibilities: [
      "Plan operational needs across the program timeline",
      "Delegate responsibilities and clarify ownership",
      "Supervise preparation and implementation",
      "Resolve operational issues in real time",
      "Coordinate with other divisions to protect the overall program flow",
    ],
    challenges: [
      "Moving from individual contributor to team leader",
      "Balancing control with trust and delegation",
      "Keeping operations ready across multiple program stages",
    ],
    approach: [
      "Broke responsibilities into clear work areas",
      "Matched assignments with team readiness",
      "Maintained check-ins focused on blockers and next actions",
      "Stayed available for escalation during execution",
    ],
    outcomes: [
      "Coordinated logistics from the opening stage through the closing event",
      "Built practical leadership experience in delegation, supervision, and real-time problem solving",
    ],
    lessons: [
      "Leadership means listening before deciding.",
      "A leader creates the conditions for the team to perform well.",
    ],
  },
  {
    slug: "investpreneur",
    year: "2025",
    order: 4,
    title: "Investpreneur",
    eyebrow: "Sponsorship",
    role: "Vice Head of Sponsorship & Fundraising",
    organization: "HIPMI PT Telkom",
    summary:
      "This role developed my ability to connect program needs with partner value through prospecting, communication, and fundraising support.",
    tags: ["Sponsorship", "Negotiation", "Fundraising"],
    background: [
      "Investpreneur gave me a practical environment to learn how sponsorship supports program sustainability and how external collaboration must create value for both sides.",
    ],
    responsibilities: [
      "Support sponsorship strategy and prospect research",
      "Assist communication with prospective partners",
      "Coordinate fundraising activities with the team",
      "Track follow-up and collaboration readiness",
    ],
    challenges: [
      "Communicating program value clearly to potential partners",
      "Keeping follow-up consistent across multiple prospects",
    ],
    approach: [
      "Aligned partnership messages with program needs",
      "Used clear follow-up notes and ownership",
      "Treated partner communication as relationship building",
    ],
    outcomes: [
      "Strengthened my confidence in professional outreach and sponsorship coordination",
      "Built a clearer understanding of mutual value in external collaboration",
    ],
    lessons: ["Sponsorship works best when both the program and the partner can explain the value created."],
  },
  {
    slug: "hipmi-collab-expo",
    year: "2025",
    order: 5,
    title: "HIPMI Collab Expo",
    eyebrow: "Commercial collaboration",
    role: "Head of Sponsorship",
    organization: "HIPMI PT Telkom",
    summary:
      "Leading sponsorship required an end-to-end view of prospecting, proposals, negotiation, and relationship management.",
    tags: ["Sponsorship", "Team Leadership", "Communication"],
    background: [
      "HIPMI Collab Expo expanded my sponsorship responsibility from support to leadership. The work required clear direction, disciplined follow-up, and professional partner communication.",
    ],
    responsibilities: [
      "Lead sponsorship planning and work allocation",
      "Guide company prospecting and proposal preparation",
      "Support negotiation and partner communication",
      "Maintain relationships through the program lifecycle",
    ],
    challenges: [
      "Maintaining a consistent message across outreach activities",
      "Coordinating progress while managing different prospect responses",
    ],
    approach: [
      "Defined prospect priorities and communication ownership",
      "Structured follow-up around clear next steps",
      "Kept partner expectations connected to realistic program delivery",
    ],
    outcomes: [
      "Developed end-to-end sponsorship leadership experience",
      "Improved my confidence in negotiation, communication, and team coordination",
    ],
    lessons: ["Professionalism is built through clarity, consistency, and keeping commitments."],
  },
  {
    slug: "company-visit-trans-tv",
    year: "2026",
    order: 1,
    title: "Company Visit to TRANS TV",
    eyebrow: "Project leadership",
    role: "Project Leader",
    organization: "HIPMI PT Telkom",
    summary:
      "Leading a full committee taught me to align divisions, protect the program objective, and empower people to deliver their part.",
    featured: true,
    tags: ["Project Leadership", "Media Industry", "Decision Making"],
    background: [
      "The TRANS TV Company Visit was designed to give participants a closer view of the creative and media industry. As Project Leader, I was responsible for aligning the committee from planning through execution.",
    ],
    responsibilities: [
      "Translate the program objective into an actionable plan",
      "Coordinate division leaders and monitor cross-divisional progress",
      "Facilitate decisions when issues affected multiple workstreams",
      "Maintain alignment with external stakeholders and the visit objective",
    ],
    challenges: [
      "Keeping multiple divisions aligned under one timeline",
      "Making timely decisions with incomplete information",
      "Balancing detailed oversight with team autonomy",
    ],
    approach: [
      "Set clear priorities, owners, and progress checkpoints",
      "Escalated blockers based on their impact on the overall program",
      "Asked division leaders to own solutions within their scope",
    ],
    outcomes: [
      "Built practical experience leading an end-to-end committee",
      "Strengthened cross-divisional coordination and decision-making skills",
      "Deepened my understanding of leadership as enablement, not control",
    ],
    lessons: ["Successful leadership is not doing everything. It is helping every division move toward the same goal."],
  },
  {
    slug: "explore-business-2026",
    year: "2026",
    order: 2,
    title: "Explore Business",
    eyebrow: "Program leadership",
    role: "Vice Project Leader",
    organization: "HIPMI PT Telkom",
    summary:
      "As Vice Project Leader, I supported strategic planning and helped keep committee performance and cross-divisional collaboration on track.",
    tags: ["Planning", "Coordination", "Leadership"],
    background: [
      "The role expanded my leadership perspective by placing me between strategic planning and daily committee coordination.",
    ],
    responsibilities: [
      "Support the Project Leader in planning and coordination",
      "Monitor cross-divisional progress",
      "Help resolve dependencies and communication gaps",
      "Maintain consistency between plans and execution",
    ],
    challenges: [
      "Supporting leadership without creating unclear decision ownership",
      "Keeping information moving between divisions",
    ],
    approach: [
      "Clarified responsibilities with the Project Leader",
      "Focused coordination on dependencies and blockers",
      "Supported division leaders with practical next steps",
    ],
    outcomes: [
      "Improved my ability to support strategic and operational leadership simultaneously",
      "Strengthened cross-functional communication skills",
    ],
    lessons: ["Strong support leadership protects clarity and helps the whole team move faster."],
  },
  {
    slug: "csc-business-strategy",
    year: "2026",
    order: 3,
    title: "Business Strategy at CSC",
    eyebrow: "Operating excellence",
    role: "Department Manager of Business Strategy",
    organization: "Community Support Center Telkom University",
    summary:
      "CSC shifted my perspective from executing individual programs to designing standards and systems that improve organizational performance.",
    featured: true,
    tags: ["Business Strategy", "Quality", "Vendor Evaluation"],
    background: [
      "As Department Manager of Business Strategy within the Operating Division, I contribute to the quality of services, facilities, partnerships, and vendor performance provided to student organizations.",
      "The role challenges me to think beyond a single event and focus on repeatable systems that create lasting value.",
    ],
    responsibilities: [
      "Design operational strategies and quality standards",
      "Review partnerships before implementation",
      "Supervise services delivered by partners and vendors",
      "Evaluate partner and vendor performance",
      "Develop SOPs and recommendations for future collaboration",
    ],
    challenges: [
      "Turning broad quality expectations into practical criteria",
      "Balancing partner capability with organizational needs",
      "Building systems that remain useful beyond one period",
    ],
    approach: [
      "Break quality into observable service and delivery criteria",
      "Review partnerships across pre-execution, delivery, and evaluation stages",
      "Use findings to improve standards and future recommendations",
    ],
    outcomes: [
      "Contributed to a more systematic approach to partner and vendor quality",
      "Expanded my experience from event execution to operating excellence and governance",
    ],
    lessons: ["Sustainable impact comes from systems that help people make better decisions consistently."],
  },
];

export const years = ["2024", "2025", "2026"] as const;

export const yearIntros = {
  "2024": {
    title: "A New Beginning",
    text: "I started by learning how organizations work, appreciating operational detail, and connecting classroom ideas with the realities of industry.",
  },
  "2025": {
    title: "Growing Beyond Operations",
    text: "Greater responsibility moved me into partnership, sponsorship, team leadership, and systems that could support future committees.",
  },
  "2026": {
    title: "From Projects to Strategy",
    text: "Leadership expanded from coordinating programs to aligning teams, evaluating quality, and designing systems for sustainable performance.",
  },
};

export function getJourneyItem(slug: string) {
  return journeyItems.find((item) => item.slug === slug);
}

export function getJourneyByYear(year: string) {
  return journeyItems
    .filter((item) => item.year === year)
    .sort((a, b) => a.order - b.order);
}
