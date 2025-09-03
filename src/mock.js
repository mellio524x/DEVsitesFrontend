

export const mockCompanyInfo = {
  name: "DEVSITES404",
  tagline: "Professional Web Development Services",
  description: "We build modern, responsive websites using React and Express with professional design and fast turnaround times.",
  certifications: ["Certified Full-Stack Developer"],
  turnaroundTime: "2 weeks average",
  deployment: "Render (and other platforms available)"
};

export const mockPricing = {
  basic: {
    name: "Basic Website",
    price: 49.99,
    pages: "Up to 3 pages",
    features: [
      "Responsive design",
      "Basic contact form",
      "SEO optimization",
      "Mobile-friendly",
      "2-week delivery"
    ]
  },
  standard: {
    name: "Standard Website", 
    price: 69.99,
    pages: "3+ pages (unlimited)",
    features: [
      "Advanced responsive design",
      "Multiple contact forms",
      "Advanced SEO optimization",
      "Performance optimization",
      "Social media integration",
      "Priority support"
    ]
  },
  addOns: {
    domain: {
      name: "Domain Setup",
      price: 19.99,
      description: "We register and connect your domain for the first year"
    },
    database: {
      name: "Database Setup",
      price: 29.99,
      description: "Small database for user management (emails, names, user info)"
    }
  }
};

export const mockTechnologies = [
  {
    name: "React",
    description: "Modern frontend framework for interactive user interfaces"
  },
  {
    name: "Express.js",
    description: "Fast, minimal backend framework for Node.js"
  },
  {
    name: "MongoDB",
    description: "Flexible NoSQL database for scalable data storage"
  },
  {
    name: "Render",
    description: "Reliable cloud platform for easy deployment"
  }
];

export const mockServices = [
  {
    title: "Website Development",
    description: "Custom websites built with React and modern technologies"
  },
  {
    title: "Web Applications", 
    description: "Interactive web apps with Express backends"
  },
  {
    title: "Database Integration",
    description: "Small databases for user management and data storage"
  },
  {
    title: "Domain & Hosting",
    description: "Complete setup including domain registration and deployment"
  }
];

export const mockContactInfo = {
  email: "contact@devsites404.com",
  phone: "+1 (555) 404-DEVS",
  location: "Remote Development Services",
  responseTime: "Within 24 hours",
  socialMedia: {
    github: "#",
    linkedin: "#", 
    twitter: "#"
  }
};

export const mockTestimonials = [
  {
    name: "Sarah Johnson",
    company: "Local Business Owner",
    text: "DEVSITES404 delivered exactly what we needed on time and within budget. Great communication throughout!",
    rating: 5
  },
  {
    name: "Mike Chen",
    company: "Startup Founder",
    text: "Professional work with modern design. The React website they built loads super fast and looks amazing.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    company: "Freelance Designer",
    text: "Working with a certified developer made all the difference. They understood exactly what I needed.",
    rating: 5
  }
];

export const mockStats = {
  projectsCompleted: "100+",
  averageTurnaround: "2 weeks",
  clientSatisfaction: "99%",
  supportAvailability: "24/7"
};

// Mock form submission function
export const mockSubmitContactForm = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Mock form submission:", formData);
      resolve({
        success: true,
        message: "Thank you for your message! We'll get back to you within 24 hours."
      });
    }, 1000);
  });
};

// Mock newsletter signup
export const mockNewsletterSignup = (email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Mock newsletter signup:", email);
      resolve({
        success: true,
        message: "Successfully subscribed to updates!"
      });
    }, 500);
  });
};

// Mock project inquiry
export const mockProjectInquiry = (projectData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Mock project inquiry:", projectData);
      const estimatedCost = calculateMockEstimate(projectData);
      resolve({
        success: true,
        estimatedCost,
        message: "We'll prepare a detailed proposal and send it to you within 24 hours."
      });
    }, 1500);
  });
};

// Helper function to calculate mock project estimate
const calculateMockEstimate = (projectData) => {
  let basePrice = projectData.projectType === "basic" ? 49.99 : 69.99;
  
  if (projectData.includeDomain) {
    basePrice += 19.99;
  }
  
  if (projectData.includeDatabase) {
    basePrice += 29.99;
  }
  
  return basePrice;
};

export default {
  mockCompanyInfo,
  mockPricing,
  mockTechnologies,
  mockServices,
  mockContactInfo,
  mockTestimonials,
  mockStats,
  mockSubmitContactForm,
  mockNewsletterSignup,
  mockProjectInquiry
};