import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1>Home Component</h1>
      <img width="100" src="./images/home.jpg" alt="flower" />
    </div>
  );
}
function About(props) {
  return <h1>This is all about {props.name}</h1>;
}
function Contact(props) {
  return <h1>Contact Component</h1>;
}

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to My Webpage</h1>

      <Router>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/Contact">Contact</Link>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
}
