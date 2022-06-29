import React, { useState } from "react";

const Categories = () => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  const vieCategories = categories.map((category, index) => {
    return (
      <li
        key={category}
        onClick={() => onClickCategory(index)}
        className={activeIndex === index ? "active" : ""}
      >
        {category}
      </li>
    );
  });
  return (
    <div className="categories">
      <ul>{vieCategories}</ul>
    </div>
  );
};

export default Categories;
