import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/hero/HeroSection';
import AboutSection from '@/components/about/AboutSection';
import SkillsSection from '@/components/skills/SkillsSection';
import ProjectsSection from '@/components/projects/ProjectsSection';
import ContactSection from '@/components/contact/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
