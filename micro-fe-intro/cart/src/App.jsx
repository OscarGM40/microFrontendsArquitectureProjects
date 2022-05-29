import Footer from "home/Footer";
import Header from "home/Header";
import React from "react";
import ReactDOM from "react-dom";
import CartContent from "./components/CartContent";
import 'remixicon/fonts/remixicon.css';
import "./index.scss";

const App = () => (
  <div className="mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      <CartContent />
    </div>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
