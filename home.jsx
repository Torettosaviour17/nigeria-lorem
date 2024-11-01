import FirstNav from "../components/layout/firstNav";
import Navbar from "../components/layout/NavBar";
import Footer from "../components/layout/footer";
import Hero from "../components/homecomponents/hero";
import SectionTwo from "../components/homecomponents/sectionTwo";
import ThreeSection from "../components/homecomponents/threeSection";
import Sigin from "../components/homecomponents/sigin";

export default function Home() {
  return (
    <div>
      <FirstNav />
      <Navbar />
      <Hero />
      <SectionTwo />
      <ThreeSection />
      <Sigin />
      <Footer />
    </div>
  );
}
