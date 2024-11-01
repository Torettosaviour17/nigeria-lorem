import FirstNav from "../components/layout/firstNav";
import Navbar from "../components/layout/NavBar";
import Footer from "../components/layout/footer";
import Hero from "../components/homecomponents/hero"
import SectionTwo from "../components/homecomponents/sectionTwo"
import ThreeSection from "../components/homecomponents/threeSection";
import Sigin from "../components/homecomponents/sigin";
import BeforeSigin from "../components/homecomponents/beforeSigin";
import SemiForm from "../components/homecomponents/semiForm";
import GridSection from "../components/homecomponents/gridSection";
import SecondGridSection from "../components/homecomponents/secondGridSection";

export default function Home() {
  return (
    <div>
      <FirstNav />
      <Navbar />
      <Hero />
      <SectionTwo />
      <ThreeSection />
      <GridSection />
      <SecondGridSection />
      <SemiForm />
      <BeforeSigin />
      <Sigin />
      <Footer />
    </div>
  );
}
