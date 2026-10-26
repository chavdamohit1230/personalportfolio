export const devfolioData = {
  basic: {
    firstName: "Mohit",
    lastName: "Chavda",
    role: "Flutter Developer",
    experience: "1.5+ Years",
    email: "mohitchavda1230@gmail.com",
    address: "Ahmedabad, India",
    photo: "images/photos/mohit.jpeg",
    resume: "/images/Mohit_Chavda_Resume.pdf"
  },
  socials: [
    {
      icon: "fa-brands fa-github",
      url: "https://github.com/chavdamohit1230",
      label: "GitHub"
    },
    {
      icon: "fa-solid fa-envelope",
      url: "mailto:mohitchavda1230@gmail.com",
      label: "Email"
    }
  ],
  about: {
    heading: "Crafting fluid, high-performance mobile apps for Android & iOS.",
    paragraphs: [
      "I specialize in engineering cross-platform mobile applications with Flutter & Dart, focusing on 60fps native performance, responsive UI layouts, and scalable architectures.",
      "Having taken multiple apps to production on the Google Play Store and Apple App Store (including OnlyUs, TaskMate, Peers Global Unity, and Ryde IQ), I manage the full mobile lifecycle from architecture to store release.",
      "My daily tech stack centers around Clean Architecture, BLoC and Provider state management, real-time Firebase sync, REST APIs with Dio, and intelligent AI workflows using the Gemini API."
    ],
    stats: [
      { number: "4+", label: "Store Apps Deployed" },
      { number: "1.5+", label: "Years Experience" },
      { number: "4.8★", label: "Store Rating" },
      { number: "99.9%", label: "Crash-Free Rate" }
    ],
    education: {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Maharaja Krishnakumarsinhji Bhavnagar University (MKBU)",
      score: "CGPA: 8.5 / 10"
    },
    techCategories: [
      {
        name: "Mobile & Core",
        items: ["Flutter", "Dart", "Android", "iOS", "Clean Architecture"]
      },
      {
        name: "State & Logic",
        items: ["Bloc", "Provider", "Cubit", "Repository Pattern"]
      },
      {
        name: "Backend & Cloud",
        items: ["Firebase Auth", "Firestore", "Realtime DB", "Push Notifications", "REST APIs", "Dio & Retrofit"]
      },
      {
        name: "AI & Tools",
        items: ["Gemini AI API", "Git & GitHub", "Google Play Console", "App Store Connect", "Postman"]
      }
    ],
    tech: [
      "Flutter",
      "Dart",
      "Firebase",
      "Gemini AI API",
      "REST APIs (Dio & Retrofit)",
      "Bloc / Provider",
      "Android & iOS",
      "Clean Architecture",
      "Google Play Store",
      "Apple App Store",
      "Git & GitHub"
    ]
  },
  services: [
    {
      id: 1,
      badge: "01",
      title: "Flutter App Development",
      description: "Building fast, cross-platform Android and iOS apps from a single codebase",
      icon: "fa-brands fa-flutter"
    },
    {
      id: 2,
      badge: "02",
      title: "Real-Time Features",
      description: "Chat, push notifications, live data sync, and matchmaking with Firebase",
      icon: "fa-solid fa-bolt-lightning"
    },
    {
      id: 3,
      badge: "03",
      title: "AI-Powered Apps",
      description: "Smart features using the Gemini API, such as task suggestions and automation",
      icon: "fa-solid fa-wand-magic-sparkles"
    },
    {
      id: 4,
      badge: "04",
      title: "API and Backend Integration",
      description: "REST APIs with Dio and Retrofit, Firebase Auth, Firestore, and payment flows",
      icon: "fa-solid fa-network-wired"
    },
    {
      id: 5,
      badge: "05",
      title: "App Publishing and Release",
      description: "Taking apps live on the Google Play Store and Apple App Store",
      icon: "fa-brands fa-google-play"
    }
  ],
  projects: [
    {
      id: "peers-global-unity",
      title: "Peers Global Unity",
      tagline: "The World's Community for Collaboration",
      category: "Global Business & Collaboration Platform",
      badge: "01",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.peers.peersunity&pcampaignid=web_share",
      description: "Peers Global Unity is a community-driven collaboration platform designed to bring entrepreneurs, business owners, and professionals together to connect, learn, share resources, and grow their businesses.\n\nOur vision is to create a global community where people don't just build connections — they turn those connections into meaningful collaborations, business opportunities, and real-world impact.\n\nWe follow the LSR Model — Learning, Sales, and Resources — helping members gain knowledge, discover business opportunities, and access the resources they need to succeed.",
      highlights: [
        "Social Connectivity: Connect with entrepreneurs, professionals, and business owners worldwide.",
        "Real-Time Chat: Communicate instantly, build relationships, and discuss collaboration opportunities.",
        "P2P Meetings: Arrange peer-to-peer meetings to exchange ideas and explore business partnerships.",
        "Business Deals: Discover business opportunities, partnerships, and potential joint ventures.",
        "Business Referrals: Share referrals, recommend trusted businesses, and help members find new customers.",
        "Peers Coin System: Earn and use community coins to encourage participation, contribution, and engagement.",
        "Smart Matching: Find relevant people and potential collaborators based on business interests, skills, and goals.",
        "Speed Networking: Meet multiple professionals, introduce your business, and build valuable connections.",
        "Live Impact: Participate in community initiatives, share achievements, and create a positive impact.",
        "Peers Store: Discover business products, services, and opportunities within the Peers Global community."
      ],
      technologies: ["Flutter", "Dart", "Firebase", "Real-Time Sync", "REST APIs", "Clean Architecture", "P2P WebRTC"],
      images: [
        "/images/photos/p1.webp",
        "/images/photos/p2.webp",
        "/images/photos/p3.webp",
        "/images/photos/p4.webp",
        "/images/photos/p5.webp",
        "/images/photos/p6.webp"
      ],
      banner: "/images/photos/p1.webp"
    },
    {
      id: "only-us",
      title: "OnlyUs",
      category: "Private Relationship Space",
      badge: "02",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.ckfuturetech.onlyus&pcampaignid=web_share",
      description: "A private intimate space for couples featuring an interactive love garden, mood sharing, real-time location sharing, shared notes, and anniversary countdown reminders.",
      highlights: [
        "Interactive growing Love Garden leveled with shared interactions",
        "Real-time mood status sharing with custom reaction palettes",
        "Shared couple notes, tasks, live location sharing & anniversary countdowns",
        "Available live on Google Play Store with active users"
      ],
      technologies: ["Flutter", "Dart", "Firebase Auth", "Firestore", "Push Notifications", "Location Services"],
      images: [
        "/images/photos/u1.webp",
        "/images/photos/u2.webp",
        "/images/photos/u3.webp",
        "/images/photos/u4.webp",
        "/images/photos/u5.webp"
      ],
      banner: "/images/photos/u1.webp"
    },
    {
      id: "task-mate",
      title: "Task Mate",
      category: "AI Productivity & Smart Tasks",
      badge: "03",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.ckfuturetech.taskmate&pcampaignid=web_share",
      description: "A smart productivity companion powered by AI insights, personalized streak tracking, focus timers, and intelligent automated recommendations to elevate daily work efficiency.",
      highlights: [
        "Productivity percentage calculation with daily streak analytics",
        "Automated AI task recommendations and smart suggestions using Gemini API",
        "Integrated focus timer & clean dark mode interface",
        "Live on Google Play Store with 4.8 star community rating"
      ],
      technologies: ["Flutter", "Dart", "Gemini AI API", "State Management", "Local Storage", "Analytics"],
      images: [
        "/images/photos/t1.webp",
        "/images/photos/t2.webp",
        "/images/photos/t3.webp",
        "/images/photos/t4.webp",
        "/images/photos/t5.webp",
        "/images/photos/t6.webp"
      ],
      banner: "/images/photos/t1.webp"
    }
  ],
  contact: [
    {
      icon: "fa-solid fa-location-dot",
      title: "Location",
      description: "Ahmedabad, India",
      action: "https://maps.google.com/?q=Ahmedabad,+India"
    },
    {
      icon: "fa-solid fa-envelope",
      title: "Email",
      description: "mohitchavda1230@gmail.com",
      action: "mailto:mohitchavda1230@gmail.com"
    },
    {
      icon: "fa-brands fa-github",
      title: "GitHub",
      description: "Explore Repositories",
      action: "https://github.com/chavdamohit1230"
    }
  ]
};

export default devfolioData;
