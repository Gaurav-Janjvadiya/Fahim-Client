import { HeroSection, Features, HowItWorks, About, Faq } from "../components";

function LandingPage() {
  return (
    <>
      <div className="mt-8">
        <HeroSection />
      </div>
      <div className="mt-16">
        <Features />
      </div>
      <div className="mt-16">
        <HowItWorks />
      </div>
      <div className="mt-16">
        <About />
      </div>
      <div className="mt-16">
        <Faq />
      </div>
    </>
  );
}

export default LandingPage;
