import React, { useState } from "react";
import "./SignIn.scss";
import MyForm from "../../components/MyForm/MyForm";
import MyInput from "../../components/MyInput/MyInput";
import axiosInstance from "../../axios";
import Modal from "../../components/Modal/Modal";
function SignIn() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  async function onSubmitForm(e) {
    e.preventDefault();
    console.log({
      email_or_username: login,
      password: password,
    });
    try {
      const res = await axiosInstance.post("/partner/login/", {
        email_or_username: login,
        password: password,
      });
      if (res?.data?.data?.tokens) {
        localStorage.setItem(
          "token",
          JSON.parse(res.data.data.tokens.replace(/'/g, '"')).access
        );
        
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        setError(error.response.data.message);
        setTimeout(() => {
          setError(null);
        }, 5000);
      }
    }
  }
  return (
    <div>
      <MyForm onSubmit={onSubmitForm} type="signin">
        <Modal isActive={!!error} text={error} />
        <label className="input">
          <MyInput
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            minLength={3}
            placeholder="Введите логин или Email"
          />
        </label>
        <div className="forgot">
          <a href="/signup">Забыли пароль?</a>
        </div>
        <label className="input">
          <MyInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            type="password"
            placeholder="Введите пароль"
          />
        </label>
      </MyForm>
    </div>
  );
}

export default SignIn;
