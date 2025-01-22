import Banner from "./components/HomepageComponents/Banner";
import Browse from "./components/HomepageComponents/Browse";
import FeaturedProducts from "./components/HomepageComponents/FeaturedProducts";
import Hero from "./components/HomepageComponents/HeroSection/Hero";
import Testimonials from "./components/HomepageComponents/Testimonial/Testimonals";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Banner />
      <FeaturedProducts />
      <div className="line h-[1px] bg-[#0000001a] w-[95%] mx-auto"></div>
      <Browse />
      <Testimonials />
    </div>
  );
}
