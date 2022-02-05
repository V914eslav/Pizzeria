import React from "react";
// import axios from "axios";


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


export default App;
