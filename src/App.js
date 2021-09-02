import "./App.css";
import Landing from "./containers/Landing";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./containers/Details";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./components/404";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <div className="App">
            <Router>
              <Route exact path="/" component={Landing}></Route>
            </Router>

            <Router>
              <Route path="/Details/:id" component={Details}></Route>
            </Router>
            <Route>
              <NotFound />
            </Route>
          </div>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
