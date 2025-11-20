import Navbar from "@/react-app/components/Navbar";
import ScrollProgress from "@/react-app/components/ScrollProgress";
import Hero from "@/react-app/components/Hero";
import AboutUs from "@/react-app/components/AboutUs";
import ParallaxSpacer from "@/react-app/components/ParallaxSpacer";
import TheCompany from "@/react-app/components/TheCompany";
import OurFleet from "@/react-app/components/OurFleet";
import History from "@/react-app/components/History";
import Contact from "@/react-app/components/Contact";
import Footer from "@/react-app/components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <AboutUs />
      <ParallaxSpacer imageUrl="http://www.dellapenna.it/it/sites/default/files/first%20spacer.jpg" />
      <TheCompany />
      <ParallaxSpacer imageUrl="http://www.dellapenna.it/en/sites/default/files/DPbanner.jpg" />
      <OurFleet />
      <ParallaxSpacer imageUrl="http://www.dellapenna.it/it/sites/default/files/Immagine00_1.jpg" />
      <History />
      <ParallaxSpacer imageUrl="http://www.dellapenna.it/it/sites/default/files/fifth%20spacer_0.jpg" />
      <Contact />
      <Footer />
    </div>
  );
}
