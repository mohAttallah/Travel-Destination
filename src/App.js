import Home from "../src/components/home/home.js"
import data from "../src/data/db.json";

function App() {
  return (
    <div className="App">
      <Home data={ data} />
    </div>
  );
}
// Export App Function
export default App;
