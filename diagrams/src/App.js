import "./App.css";
import SankeyDiagram from "./components/Sankey";
import { LinearChart } from "./components/LinearChart";

function App() {
  return (
    <div className="App">
      <h1>Lets try to create some D3.js diagrams</h1>
      <LinearChart />
      {/* <SankeyDiagram /> */}
    </div>
  );
}

export default App;
