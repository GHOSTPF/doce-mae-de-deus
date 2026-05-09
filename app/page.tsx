import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import LandingPage from "@/components/LandingPage";
import Sobre from "@/components/Sobre";
import Welcome from "@/components/Welcome";
import Historia from "@/components/Historia";
import Unidades from "@/components/Unidades";
import Footer from "@/components/Footer";
import Agenda from "@/components/Agenda";
import Grupos from "@/components/Grupos";
import Envolva from "@/components/Envolva";
import Youtube from "@/components/Youtube";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <Historia/>
      <Unidades />
      <Agenda />
      <Grupos />
      <Youtube />
      <Envolva />
      <Contato />
      <Footer/>
    </>
  );
}