import About from "@/components/AboutUs";
import ClientsSection from "@/components/clients";
import Header from "@/components/header";
import Hero from "@/components/Hero";
import ProductPinSection from "@/components/productPin/ProductPinSection";
import ProductSection from "@/components/products";
export default function Home() {
  return (
    <div className=" ">
      <Header/>
    <Hero/>
    <About/>
    <ProductSection/>
    <ProductPinSection/>
    <ClientsSection/>
    </div>
  );
}
