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
// import SimpleShowcaseComponent from "./Components/SimpleShowcaseComponent";
import BlogCarousel from "./Components/BlogCarousel";
import SmartHomeControlPanel from "./Components/SmartHomeControlPanel";
import MunnAppleCardsCarousel from "./Components/MunnAppleCardCarousel";
import ScrollToTop from "./Components/ScrollToTop";
import MunnApp from "./Components/MunnApp";
import MunnDescriptionComponent from "./Components/MunnDescriptionComponent";
import MUNNCustomLayoutV1 from "./Components/MUNNCustomLayoutV1";
import MUNNCustomLayoutV2 from "./Components/MUNNCustomLayoutV2";
import MUNNCustomLayoutV3 from "./Components/MUNNCustomLayoutV3";
import data from "./Model/data";
import MUNNHeaderComponent from "./Components/MUNNHeaderComponent";
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
                <MUNNHeaderComponent imageSrc={data.munnApps} />
                <SimpleBlockComponent />
                <MunnDescriptionComponent />
                <MunnApp />
                <MunnAppleCardsCarousel />
                <MUNNCustomLayoutV1 imageSrc={data.tabletV1} />
                <MUNNCustomLayoutV2 imageSrc={data.tabletV2} />
                <MUNNCustomLayoutV3 imageSrc={data.tabletV3} />
                <SmartHomeControlPanel />
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
