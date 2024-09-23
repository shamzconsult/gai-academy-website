import Footer from "@/components/atom/footer";
import Logo from "@/components/atom/gia-logo";
import FrequentlyAskQuestions from "@/components/home/faqs-section";
import HeroSection from "@/components/home/hero-section";
import OurPartners from "@/components/home/our-partners";
import OurServices from "@/components/home/our-services";
import Waitlist from "@/components/home/waitlist";

export default function Home() {
  return (
    <main>
      <div className="max-w-6xl mx-auto pt-2 px-5 ">
        <Logo />
        <HeroSection />
        <OurPartners />
        <OurServices />
        <FrequentlyAskQuestions />
        <Waitlist />
      </div>
      <Footer />
    </main>
  );
}
