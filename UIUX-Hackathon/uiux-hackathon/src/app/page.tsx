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
      <TopSelling />
      <Browse />
      <Testimonials />
    </>
  );
}
