import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link, useNavigate, useParams } from "react-router-dom";

const FullPizza: React.FC = () => {
  const navigate = useNavigate();

  const [pizza, setPizza] = useState<{
    name: string;
    imageUrl: string;
    price: number;
  }>();
  const { id } = useParams();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://62beacdfbe8ba3a10d58e9eb.mockapi.io/pizzas/${id}`
        );
        setPizza(data);
      } catch (error) {
        alert("ERROR");
        navigate("/");
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Загрузка...</>;
  }
  return (
    <div className="container">
      <div>{pizza.name}</div>
      <img src={pizza.imageUrl} alt="pizza" />
      <h4>{pizza.price} р.</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
