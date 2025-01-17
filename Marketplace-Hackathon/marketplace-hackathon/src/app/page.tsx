import Banner from "./components/HomepageComponents/Banner";
import Browse from "./components/HomepageComponents/Browse";
import NewArrivals from "./components/HomepageComponents/ClothesSection/NewArrivals";
import TopSelling from "./components/HomepageComponents/ClothesSection/TopSelling";
import Hero from "./components/HomepageComponents/HeroSection/Hero";
import Testimonials from "./components/HomepageComponents/Testimonial/Testimonals";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Banner />
      <NewArrivals />
      <div className="line h-[1px] bg-[#0000001a] w-[95%] mx-auto"></div>
      <TopSelling />
      <Browse />
      <Testimonials />
    </div>
  );
}
