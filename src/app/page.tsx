import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Services from "@/components/Services";
import Capabilities from "@/components/Capabilities";
import Mission from "@/components/Mission";
import ClientLogosSection from "@/components/ClientLogosSection";
import InfrastructureSection from "@/components/InfrastructureSection";
import Portfolio from "@/components/Portfolio";
import HomeGallerySection from "@/components/HomeGallerySection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <Services />
        <Capabilities />
        <Mission />
        <ClientLogosSection />
        <InfrastructureSection />
        <Portfolio />
        <HomeGallerySection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
