
import About from "@/components/AboutUs";
import AboutUsSection from "@/components/aboutusSection";
import ClientsSection from "@/components/clients";
import Hero from "@/components/Hero";
import ProductPinSection from "@/components/productPin/ProductPinSection";
import ProductSection from "@/components/products";

export default function Home() {
  return (
      <div className=" ">
        
       
        <Hero />
        <AboutUsSection />
        <ProductSection />
        <ProductPinSection />
        <ClientsSection />
      </div>
 
  );
}
