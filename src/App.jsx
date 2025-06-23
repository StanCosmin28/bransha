import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppleCardsCarousel from "./Components/AppleCardsCarousel";
import ContainerScroll from "./Components/ContainerScroll";
import ScrollAnimationComponent from "./Components/ScrollAnimationComponent";
import SmartHomePanel from "./Components/SmartRoomComponent";
import MUNNComponent from "./Components/MUNNComponent";
import SimpleBlockComponent from "./Components/SimpleBlockComponent";
import Footer from "./Components/Footer";
import BuildingShowcase from "./Components/BuildingShowcase";
import TeamShowcase from "./Components/TeamShowcase";
import AppleScrollHero from "./Components/AppleScrollHero";
import SimpleBranshaComponent from "./Components/SimpleBranshaComponent";
import SimpleShowcaseComponent from "./Components/SimpleShowcaseComponent";
import BlogCarousel from "./Components/BlogCarousel";
import SmartHomeControlPanel from "./Components/SmartHomeControlPanel";
import MunnAppleCardsCarousel from "./Components/MunnAppleCardCarousel";
import ScrollToTop from "./Components/ScrollToTop";
import MunnApp from "./Components/MunnApp";
import ScrollReveal from "./Components/ScrollReveal";
import MunnDescriptionComponent from "./Components/MunnDescriptionComponent";
// import LoadingWrapper from "./Components/LoadingWrapper";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/bransha"
            element={
              <>
                <AppleScrollHero />
                <SimpleBlockComponent />
                <SmartHomePanel />
                <AppleCardsCarousel />
                <SimpleShowcaseComponent />
                <ContainerScroll />
                <SimpleBranshaComponent />
                <MUNNComponent />
                <ScrollAnimationComponent />
                <BuildingShowcase />
                <BlogCarousel />
                <TeamShowcase />
                <Footer />
              </>
            }
          />
          <Route
            path="/bransha/munn"
            element={
              <>
                <ScrollToTop />
                <SimpleBlockComponent />
                <SimpleBlockComponent />
                <MunnDescriptionComponent />
                <MunnApp />
                <div className="min-h-screen flex justify-center items-center text-left ">
                  <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={10}
                    blurStrength={50}
                  >
                    Nu sunt doar o aplicație. Sunt creierul digital al clădirii
                    tale.
                  </ScrollReveal>
                </div>
                <MunnAppleCardsCarousel />
                <SmartHomeControlPanel />
                <SimpleShowcaseComponent />
                <SimpleBranshaComponent />
                <BlogCarousel />
                <TeamShowcase />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
