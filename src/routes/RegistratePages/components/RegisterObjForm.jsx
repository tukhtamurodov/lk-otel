import React from "react";

import MyInput from "../../../components/MyInput/MyInput";
function RegisterObjForm() {
  function sendToMainInfo(params) {}
  return (
    <form className="regist-form" onSubmit={sendToMainInfo}>
      <h3 className="regist-form__title">Основная информация</h3>
      <MyInput placeholder="Название отеля" />
      <div className="regist-form__lable">Контактные данные</div>
      <MyInput placeholder="Название адрес сайта" />
      <div className="regist-form__double-input">
        <MyInput placeholder="Контактное лицо" />
        <MyInput placeholder="Электронная почта" />
      </div>
      <div className="regist-form__lable">Где находится объект </div>
      <div className="regist-form__double-input">
        <MyInput placeholder="Страна" />
        <MyInput placeholder="Город" />
      </div>
      <MyInput placeholder="Улица и номер дома" />
    </form>
  );
}

export default RegisterObjForm;
