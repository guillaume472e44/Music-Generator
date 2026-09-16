import "./audioEngine";
import ControlsPanel from "./features/ControlsPanel";
import TracksPanel from "./features/TracksPanel";
import GridPanel from "./features/GridPanel";
import "./App.css";

function App() {
  console.log("App render");

  return (
    <>
      <ControlsPanel />
      <main className="mainModules">
        <TracksPanel />
        <GridPanel />
      </main>
    </>
  );
}

export default App;
