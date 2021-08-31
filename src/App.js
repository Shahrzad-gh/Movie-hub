import "./App.css";
import Landing from "./containers/Landing";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./containers/Details";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing}></Route>
          <Route path="/Details/:id" component={Details}></Route>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
