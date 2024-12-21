import Image from "next/image";
import Headertop from "@/components/header-top";
import Header from "@/components/Header"
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div >
      <Headertop/>
      <Header/>
      <Hero/>
    </div>
  );
}
