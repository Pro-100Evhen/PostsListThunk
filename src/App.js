import "./App.css";
import Controls from "./components/Controls";
import ItemsList from "./components/ItemsList";

function App() {
   return (
      <div className="App">
         <h1 className="block bg-cyan-700 text-white text-xl p-4">
            Get data from API with <span>redux createAsyncThunk</span>
         </h1>
         <Controls />
         <ItemsList />
      </div>
   );
}

export default App;
