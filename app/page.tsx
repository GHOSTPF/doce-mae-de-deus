import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import LandingPage from "@/components/LandingPage";
import Sobre from "@/components/Sobre";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LandingPage />
      <Sobre />
    </>
  );
}