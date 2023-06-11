import React, { useState } from "react";
import "./Registrate1.scss";
import RegisterObjForm from "../components/RegisterObjForm";
import MapComponent from "../components/YandexMaps";
import MyButton from "../../../components/MyButton/MyButton";
import axiosInstance from "../../../axios";
function Registrate1() {
  const [data, setData] = useState({
    nameOtel: "",
    address: "",
    contact: "",
    email: "",
    state: "",
    city: "",
    street: "",
  });
  async function sendToMainInfo(e) {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/partner/hotels/create/", {
        
      });
      console.log(res);
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        // setError(error.response.data.message);
        // setTimeout(() => {
        //   setError(null);
        // }, 5000);
      }
    }
  }

  return (
    <form onSubmit={sendToMainInfo} className="registr">
      <div className="raw">
        <RegisterObjForm data={data} setData={setData} />
        <MapComponent />
      </div>
      <div className="bottom-form">
        <div className="registr__button">
          <MyButton type="submit">Подтвердить адрес на карте</MyButton>
        </div>
      </div>
    </form>
  );
}

export default Registrate1;
