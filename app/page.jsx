import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Featured from "@/components/Featured";
import Recommendat from "@/components/Recommendat";
import Find from "@/components/Find";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto bg-white overflow-hidden ">
      <Header />
      <Hero />
      <Featured />
      <About />
      <Recommendat />
      <Find />
      <Testimonials />
      <Footer />
    </main>
  );
}
