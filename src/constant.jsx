const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "My Profile",
    path: "/my-profile",
  },
];

const blogs = [
  {
    question: "What is useState and how does it work in React?",
    answer:
      "useState is a Hook in React that lets us add state to functional components. It returns a stateful value and a function to update it. When we call the update function, React re-renders the component with the new state.",
  },
  {
    question: "What is the purpose of useEffect in React?",
    answer:
      "useEffect lets us perform side effects in our components, such as fetching data, updating the DOM, or setting up subscriptions. It runs after the component renders and can depend on specific values to control when it re-runs.",
  },
  {
    question: "What is a custom hook in React and when should we use one?",
    answer:
      "A custom hook is a JavaScript function that starts with 'use' and uses other hooks internally. We use it to extract and reuse logic across multiple components, helping keep our code clean and DRY (Don't Repeat Yourself).",
  },
  {
    question:
      "Difference between controlled and uncontrolled components? Which one is better?",
    answer:
      "Controlled components are form elements where React manages the state using useState or similar. Uncontrolled components use refs to access form values directly from the DOM. Controlled components are preferred for predictable behavior and easier debugging.",
  },
  {
    question: "Tell us something about useFormStatus() (explore and explain)",
    answer:
      "useFormStatus is a React hook used with forms, particularly in frameworks like Next.js with Server Actions. It provides the current state of the form submission (like pending, success, or error) so we can show feedback (like a loading spinner) while the form is being submitted.",
  },
];

const boxes = [
  {
    id: 1,
    name: "Smart Home Box",
    thumbnail: "https://example.com/images/smart-home-box-thumbnail.jpg",
    banner: "https://example.com/images/smart-home-box-banner.jpg",
    frequency: "Yearly",
    price: 199.99,
    description:
      "Transform your home into a smart home with curated smart devices, home automation products, and IoT gadgets.",
    tech_category: "Smart Home",
    features: [
      "Smart Home Devices",
      "Home Automation Tools",
      "Cutting-edge IoT Gadgets",
    ],
    subscription_benefits: [
      "Discount on Future Smart Home Purchases",
      "Exclusive Smart Home Tutorials",
      "Early Access to Product Releases",
    ],
    ratings: 4.8,
    number_of_reviews: 315,
  },
  {
    id: 2,
    name: "AI Developer Kit",
    thumbnail: "https://example.com/images/ai-developer-kit-thumbnail.jpg",
    banner: "https://example.com/images/ai-developer-kit-banner.jpg",
    frequency: "Monthly",
    price: 49.99,
    description:
      "Jumpstart your AI journey with components, tutorials, and tools for machine learning projects.",
    tech_category: "Artificial Intelligence",
    features: [
      "Neural Network Demos",
      "ML Hardware Boards",
      "Python-based Projects",
    ],
    subscription_benefits: [
      "Monthly AI Challenges",
      "Access to GitHub Repos",
      "Exclusive Webinars with Experts",
    ],
    ratings: 4.6,
    number_of_reviews: 198,
  },
  {
    id: 3,
    name: "Gaming Gear Crate",
    thumbnail: "https://example.com/images/gaming-gear-thumbnail.jpg",
    banner: "https://example.com/images/gaming-gear-banner.jpg",
    frequency: "Quarterly",
    price: 89.99,
    description:
      "Enhance your gaming experience with high-quality accessories and themed collectibles.",
    tech_category: "Gaming",
    features: ["Ergonomic Controllers", "Gaming Headsets", "RGB Accessories"],
    subscription_benefits: [
      "Beta Access to New Games",
      "Game-Themed Merch",
      "Community Gaming Events",
    ],
    ratings: 4.7,
    number_of_reviews: 254,
  },
  {
    id: 4,
    name: "Cybersecurity Toolkit",
    thumbnail: "https://example.com/images/cybersecurity-toolkit-thumbnail.jpg",
    banner: "https://example.com/images/cybersecurity-toolkit-banner.jpg",
    frequency: "Monthly",
    price: 59.99,
    description:
      "Learn and apply cybersecurity techniques with this monthly hands-on toolkit.",
    tech_category: "Cybersecurity",
    features: [
      "Pen Testing Tools",
      "Ethical Hacking Labs",
      "Security Best Practices",
    ],
    subscription_benefits: [
      "Online Labs Access",
      "Certificate of Completion",
      "Community Challenges",
    ],
    ratings: 4.5,
    number_of_reviews: 142,
  },
  {
    id: 5,
    name: "Drone Builder Box",
    thumbnail: "https://example.com/images/drone-builder-thumbnail.jpg",
    banner: "https://example.com/images/drone-builder-banner.jpg",
    frequency: "Bi-Monthly",
    price: 129.99,
    description:
      "Get all you need to build, fly, and learn drone technology from the ground up.",
    tech_category: "Drones",
    features: [
      "DIY Drone Kits",
      "Flight Controllers",
      "Drone Programming Tutorials",
    ],
    subscription_benefits: [
      "FPV Flight Training",
      "Exclusive Repair Guides",
      "Drone Racing Invites",
    ],
    ratings: 4.9,
    number_of_reviews: 391,
  },
  {
    id: 6,
    name: "Robotics Starter Pack",
    thumbnail: "https://example.com/images/robotics-starter-thumbnail.jpg",
    banner: "https://example.com/images/robotics-starter-banner.jpg",
    frequency: "Monthly",
    price: 74.99,
    description:
      "Learn robotics step-by-step with modular kits and educational content.",
    tech_category: "Robotics",
    features: ["Sensor Modules", "Motor Controllers", "Hands-on Robot Builds"],
    subscription_benefits: [
      "Video Tutorials",
      "Live Q&A Sessions",
      "STEM Learning Tracks",
    ],
    ratings: 4.4,
    number_of_reviews: 167,
  },
  {
    id: 7,
    name: "AR/VR Explorer Pack",
    thumbnail: "https://example.com/images/ar-vr-thumbnail.jpg",
    banner: "https://example.com/images/ar-vr-banner.jpg",
    frequency: "Quarterly",
    price: 109.99,
    description:
      "Dive into immersive technology with tools and experiences in AR and VR.",
    tech_category: "AR/VR",
    features: [
      "VR Headset Accessories",
      "AR Dev Kits",
      "Interactive Tutorials",
    ],
    subscription_benefits: [
      "Virtual Developer Meetups",
      "Pre-release Game Demos",
      "App Store Credit",
    ],
    ratings: 4.3,
    number_of_reviews: 121,
  },
  {
    id: 8,
    name: "Wearable Tech Kit",
    thumbnail: "https://example.com/images/wearable-tech-thumbnail.jpg",
    banner: "https://example.com/images/wearable-tech-banner.jpg",
    frequency: "Yearly",
    price: 149.99,
    description:
      "Experiment with smart wearable projects for health, fitness, and style.",
    tech_category: "Wearable Tech",
    features: [
      "Smartwatch Components",
      "Flexible Sensors",
      "Health Tracking Modules",
    ],
    subscription_benefits: [
      "Design Blueprints",
      "Fabrication Techniques",
      "Fitness Tech Insights",
    ],
    ratings: 4.7,
    number_of_reviews: 209,
  },
  {
    id: 9,
    name: "3D Printing Club Box",
    thumbnail: "https://example.com/images/3d-printing-thumbnail.jpg",
    banner: "https://example.com/images/3d-printing-banner.jpg",
    frequency: "Monthly",
    price: 69.99,
    description:
      "Advance your 3D printing skills with materials, models, and expert advice.",
    tech_category: "3D Printing",
    features: [
      "High-Quality Filaments",
      "CAD Templates",
      "Printer Maintenance Kits",
    ],
    subscription_benefits: [
      "Exclusive Model Library",
      "Print Competitions",
      "Pro Tips Newsletter",
    ],
    ratings: 4.6,
    number_of_reviews: 189,
  },
  {
    id: 10,
    name: "Cloud DevOps Crate",
    thumbnail: "https://example.com/images/cloud-devops-thumbnail.jpg",
    banner: "https://example.com/images/cloud-devops-banner.jpg",
    frequency: "Monthly",
    price: 59.99,
    description:
      "Master cloud and DevOps practices through curated learning paths and tools.",
    tech_category: "Cloud Computing",
    features: [
      "CI/CD Pipelines",
      "Containerization Labs",
      "Cloud Platform Guides",
    ],
    subscription_benefits: [
      "Practice Environments",
      "Industry Use Cases",
      "Mentor Support",
    ],
    ratings: 4.5,
    number_of_reviews: 146,
  },
];
export { links, blogs, boxes };
