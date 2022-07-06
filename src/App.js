import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/slices/counterReducer ";

// import objWithPizzas from "./assets/pizzas.json";

import "./scss/app.scss";
export const SearchContext = React.createContext("");

function App() {
  const [searchValue, setSearchValue] = useState("");

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="wrapper">
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>

      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
