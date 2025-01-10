

import Hero from "@/components/Hero";
import Fonts from "@/components/fonts";
import Products from "./products/page";
import TopSelling from "./products/sell";
import Dress from "@/components/dress";
import CustomerCarousel from "@/components/carousel";




export default function Home() {
  return (
    <div >
      
      <Hero/>
      <Fonts/>
      <Products/>
      <TopSelling/>
      <Dress/>
      <CustomerCarousel/>
      
      
    </div>
  );
}
