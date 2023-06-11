import React, { useState } from "react";
import "./SignUp.scss";
import MyForm from "../../components/MyForm/MyForm";
import MyInput from "../../components/MyInput/MyInput";
import axiosInstance from "../../axios";
import Modal from "../../components/Modal/Modal";
function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [error, setError] = useState("");

  function onsubmitForm(e) {
    e.preventDefault();
    axiosInstance
      .post("/partner/register/", {
        username: name,
        firstname,
        email,
        password,
        password2,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          setError(error.response.data.email);
          setTimeout(() => {
            setError(null);
          }, 5000);
        }
      });
    console.log(name, firstname, email, password, password2);
  }

  return (
    <div>
      <Modal isActive={!!error} text={error} />

      <MyForm onSubmit={onsubmitForm} type="signup">
        <div className="signup">
          <MyInput
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            type="text"
            placeholder="Фамилия"
          />
          <MyInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Имя"
          />
          <MyInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Электронная почта"
          />
          <MyInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Пароль"
          />
          <MyInput
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            type="password"
            placeholder="Подтвердите пароль"
          />
        </div>
      </MyForm>
    </div>
  );
}

export default SignUp;
