import Navbar from "../components/Navbar";
import HiringPartners from "../components/HiringPartners";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import HeroSection from "./sections/HeroSection";
import TickerSection from "./sections/TickerSection";
// import CoursesSection from "./sections/CoursesSection";
import WhySection from "./sections/WhySection";
import ProcessSection from "./sections/ProcessSection";
// import TestimonialsSection from "./sections/TestimonialsSection";
import CTASection from "./sections/CTASection";
import CTAlight from "./sections/CTAlight";
import Program from "./sections/ProgramsSection";
import Mentor from "./sections/MentorsSection";
import SuccessStories from "./sections/SuccessStories";
import  FAQSection  from './sections/FAQSection-DarkTheme';
import Certifications  from "./sections/Certifications";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TickerSection />
        <WhySection />
        <Program />
        <Mentor />
        {/* <CoursesSection /> */}
        <SuccessStories />
        <HiringPartners />
        <ProcessSection />
        {/* <TestimonialsSection /> */}
        <Certifications />
        <FAQSection />
        <CTAlight />
        {/* <CTASection /> */}
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
