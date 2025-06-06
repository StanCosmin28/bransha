// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  function stillInProgress() {
    alert("We are still working at it!");
  }
  return (
    <>
      <h1>Bransha</h1>
      <button onClick={() => stillInProgress()}>
        click here to see the Bransha Website
      </button>
    </>
  );
}

export default App;
