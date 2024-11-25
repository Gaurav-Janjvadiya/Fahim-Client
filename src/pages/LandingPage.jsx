import { HeroSection, Features, HowItWorks, About, Faq } from "../components";

function LandingPage() {
  return (
    <>
      <div className="min-h-screen py-12">
        <HeroSection />
      </div>
      <div className="min-h-screen py-12">
        <Features />
      </div>
      <div className="min-h-screen py-12">
        <HowItWorks />
      </div>
      <div className="min-h-screen py-12">
        <About />
      </div>
      <div className="min-h-screen py-12">
        <Faq />
      </div>
    </>
  );
}

export default LandingPage;
