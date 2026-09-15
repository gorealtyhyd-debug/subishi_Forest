import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Intro from "@/components/Intro";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import Amenities from "@/components/Amenities";
import MasterPlan from "@/components/MasterPlan";
import FloorPlans from "@/components/FloorPlans";
import Specifications from "@/components/Specifications";
import LocationSection from "@/components/LocationSection";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Intro />
        <Gallery />
        <Features />
        <Amenities />
        <MasterPlan />
        <FloorPlans />
        <Specifications />
        <LocationSection />
        <Faq />
      </main>
      <Footer />
      <EnquiryModal />
    </>
  );
}
