import React from "react";
import "./Registrate1.scss";
import RegisterObjForm from "../components/RegisterObjForm";
import MapComponent from "../components/YandexMaps";
import MyButton from "../../../components/MyButton/MyButton";
function Registrate1() {
  return (
    <div className="registr">
      <div className="raw">
        <RegisterObjForm />
        <MapComponent />
      </div>
      <div className="bottom-form">
        <div className="registr__button">
          <MyButton>Подтвердить адрес на карте</MyButton>
        </div>
      </div>
    </div>
  );
}

export default Registrate1;
