import "./App.css";
import Landing from "./containers/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./containers/Details";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./components/404";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}></Route>

          <Route path="/Details/:id" component={Details}></Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
