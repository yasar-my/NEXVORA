export const liveProjects = [
  {
    id: 'spendora', number: '01', name: 'Spendora', type: 'Expense tracking',
    category: 'Expense Tracking', status: 'Live link supplied · verify deployment',
    description: 'An expense-tracking experience. The supplied live deployment and RoomLife repository are kept distinct until their relationship is confirmed.',
    stack: ['Project details to verify'], demo: 'https://spendora-three.vercel.app/',
    repo: 'https://github.com/yasar-my/Expense-Tracker', visual: 'spendora',
    caseStudy: 'Spendora / RoomLife',
    details: ['Expense workflow and deployment identity need a direct comparison', 'RoomLife README documents date-based entries and meal breakdowns', 'LocalStorage persistence is documented for RoomLife only']
  },
  {
    id: 'feast', number: '02', name: 'Feast & Fete', type: 'Full-stack booking platform',
    category: 'Full-Stack Applications', status: 'Repository README inspected',
    description: 'A catering booking platform with customer and organizer workflows, protected routes and role-aware access.',
    stack: ['React', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Microservices'],
    demo: 'https://feast-fete.vercel.app/', repo: 'https://github.com/yasar-my/feast-fete',
    visual: 'feast', caseStudy: 'Feast & Fete',
    details: ['Customer and organizer authentication', 'Organizer profile management and booking requests', 'Auth, Profile, Booking and Payment service modules are documented']
  },
  {
    id: 'yasar-main', number: '03', name: 'Yasar M Portfolio', type: 'Developer portfolio',
    category: 'Developer Portfolios', status: 'Deployment supplied · association to verify',
    description: 'A personal portfolio deployment. Review the live site to confirm its current content and implementation.',
    stack: ['Technology stack to verify'], demo: 'https://yasar-m-portfolio.vercel.app/',
    repo: 'https://github.com/yasar-my/yasar-portfolio', visual: 'portfolio',
    caseStudy: 'Portfolio implementations',
    details: ['Portfolio deployment supplied by the developer', 'Repository association requires confirmation', 'Project cards avoid claiming unverified features']
  },
  {
    id: 'yasar-3d', number: '04', name: 'Yasar Portfolio', type: '3D-style developer portfolio',
    category: 'Developer Portfolios', status: 'README inspected · live association to verify',
    description: 'A portfolio codebase documented with animated sections, a stack visualization, resume, project and contact sections.',
    stack: ['React', 'Vite', 'Framer Motion', 'CSS', 'Lucide React'],
    demo: 'https://yasar-portfolio-swart.vercel.app/', repo: 'https://github.com/yasar-my/3D-PortFolio',
    visual: 'portfolio3d', caseStudy: 'Portfolio implementations',
    details: ['Animated hero and stack visualization documented', 'Resume, experience, certifications and contact sections documented', 'Deployment-to-repository match is not assumed']
  },
  {
    id: 'marvel', number: '05', name: 'Marvel × X-Men Cinematic Universe', type: 'Movie discovery experience',
    category: 'Interactive Web Experiences', status: 'Repository README inspected',
    description: 'A cinematic catalogue concept with search, filtering, detail pages and a horizontal timeline.',
    stack: ['React', 'Vite', 'React Router', 'Framer Motion', 'Lucide React'],
    demo: 'https://marvel-xmen-cinematic-universe.vercel.app/',
    repo: 'https://github.com/yasar-my/marvel-xmen-cinematic-timeline', visual: 'marvel',
    caseStudy: 'Marvel × X-Men',
    details: ['Search and universe/type/category filters documented', 'Movie details, character gallery and trailer modal documented', 'README notes that poster assets and trailer links may be placeholders']
  }
];

export const caseStudies = [
  {
    id: 'feast-case', eyebrow: 'CASE STUDY / 01', title: 'Feast & Fete',
    subtitle: 'A structured booking flow for customers and catering organizers.',
    challenge: 'Make it easier for customers to explore catering options and request bookings while keeping organizer workflows protected.',
    approach: 'The repository README describes a React frontend communicating with Spring Boot services. Authentication, profile and booking responsibilities are separated into service modules.',
    architecture: ['React UI', 'API requests', 'Auth / Profile / Booking services', 'Spring Data JPA', 'MySQL'],
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'React', 'MySQL'],
    notes: ['JWT-based protected access and role-based modules are documented.', 'The resume mentions Razorpay and Cloudinary integrations; verify the current source and deployment before relying on these in production.', 'Exact token storage, expiry, refresh-token strategy and endpoint paths require source-level verification.']
  },
  {
    id: 'spendora-case', eyebrow: 'CASE STUDY / 02', title: 'Spendora / RoomLife',
    subtitle: 'A practical approach to everyday expense tracking.',
    challenge: 'Keep everyday expenses organized by date and category with a compact, mobile-first interface.',
    approach: 'The RoomLife README documents a React + Vite single-device app with browser LocalStorage. Spendora is a separate supplied deployment until consistency is verified.',
    architecture: ['React components', 'Local UI state', 'Expense calculations', 'Browser LocalStorage'],
    stack: ['React', 'Vite', 'JavaScript', 'CSS', 'LocalStorage'],
    notes: ['RoomLife documents add, edit and delete flows.', 'Food totals include breakfast, lunch and dinner; a grand total is documented.', 'No login or backend is documented for RoomLife.']
  },
  {
    id: 'marvel-case', eyebrow: 'CASE STUDY / 03', title: 'Marvel × X-Men',
    subtitle: 'A searchable cinematic timeline built around centralized content data.',
    challenge: 'Help visitors navigate a large fictional movie and series catalogue without losing the distinction between continuities.',
    approach: 'The README documents React Router, Framer Motion and centralized movie data, with search, filters, detail pages and an interactive timeline.',
    architecture: ['Central movie data', 'Search & filters', 'React Router pages', 'Motion transitions'],
    stack: ['React', 'Vite', 'React Router', 'Framer Motion', 'Lucide React'],
    notes: ['Loading, error and empty states are documented.', 'The README describes trailer URLs as configurable and some artwork as placeholders.', 'Live behavior should be checked before promising every feature.']
  },
  {
    id: 'throttle-case', eyebrow: 'CASE STUDY / 04', title: 'THROTTLE-THEORY',
    subtitle: 'A product browsing and cart interaction concept.',
    challenge: 'Present products clearly and let visitors explore details and interact with a cart.',
    approach: 'Available project notes describe a React frontend with product browsing, product details and cart interactions.',
    architecture: ['Product listing', 'Product detail view', 'Cart state', 'Responsive UI'],
    stack: ['React', 'JavaScript', 'HTML', 'CSS'],
    notes: ['Checkout, payments, authentication and backend behavior are not claimed.', 'No live demo URL was supplied for this project.']
  }
];