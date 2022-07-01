import React, { useState } from "react";

const Sort = () => {
  const [togglePopup, setTogglePopup] = useState(false);
  const [titlePopup, setTitlePopup] = useState("популярности");
  const [rotateLabel, setRotateLabel] = useState(false);
  const list = ["популярности", "цене", "алфавиту"];

  const changePopup = (title) => {
    setTitlePopup(title);
    setTogglePopup(!togglePopup);
    setRotateLabel(!rotateLabel);
  };
  return (
    <div className="sort">
      <div className="sort__label">
        {togglePopup ? (
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
        ) : (
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(180deg)" }}
          >
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
        )}

        <span onClick={() => setTogglePopup(!togglePopup)}>
          <b>Сортировка по:</b>
          {titlePopup}
        </span>
      </div>
      {togglePopup ? (
        <div className="sort__popup">
          <ul>
            {list.map((listItem) => {
              return (
                <li
                  key={listItem}
                  onClick={() => changePopup(listItem)}
                  className={titlePopup === listItem ? "active" : ""}
                >
                  {listItem}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Sort;
