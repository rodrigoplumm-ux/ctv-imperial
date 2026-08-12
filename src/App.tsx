import { CheckoutProvider } from "./lib/checkout";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Showcase } from "./components/Showcase";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { CheckoutModal } from "./components/CheckoutModal";
import { MobileCTA } from "./components/MobileCTA";

export default function App() {
  return (
    <CheckoutProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-ink text-ivory">
        <div className="grain" aria-hidden="true" />
        <Navbar />
        <main id="conteudo">
          <Hero />
          <SocialProof />
          <Features />
          <HowItWorks />
          <Showcase />
          <Benefits />
          <Testimonials />
          <Pricing />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <MobileCTA />
        <CheckoutModal />
      </div>
    </CheckoutProvider>
  );
}
