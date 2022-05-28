import Footer from "home/Footer";
import Header from "home/Header";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PdPContent from "./components/PdPContent";
import "./index.scss";

const App = () => {
  return (
    <Router>
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <Header />
        <div className="my-10">
          <Switch>
            <Route path="/product/:id" component={PdPContent} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
