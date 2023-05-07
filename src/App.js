import Home from "../src/components/home/home.js"
import data from "../src/data/db.json";
import '../src/App.css'

function App() {
  return (
    <div className="App">
      <Home data={ data} />
    </div>
  );
}
// Export App Function
export default App;
