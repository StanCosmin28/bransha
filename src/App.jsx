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
      {/* </ParticleBackgroundWrapper> */}
    </>
  );
}

export default App;
