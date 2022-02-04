import React from "react";
// import axios from "axios";

import PropTypes from "prop-types";
import { Routes, Route } from "react-router-dom";

import { Header, PizzaBlock } from "./components";
import { Home, Cart } from "./pages";

// axios.get("http://localhost:3001/pizzas").then(({ data }) => {
//   dispatch(setPizzas(data));
// });

// axios.get("http://localhost:3000/db.json").then(({ data }) => {
//   dispatch(setPizzas(data.pizzas));
// })
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};
PizzaBlock.defaultProps = {
  name: "---",
  types: [],
  sizes: [],
  price: 0,
};
export default App;
