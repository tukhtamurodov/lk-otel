import React, { useEffect } from "react";
import "./NavBar.scss";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function NavBar() {
  const location = useLocation();
  const currentUrl = location.pathname;
  useEffect(() => {
    const all = document.querySelectorAll(".section-nav");
    for (let el of all) {
      el.classList.remove("active");
    }
    document
      .querySelector(`a[href='${currentUrl}']`)
      ?.parentElement?.classList?.add("active");
  }, [currentUrl]);

  return (
    <div className="navbar">
      <div className="navs">
        <div className="section-logo">
          <Logo />
        </div>
        <div className="section-nav">
          <Link to={"/dashboard/object-manage"}>Мои объекты</Link>
        </div>
        <div className="section-nav">
          <Link to={"/dashboard/registre-new-object/1"}>Регистрация объекта</Link>
        </div>
        <div className="section-nav">
          <Link>Бронирования</Link>
        </div>
        <div className="section-nav">
          <Link>Отзывы</Link>
        </div>
      </div>
      <div className="logout">
        <a href="/login">Выйти</a>
      </div>
    </div>
  );
}

export default NavBar;
