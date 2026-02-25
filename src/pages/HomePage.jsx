import Navbar from "../components/Navbar";
import HiringPartners from "../components/HiringPartners";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import HeroSection from "./sections/HeroSection";
import TickerSection from "./sections/TickerSection";
// import CoursesSection from "./sections/CoursesSection";
import WhySection from "./sections/WhySection";
import ProcessSection from "./sections/ProcessSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import CTASection from "./sections/CTASection";
import Program from "./sections/ProgramsSection";
import Mentor from "./sections/MentorsSection";
import SuccessStories from "./sections/SuccessStories";

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
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
