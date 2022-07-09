import React from "react";

const Categories = ({ categoryId, onChangeCategory }) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const vieCategories = categories.map((category, index) => {
    return (
      <li
        key={category}
        onClick={() => onChangeCategory(index)}
        className={categoryId === index ? "active" : ""}
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
