import React from "react";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";

import objWithPizzas from "./assets/pizzas.json";

import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {objWithPizzas.pizzas.map((obj) => {
              return <PizzaBlock key={obj.name} {...obj} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
