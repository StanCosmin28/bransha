import "./App.css";
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
// import LoadingWrapper from "./Components/LoadingWrapper";

function App() {
  return (
    <>
      {/* <LoadingWrapper timeoutMs={20000}> */}
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
      <TeamShowcase />
      <Footer />
      {/* </LoadingWrapper> */}
    </>
  );
}

export default App;
