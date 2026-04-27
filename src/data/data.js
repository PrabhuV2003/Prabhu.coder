import { LuGauge, LuLayoutDashboard, LuLifeBuoy, LuServer, LuSmartphone, LuSparkles } from "react-icons/lu";
import w1 from "../assets/w1.png";
import w2 from "../assets/w2.png";
import w3 from "../assets/w3.png";
import w4 from "../assets/w4.png";
import w5 from "../assets/w5.png";
import w6 from "../assets/w6.png";

export const works = [
    {
        id: "w1",
        title: "Multi-Vendor E-Commerce",
        category: "E-Commerce",
        description: "A multi-vendor e-commerce platform where users can create their own stores and sell products online. Includes admin approval workflow for new store registrations, product management, order tracking, and vendor dashboards.",
        image: w1,
        tags: ["Next.js", "Clerk", "Neon", "Inngest"],
        year: 2024,
        link: "https://gocart-gs.vercel.app/",
    },
    {
        id: "w2",
        title: "AI Resume Builder",
        category: "SaaS Application",
        description: "An intelligent resume builder powered by AI that helps users create professional resumes. Features include AI-generated content suggestions, multiple templates, export to PDF, and real-time preview.",
        image: w2,
        tags: ["React", "Node.js", "MongoDB", "Express", "Inngest", "Gemini AI", "ImageKit"],
        year: 2024,
        link: "https://jioresume.com/",
    },
    {
        id: "w3",
        title: "Real-Time Chat App",
        category: "Chat Application",
        description: "A real-time messaging application with instant communication, online status indicators, message history, and responsive design for seamless conversations across devices.",
        image: w3,
        tags: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
        year: 2023,
        link: "https://quickchat.greatstack.in/",
    },
    {
        id: "w4",
        title: "AI Thumbnail Generator",
        category: "SaaS Application",
        description: "An AI-powered tool that generates eye-catching YouTube thumbnails from user inputs. Uses Gemini AI to create compelling visuals optimized for click-through rates.",
        image: w4,
        tags: ["React", "Node.js", "MongoDB", "Express", "Gemini AI"],
        year: 2023,
        link: "https://thumbnailgo.com/",
    },
    {
        id: "w5",
        title: "Hotel Booking Platform",
        category: "Web Development",
        description: "A comprehensive hotel booking platform allowing users to search accommodations, view availability, compare prices, and make reservations with secure payment integration.",
        image: w5   ,
        tags: ["React", "Express", "Stripe"],
        year: 2023,
        link: "https://hb-gs.vercel.app/",
    },
    {
        id: "w6",
        title: "Find Real Estate",
        category: "Web Development",
        description: "A real estate discovery platform enabling users to browse property listings, filter by location and price, view property details, and connect with agents.",
        image: w6,
        tags: ["React", "GSAP", "Postgres", "AWS"],
        year: 2022,
        link: "https://findrealestate.com/",
    },
];

export const services = [{
        icon: LuLayoutDashboard,
        title: "Web App Development",
        description: "End-to-end React / Next.js applications built with clean architecture, observability and a focus on time-to-market.",
        features: ["SaaS products", "Admin dashboards", "Internal tools"],
    },
    {
        icon: LuServer,
        title: "API & Backend Engineering",
        description: "Typed, well-tested APIs in Node.js or FastAPI — including auth, billing, webhooks and third-party integrations.",
        features: ["REST & GraphQL", "Auth & RBAC", "Stripe / Webhooks"],
    },
    {
        icon: LuSmartphone,
        title: "Mobile Development",
        description: "Cross-platform mobile experiences with React Native that feel native on iOS and Android — from prototype to the store.",
        features: ["React Native", "Offline-first", "App Store launch"],
    },
    {
        icon: LuGauge,
        title: "Performance & SEO",
        description: "Audits and hands-on work to fix Core Web Vitals, shrink bundles, tune caching and make your site feel instant.",
        features: ["Core Web Vitals", "Edge caching", "Accessibility"],
    },
    {
        icon: LuSparkles,
        title: "UI/UX Engineering",
        description: "Design-system-led front-end work — turning Figma files into tidy, reusable components your team will actually enjoy.",
        features: ["Design systems", "Animation", "Micro-interactions"],
    },
    {
        icon: LuLifeBuoy    ,
        title: "Technical Advisory",
        description: "Fractional CTO support for early-stage teams — architecture reviews, hiring, and a pragmatic roadmap to ship.",
        features: ["Architecture", "Hiring", "Code reviews"],
    },
];

export const process = [{
        step: "01",
        title: "Discover",
        description: "We start with a deep-dive call to understand your goals, users and constraints. You'll walk away with a clear scope, not a vague estimate.",
    },
    {
        step: "02",
        title: "Design",
        description: "Wireframes evolve into high-fidelity prototypes. We validate early with real users so you ship the right thing, not just ship things.",
    },
    {
        step: "03",
        title: "Build",
        description: "Weekly demos, visible progress on a shared board, and production-grade code from day one — no big-bang reveals at the end.",
    },
    {
        step: "04",
        title: "Launch",
        description: "We harden, monitor and ship. After go-live, I stay on for support and iteration so you keep compounding improvements.",
    },
];

export const testimonials = [{
        id: "t1",
        quote: "Alex rebuilt our core product in 11 weeks. The new stack is twice as fast, and our team actually enjoys working in the codebase now.",
        name: "Sophia Bennett",
        role: "CTO, Lumen Analytics",
        avatar: "https://i.pravatar.cc/150?img=47",
        rating: 5,
    },
    {
        id: "t2",
        quote: "Rare combination of taste and engineering rigor. We shipped our MVP in 6 weeks and closed our seed round on the back of the demo.",
        name: "Marcus Reid",
        role: "Founder, Driftwood",
        avatar: "https://i.pravatar.cc/150?img=12",
        rating: 5,
    },
    {
        id: "t3",
        quote: "From Figma to App Store in under three months, zero drama. Alex is the kind of partner you keep on speed-dial for every launch.",
        name: "Priya Shah",
        role: "Product Lead, Paceline",
        avatar: "https://i.pravatar.cc/150?img=32",
        rating: 5,
    },
    {
        id: "t4",
        quote: "Our conversion rate jumped 27% after the new storefront went live. Pixel-perfect, blazing fast, and a delight to collaborate with.",
        name: "Daniel Okafor",
        role: "Head of Growth, Kline",
        avatar: "https://i.pravatar.cc/150?img=15",
        rating: 5,
    },
];
