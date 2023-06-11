import React from "react";
import "./Registrate4.scss";
import MyButton from "../../../components/MyButton/MyButton";
import MyFileInput from "../components/MyFileInput/MyFileInput";
import Modal from "../../../components/Modal/Modal";

function Registrate4() {
  return (
    <form className="registr-4">
      <Modal
        isActive={false}
        text={
          "Вы успешно зарегистриро вализарегистрировализ арегистрировали зарегистрировали объект"
        }
      />
      <div className="registr-4__title">Дополнительная информация</div>
      <div className="registr-4__row">
        <div className="registr-4__left">
          <textarea
            required
            placeholder="Добавьте описание объекта размещения"
            className="registr-4__text"
          ></textarea>
          <textarea
            required
            placeholder="Расскажите, как до вас добраться"
            className="registr-4__text"
          ></textarea>
        </div>
        <MyFileInput />
      </div>
      <div className="registr-4__btn">
        <MyButton>Завершить регистрацию</MyButton>
      </div>
    </form>
  );
}

export default Registrate4;
