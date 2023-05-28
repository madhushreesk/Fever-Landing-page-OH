import BookNowSection from "./components/BookNowSection";
import ComparePackages from "./components/ComparePackages";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import GoodReports from "./components/GoodReports";
import Navbar from "./components/Navbar";
import OurInHouseLabs from "./components/OurInHouseLabs";
import SectionOne from "./components/SectionOne";

function App() {
  return (
    <div>
      <Navbar/>
      <SectionOne/>
      <ComparePackages/>
      <BookNowSection/>
      <OurInHouseLabs/>
      {/* <GoodReports/> */}
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
