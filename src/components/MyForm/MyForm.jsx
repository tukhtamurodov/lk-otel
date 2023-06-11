import React from "react";
import Logo from "../Logo/Logo";
import google from "../../assets/icons/google.svg";
import MyButton from "../MyButton/MyButton";
import "./MyForm.scss";
function MyForm({ children, type, ...props }) {
  let data = {
    signin: {
      title: "С возращением!",
      subTitle: "Для входа введите свой логин и пароль",
      googleBtn: "Войти с Google",
      btn: "Войти",
      question: "Не зарегистрированы?",
      answer: "Регистрация",
      link: "/singup",
    },
    signup: {
      title: "Создайте аккаунт партнера",
      subTitle: "Для регистрации заполните все поля",
      googleBtn: "Зарегистрироваться с Google",
      btn: "Создать аккаунт",
      question: "Есть аккаунт?",
      answer: "Вход",
      link: "/singin",
    },
  };

  return (
    <form {...props} className="form">
      <div className="logo">
        <Logo />
      </div>
      <h2 className="title">{data[type].title}</h2>
      <p className="sub-title">{data[type].subTitle}</p>
      <button type="button" className="goole-btn">
        <img src={google} alt="google" />
        {data[type].googleBtn}
      </button>
      <div className="or">
        <span>Или</span>
      </div>

      {children}
      <MyButton type="submit" className="btn">
        {data[type].btn}
      </MyButton>
      <div className="question-answer">
        <span>{data[type].question}</span>
        <a href={data[type].link}>{data[type].answer}</a>
      </div>
    </form>
  );
}

export default MyForm;
