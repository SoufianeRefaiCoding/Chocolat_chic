import About from "@/components/AboutUs";
import AboutUsSection from "@/components/aboutusSection";
import ClientsSection from "@/components/clients";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import Hero from "@/components/Hero";
import ProductPinSection from "@/components/productPin/ProductPinSection";
import ProductSection from "@/components/products";
export default function Home() {
  return (
    <div className=" ">
      <Header/>
    <Hero/>
    <AboutUsSection/>

    {/* <About/> */}
    <ProductSection/>
    <ProductPinSection/>
    <ClientsSection/>
    <Footer/>
    </div>
  );
}
