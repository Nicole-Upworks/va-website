import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import TrustedBy from "../components/landing/Trustedby";
import Services from "../components/landing/Services";
import DailyWork from "../components/landing/Dailywork";
import HowItWorks from "../components/landing/Howitworks";
import Testimonials from "../components/landing/Testimonials";
import MoreServices from "../components/landing/MoreServices";
import WhyChooseUs from "../components/landing/WhyChooseUs";
import Pricing from "../components/landing/Pricing";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";
import FloatingChat from "../components/FloatingChat";
import BackToTop from "../components/BackToTop";
import PromoBar from "../components/landing/PromoBar";
import Contact from "../components/landing/Contact";
import About from "../components/landing/About";
import PromoVideo from "../components/landing/PromoVideo";
export default function Landing() {
  return (
    <div className="min-h-screen">
      <PromoBar />  
      <Navbar />
      <main>
        <Hero />
        {/* <About /> */}
        <PromoVideo />
      </main>

      <TrustedBy />
      <Services />
      <DailyWork />
      <HowItWorks />
      <Testimonials />
      <MoreServices />
      <WhyChooseUs />
      <Pricing />
      <CTA />
      {/* <Contact />   */}
      <Footer />
      {/* <FloatingChat /> */}
      <BackToTop />
    </div>
  );
}
