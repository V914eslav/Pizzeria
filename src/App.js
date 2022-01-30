import React from "react";
import axios from "axios";

// import store from "./redux/store";
import { connect } from "react-redux";
import { setPizzas as setPizzasAction } from "./redux/action/pizzas";

import PropTypes from "prop-types";
import { Routes, Route } from "react-router-dom";

import { Header, PizzaBlock } from "./components";
import { Home, Cart } from "./pages";

// function App() {
//   const [pizzas, setPizzas] = React.useState([]);
//   React.useEffect(() => {
//     axios
//       .get("http://localhost:3000/db.json")
//       .then(({ data }) => setPizzas(data.pizzas));
//   }, []);
//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Routes>
//           <Route path="/" element={<Home items={pizzas} />} exact />
//           <Route path="/cart" element={<Cart />} exact />
//         </Routes>
//       </div>
//     </div>
//   );
// }

class App extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      this.props.savePizzas(data.pizzas);
    });
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={this.props.items} />} exact />
            <Route path="/cart" element={<Cart />} exact />
          </Routes>
        </div>
      </div>
    );
  }
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
const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    savePizzas: (items) => dispatch(setPizzasAction(items)),
    dispatch,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
