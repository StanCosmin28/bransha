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

function App() {
  return (
    <>
      <SimpleBlockComponent />
      <SmartHomePanel />
      <AppleCardsCarousel cards={cardData} />
      {/* <ParticleBackgroundWrapper> */}
      <ContainerScroll />
      <ScrollAnimationComponent />
      <MUNNComponent />
      <BuildingShowcase />
      <TeamShowcase />
      <Footer />
      {/* </ParticleBackgroundWrapper> */}
    </>
  );
}

export default App;
