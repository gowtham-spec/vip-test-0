
import Header from "@/components/Header";
import CybersecurityHeroNew from "@/components/CybersecurityHeroNew";
import TrustedTechnology from "@/components/TrustedTechnology";
import FeaturesSection from "@/components/FeaturesSection";
import TopCoursesSection from "@/components/TopCoursesSection";
import CommunitySection from "@/components/CommunitySection";
import CybersecurityStats from "@/components/CybersecurityStats";
import CybersecurityTestimonial from "@/components/CybersecurityTestimonial";
import CybersecurityCTA from "@/components/CybersecurityCTA";
import ExtraContent from "@/components/ExtraContent";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import NewCoursesSection from "@/components/NewCoursesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="w-4/5 mx-auto">
        <Header />
        <div className="w-full px-4 md:px-8 xl:px-16 lg:px-0">
          <CybersecurityHeroNew />
          <FeaturesSection />
          <TopCoursesSection />
          <NewCoursesSection />
          <CybersecurityStats />
          <ExtraContent />
          <CommunitySection />
          <CybersecurityTestimonial />
          <TrustedTechnology />
          <CybersecurityCTA />
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </div>
  );
};

export default Index;
