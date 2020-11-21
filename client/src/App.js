import './App.css';
import Game from "./pages/Game";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Route exact path="/game"><Game /></Route>
      <Route exact path="/"><Login /></Route>
    </Router>
  );
};

export default App;
