import React from "react";
import "./SignIn.scss";
import MyForm from "../../components/MyForm/MyForm";
import MyInput from "../../components/MyInput/MyInput";
function SignIn() {
  return (
    <div>
      <MyForm type="signin">
        <label className="input">
          <MyInput type="text" placeholder="Введите логин или Email" />
        </label>
        <div className="forgot">
          <a href="/signup">Забыли пароль?</a>
        </div>
        <label className="input">
          <MyInput type="password" placeholder="Введите пароль" />
        </label>
      </MyForm>
    </div>
  );
}

export default SignIn;
