export type Post = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  sections: { heading?: string; paragraphs: string[]; quote?: string }[];
};

export const posts: Post[] = [
  {
    slug: "leadership-is-clarity-not-control",
    category: "Leadership",
    title: "Leadership Is Clarity, Not Control",
    excerpt: "What my first division leadership role taught me about delegation, trust, and creating the conditions for a team to perform.",
    date: "July 2026",
    readTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "My first major leadership lesson did not come from a textbook. It came when I became Head of Logistics Division for the Staff Muda program at HIPMI PT Telkom. Until then, I had been responsible for my own tasks. The new role made me responsible for the readiness of an entire division.",
          "My first instinct was to stay close to every detail. That felt responsible, but it quickly revealed a problem. A team cannot grow when all decisions and information stop with one person. Leadership required me to shift from completing the work myself to creating clarity for other people.",
        ],
      },
      {
        heading: "Make ownership visible",
        paragraphs: [
          "Clear ownership reduced uncertainty. I broke the work into practical areas, matched assignments with team readiness, and used check-ins to discuss blockers and next actions. The purpose was not to monitor every movement. It was to make sure each person understood what success looked like and where to ask for support.",
          "Delegation also required trust. Giving someone responsibility without giving them room to decide is not real delegation. I learned to stay available for escalation while allowing team members to solve issues within their scope.",
        ],
        quote: "A leader does not need to carry every task. A leader needs to protect clarity, trust, and direction.",
      },
      {
        heading: "Leadership as enablement",
        paragraphs: [
          "That perspective became more important when I later led a full committee for the TRANS TV Company Visit. Different divisions had different responsibilities, but the program could only work if their timelines and decisions connected.",
          "I still have much to learn, but one principle has become clear. Leadership is not the ability to control the most details. It is the ability to help people understand the goal, own their work, and move together when conditions change.",
        ],
      },
    ],
  },
  {
    slug: "partnership-is-a-system",
    category: "Partnership",
    title: "Partnership Is a System, Not a Contact List",
    excerpt: "Why useful partnership work needs context, disciplined follow-up, and a clear understanding of mutual value.",
    date: "July 2026",
    readTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "When I joined the Partnership Department at HIPMI PT Telkom, I initially saw the work as finding companies and sending messages. The real work was much broader. A partnership requires research, relevance, professional communication, follow-up, and continuity.",
          "This became clear when I helped structure a database for potential Company Visit and Explore Business partners. A simple contact list could tell us who a company was. It could not tell us why the company was relevant, who had contacted them, what had already been discussed, or what the next committee should do.",
        ],
      },
      {
        heading: "Context makes information useful",
        paragraphs: [
          "The database needed company profiles, industry categories, contact persons, communication history, partnership opportunities, and visit feasibility. Those fields transformed scattered information into a working memory for the department.",
          "The same principle applied to outreach. A generic message focuses on what the sender wants. A useful partnership message explains why the opportunity is relevant to the recipient and what value both sides can create.",
        ],
        quote: "A contact list stores names. A partnership system preserves context, trust, and continuity.",
      },
      {
        heading: "Relationships continue after the first reply",
        paragraphs: [
          "Professional follow-up is not only about persistence. It is about timing, clarity, and respect. Each interaction should make the next step easier to understand. Good documentation also prevents a new committee from restarting the relationship without context.",
          "This experience changed how I see partnership development. The outcome is not only a signed agreement or a completed visit. The outcome is also the quality of the relationship and the system that allows collaboration to improve over time.",
        ],
      },
    ],
  },
  {
    slug: "what-company-visits-taught-me",
    category: "Business Learning",
    title: "What Company Visits Taught Me About Business Systems",
    excerpt: "Lessons from Sari Roti, OPPO, and PT Agate about consistency, customer experience, and multidisciplinary execution.",
    date: "July 2026",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "Company visits became one of the most practical parts of my learning journey. They allowed me to connect concepts from Business Administration with decisions, routines, and standards inside real companies.",
          "Three visits gave me especially different perspectives. Sari Roti showed the discipline behind consistent production. OPPO highlighted technology, branding, and customer experience. PT Agate showed how creative, technical, product, and business teams collaborate to build digital products.",
        ],
      },
      {
        heading: "Consistency is designed",
        paragraphs: [
          "At Sari Roti, the most important lesson was not the scale of production alone. It was the system behind repeatable quality. Supply chain management, SOPs, production planning, and quality control work together so customers can expect the same product experience.",
          "This made operational management feel more concrete. A strong result is rarely caused by one impressive action. It usually comes from standards that people can follow repeatedly.",
        ],
      },
      {
        heading: "Products live inside an experience",
        paragraphs: [
          "OPPO broadened the discussion from production to how a company builds an ecosystem around its products. Technology matters, but so do branding, people, innovation, and the experience customers have before and after a purchase.",
          "PT Agate added another dimension. Game development depends on creativity, but creativity must connect with product decisions, technical execution, teamwork, and market understanding. Innovation becomes useful when different disciplines can move together.",
        ],
        quote: "Strong businesses do not only produce outputs. They design systems that make value repeatable.",
      },
      {
        heading: "The lesson I carry forward",
        paragraphs: [
          "The companies were different, but the common pattern was clear. Each relied on coordination across people, processes, and customer value. That pattern now shapes how I look at projects, partnerships, and operating quality in my own organizational work.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
