import React from "react";
import Header from "../src/Components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import MidBody from "./Components/MidBody";
import About from "./Components/About";
import WhyIT from "./Components/WhyIT";
import Message from "./Components/Message";
import MUAdvantage from "./Components/MUAdvantage";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <MidBody />
        <About />
        <WhyIT />
        <Message />
      </BrowserRouter>
      <MUAdvantage />
      <Footer />
    </>
  );
};

export default App;
