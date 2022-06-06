import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import RoomType from "./pages/RoomType";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/about-us/" component={About} />
        <Route exact path="/contact-us/" component={Contact} />
        <Route exact path="/rooms/:type/:slug" component={SingleRoom} />
        <Route exact path="/rooms/:type" component={RoomType} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
