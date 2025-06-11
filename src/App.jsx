// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import ContainerScroll from "./Components/ContainerScroll";
import ScrollAnimationComponent from "./Components/ScrollAnimationComponent";
import SmartHomePanel from "./Components/SmartRoomComponent";
import SolarSystemComponent from "./Components/SolarSystemComponent";

function App() {
  function stillInProgress() {
    alert("We are still working at it!");
  }
  return (
    <>
      {/* <h1>Bransha</h1>
      <button onClick={() => stillInProgress()}>
        click here to see the Bransha Website
      </button> */}
      {/* <div> */}
      <ContainerScroll />
      <SmartHomePanel />
      <SolarSystemComponent />
      <ScrollAnimationComponent />
      {/* </div> */}
    </>
  );
}

export default App;
