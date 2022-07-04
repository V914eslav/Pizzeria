import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

// import objWithPizzas from "./assets/pizzas.json";

import "./scss/app.scss";

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
