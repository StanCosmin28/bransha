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
                <SimpleBlockComponent />
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
