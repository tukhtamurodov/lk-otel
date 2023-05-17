import React from "react";
import "./SignUp.scss";
import MyForm from "../../components/MyForm/MyForm";
import MyInput from "../../components/MyInput/MyInput";
function SignUp() {
  return (
    <div>
      <MyForm type="signup">
        <div className="signup">
          <MyInput type="text" placeholder="Фамилия" />
          <MyInput type="text" placeholder="Имя" />
          <MyInput type="email" placeholder="Электронная почта" />
          <MyInput type="password" placeholder="Пароль" />
          <MyInput type="password" placeholder="Подтвердите пароль" />
        </div>
      </MyForm>
    </div>
  );
}

export default SignUp;
