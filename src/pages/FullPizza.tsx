import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    name: string;
    imageUrl: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://62beacdfbe8ba3a10d58e9eb.mockapi.io/pizzas/` + id
        );
        setPizza(data);
      } catch (error) {
        alert("ERROR");
        navigate("/");
      }
    }

    fetchPizza();
    console.log(pizza);
  }, []);

  if (!pizza) {
    return <>Загрузка...</>;
  }
  return (
    <div className="container">
      <div>{pizza.name}</div>
      <img src={pizza.imageUrl} alt="pizza" />
      <h4>{pizza.price} р.</h4>
    </div>
  );
};

export default FullPizza;
