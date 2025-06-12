import "./App.css";
import AppleCardsCarousel from "./Components/AppleCardsCarousel";
import ContainerScroll from "./Components/ContainerScroll";
// import ScrollAnimationComponent from "./Components/ScrollAnimationComponent";
import SmartHomePanel from "./Components/SmartRoomComponent";
// import SolarSystemComponent from "./Components/SolarSystemComponent";
import MUNNComponent from "./Components/MUNNComponent";
import SimpleBlockComponent from "./Components/SimpleBlockComponent";
// import ParticleBackgroundWrapper from "./Components/ParticleBackgroundWrapper";

function App() {
  // function stillInProgress() {
  //   alert("We are still working at it!");
  // }
  const cardData = [
    {
      id: 1,
      category: "Data Science",
      title: "Data Insights",
      src: "https://images.unsplash.com/photo-1662638600476-d563fffbb072?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      category: "Gadgets",
      title: "Smart Gadgets",
      src: "https://images.unsplash.com/photo-1647489238347-dbd651c2f37a?q=80&w=3369&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      category: "Apps",
      title: "App Development",
      src: "https://images.unsplash.com/photo-1661160094555-a798a7df499f?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      category: "Cloud",
      title: "Cloud Solutions",
      src: "https://plus.unsplash.com/premium_photo-1683120968693-9af51578770e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      {/* <h1>Bransha</h1>
      <button onClick={() => stillInProgress()}>
        click here to see the Bransha Website
      </button> */}
      {/* <div> */}
      <SimpleBlockComponent />
      <SmartHomePanel />
      <AppleCardsCarousel cards={cardData} />
      {/* <ParticleBackgroundWrapper> */}
      <ContainerScroll />
      {/* </ParticleBackgroundWrapper> */}
      <MUNNComponent />
      {/* <ScrollAnimationComponent /> */}
      {/* </div> */}
    </>
  );
}

export default App;
