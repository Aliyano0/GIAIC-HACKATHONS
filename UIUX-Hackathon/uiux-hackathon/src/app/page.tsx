import Banner from "./components/HomepageComponents/Banner";
import Browse from "./components/HomepageComponents/Browse";
import NewArrivals from "./components/HomepageComponents/ClothesSection/NewArrivals";
import TopSelling from "./components/HomepageComponents/ClothesSection/TopSelling";
import Hero from "./components/HomepageComponents/HeroSection/Hero";
import Testimonials from "./components/HomepageComponents/Testimonial/Testimonals";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <NewArrivals />
      <div className="line w-[358px] mx-4 h-[1px] text-[#0000001a] lg:w-[1240px] lg:mx-[100px]"></div>
      <TopSelling />
      <Browse />
      <Testimonials />
    </>
  );
}
