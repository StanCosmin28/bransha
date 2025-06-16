import "./App.css";
import AppleCardsCarousel from "./Components/AppleCardsCarousel";
import ContainerScroll from "./Components/ContainerScroll";
import ScrollAnimationComponent from "./Components/ScrollAnimationComponent";
import SmartHomePanel from "./Components/SmartRoomComponent";
// import SolarSystemComponent from "./Components/SolarSystemComponent";
import MUNNComponent from "./Components/MUNNComponent";
import SimpleBlockComponent from "./Components/SimpleBlockComponent";
// import ParticleBackgroundWrapper from "./Components/ParticleBackgroundWrapper";

import cardData from "./Model/cardData";
import Footer from "./Components/Footer";
import BuildingShowcase from "./Components/BuildingShowcase";
import TeamShowcase from "./Components/TeamShowcase";
import AppleScrollHero from "./Components/AppleScrollHero";
import LoadingWrapper from "./Components/LoadingWrapper";
import SimpleBranshaComponent from "./Components/SimpleBranshaComponent";
import SimpleShowcaseComponent from "./Components/SimpleShowcaseComponent";

function App() {
  return (
    <>
      {/* <LoadingWrapper timeoutMs={2000}> */}
      <AppleScrollHero />
      <SimpleBlockComponent />
      {/* <SimpleBranshaComponent /> */}
      <SmartHomePanel />
      {/* <SimpleShowcaseComponent /> */}
      <AppleCardsCarousel cards={cardData} />
      {/* <ParticleBackgroundWrapper> */}
      <ContainerScroll />
      <MUNNComponent />
      <ScrollAnimationComponent />
      <BuildingShowcase />
      <TeamShowcase />
      <Footer />
      {/* </ParticleBackgroundWrapper> */}
      {/* </LoadingWrapper> */}
    </>
  );
}

export default App;
