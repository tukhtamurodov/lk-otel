import React from "react";
import RegisterObjForm from "../components/RegisterObjForm";
import MapComponent from "../components/YandexMaps";
import MyButton from "../../../components/MyButton/MyButton";
import './Registrate2.scss'
function Registrate2() {
  return (
    <div className="registr registr-2">
      <div className="raw">
        <RegisterObjForm />
        <MapComponent />
      </div>
      <div className="bottom-form">
        <div className="name__location">
          357270, Омская область, город Балашиха, шоссе Гагарина, 74
        </div>
        <div className="registr__button">
          <MyButton>Далее </MyButton>
        </div>
      </div>
    </div>
  );
}

export default Registrate2;
