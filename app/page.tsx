"use client";

import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import ParallaxSpacer from "./components/ParallaxSpacer";
import TheCompany from "./components/TheCompany";
import OurFleet from "./components/OurFleet";
import History from "./components/History";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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

