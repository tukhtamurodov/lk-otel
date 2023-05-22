import React from "react";
import "./AddNumber.scss";
import Dog from "./../../../../assets/images/Dog.png";
import Cat from "./../../../../assets/images/Cat.png";
import MyButton from "../../../../components/MyButton/MyButton";
function AddNumber({ isActive }) {
  return (
    <div className={isActive ? "active add-number" : "add-number"}>
      <div className="add-number__content">
        <h2 className="add-number__title">Добавление номера</h2>
        <div className="add-number__row">
          <div className="add-number__left">
            <label className="add-number__label">
              <div className="add-subtitle">Тип номера</div>
              <input
                className="add-input"
                placeholder="Выберите "
                type="text"
              />
            </label>
            <label className="add-number__label">
              <div className="add-subtitle">Количество мест в номере</div>
              <input className="add-input" placeholder="1" type="text" />
            </label>
          </div>
          <div className="add-number__right">
            <label className="add-number__label">
              <div className="add-subtitle">Количество</div>
              <input className="add-input" placeholder="1" type="text" />
            </label>
            <label className="add-number__label">
              <div className="add-subtitle">Размер номера (кв.м)</div>
              <input className="add-input" placeholder="1,5" type="text" />
            </label>
          </div>
        </div>
        <h4 className="add-subtitle">Кто может разместиться в номерем</h4>
        <div className="pets">
          <div className="cat pet">
            <img src={Cat} alt="cat" />
            <span>Кошки</span>
          </div>
          <div className="dog pet">
            <img src={Dog} alt="dog" />
            <span>Собаки</span>
          </div>
        </div>
        <div className="price">
          <h4 className="add-subtitle">Базовая цена номера (один гость)</h4>
          <div className="price__row">
            <input placeholder="15" className="add-input" type="text" />
            <MyButton className="price-btn">Добавить</MyButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNumber;
