import { HeroScrollDemo } from "@/components/global/containerScroll";
import { FeaturesSectionDemo } from "@/components/global/FeatureSection";
import { Footer } from "@/components/global/Footer";
import { products } from "@/components/global/HeroParellex";
import SchoolNavbar from "@/components/global/Navbar";
import { HeroVideoDialogDemo } from "@/components/global/Video";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Image from "next/image";

export default function App(){
  return (
    <div className="flex flex-col justify-center items-center overflow-x-hidden">
      <div>
      <SchoolNavbar />
      </div>
      <div className="absolute top-[20%]">
        <Image src={"/logo.jpeg"} alt="This is an image" width={190} height={190}/>
      </div>
      <div>
        <HeroScrollDemo />
      </div>
      <div className="">
        <HeroParallax products={products}/>
      </div>
      <div>
        <h1 className="font-bold text-5xl text-center mb-2">Facalities</h1>
        <FeaturesSectionDemo />
      </div>
      <div className="mt-10 w-[40%]">
        <HeroVideoDialogDemo />
      </div>
      <div className="w-full mt-10">
        <Footer />
      </div>
    </div>
  );
}