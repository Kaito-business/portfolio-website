import { PersonalInfo, Project, Skill } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "山田太郎",
  title: "フルスタック開発者",
  description: "モダンなWeb技術を使用して、ユーザー体験を重視したアプリケーションを開発しています。React、TypeScript、Node.jsを得意とし、常に新しい技術を学び続けています。",
  profileImage: "/profile.jpg",
  location: "東京, 日本",
  email: "yamada@example.com",
  socialLinks: {
    github: "https://github.com/yamada-taro",
    linkedin: "https://linkedin.com/in/yamada-taro",
    twitter: "https://twitter.com/yamada_taro",
    website: "https://yamada-portfolio.com"
  }
};

export const skills: Skill[] = [
  {
    name: "React",
    category: "frontend",
    level: 90,
    experience: "3年",
    icon: "⚛️",
    color: "#61DAFB",
    projects: ["project1", "project2", "project3"]
  },
  {
    name: "TypeScript",
    category: "frontend",
    level: 85,
    experience: "2年",
    icon: "🔷",
    color: "#3178C6",
    projects: ["project1", "project2"]
  },
  {
    name: "Next.js",
    category: "frontend",
    level: 80,
    experience: "2年",
    icon: "▲",
    color: "#000000",
    projects: ["project1", "project3"]
  },
  {
    name: "Node.js",
    category: "backend",
    level: 75,
    experience: "2年",
    icon: "🟢",
    color: "#339933",
    projects: ["project2", "project3"]
  },
  {
    name: "PostgreSQL",
    category: "database",
    level: 70,
    experience: "1年",
    icon: "🐘",
    color: "#336791",
    projects: ["project2"]
  },
  {
    name: "Docker",
    category: "devops",
    level: 65,
    experience: "1年",
    icon: "🐳",
    color: "#2496ED",
    projects: ["project3"]
  }
];

export const projects: Project[] = [
  {
    id: "project1",
    title: "Eコマースプラットフォーム",
    description: "Next.js と Stripe を使用したモダンなオンラインショップ",
    longDescription: "React、Next.js、TypeScriptを使用して構築された高性能なEコマースプラットフォームです。Stripeでの決済処理、商品管理、ユーザー認証機能を実装しています。",
    technologies: [
      { name: "Next.js", category: "frontend", icon: "▲", color: "#000000" },
      { name: "TypeScript", category: "frontend", icon: "🔷", color: "#3178C6" },
      { name: "Tailwind CSS", category: "frontend", icon: "🎨", color: "#06B6D4" },
      { name: "Stripe", category: "other", icon: "💳", color: "#635BFF" }
    ],
    category: "web-app",
    imageUrl: "/projects/ecommerce.jpg",
    images: ["/projects/ecommerce.jpg", "/projects/ecommerce-2.jpg"],
    demoUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/yamada-taro/ecommerce-platform",
    featured: true,
    completedAt: new Date("2024-01-15"),
    status: "completed"
  },
  {
    id: "project2",
    title: "タスク管理アプリ",
    description: "チームコラボレーション機能付きタスク管理システム",
    longDescription: "チームでの協業を効率化するタスク管理アプリケーションです。リアルタイム更新、ドラッグ&ドロップインターフェース、進捗追跡機能を実装しています。",
    technologies: [
      { name: "React", category: "frontend", icon: "⚛️", color: "#61DAFB" },
      { name: "Node.js", category: "backend", icon: "🟢", color: "#339933" },
      { name: "PostgreSQL", category: "database", icon: "🐘", color: "#336791" },
      { name: "Socket.io", category: "other", icon: "🔌", color: "#010101" }
    ],
    category: "web-app",
    imageUrl: "/projects/taskapp.jpg",
    images: ["/projects/taskapp.jpg"],
    demoUrl: "https://taskapp-demo.com",
    githubUrl: "https://github.com/yamada-taro/task-management",
    featured: true,
    completedAt: new Date("2023-11-20"),
    status: "completed"
  },
  {
    id: "project3",
    title: "ポートフォリオサイト",
    description: "3D エフェクトを使用したインタラクティブなポートフォリオ",
    longDescription: "Three.js と Framer Motion を使用して作成したインタラクティブなポートフォリオサイトです。3D背景エフェクト、スムーズなアニメーション、レスポンシブデザインを実装しています。",
    technologies: [
      { name: "Next.js", category: "frontend", icon: "▲", color: "#000000" },
      { name: "Three.js", category: "frontend", icon: "🎯", color: "#049EF4" },
      { name: "Framer Motion", category: "frontend", icon: "🎬", color: "#FF0055" },
      { name: "Docker", category: "devops", icon: "🐳", color: "#2496ED" }
    ],
    category: "web-app",
    imageUrl: "/projects/portfolio.jpg",
    images: ["/projects/portfolio.jpg"],
    githubUrl: "https://github.com/yamada-taro/portfolio",
    featured: false,
    completedAt: new Date("2024-03-01"),
    status: "in-progress"
  }
];