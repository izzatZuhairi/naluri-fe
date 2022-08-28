import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { RootRoutes } from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RootRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
