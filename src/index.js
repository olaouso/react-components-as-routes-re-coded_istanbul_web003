import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom"

const link ={
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDeoration: "none",
  color: "white"
}

const Navbar =() =>
  <div>
    <NavLink
      to="/" exact
      style={link}
      activeStyle={{
        background: "darkblue"
      }}
      >Home</NavLink>
      <NavLink
      to="/about" exact
      style={link}
      activeStyle={{
        background: "darkblue"
      }}
      >About</NavLink>
      <NavLink
      to="/login" exact
      style={link}
      activeStyle={{
        background: "darkblue"
      }}
      >Login</NavLink>
  </div>
const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);
