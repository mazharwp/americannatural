import Banner from "../components/home/Banner";
import BeyondSection from "../components/home/BeyondSection";
import CTASection from "../components/home/CTASection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import IndustryLeader from "../components/home/IndustryLeader";
import Services from "../components/home/Services";

function Home() {
  return (
    <>
      <Banner />
      <FeaturedProducts />
      <IndustryLeader />
      <BeyondSection />
      <CTASection />
      <Services />
    </>
  );
}

export default Home;