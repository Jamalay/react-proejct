import React from "react";
import ReactDOM from "react-dom/client";
import style from '../styles/Header.module.css'
import logo from '../logos/Group 1.png'
export const Header = () => {
    return (
        <header className={style.header}>
            <div><img src={logo}></img></div>
            <div className={style.menu}>
                <div><a href="#">Главная</a></div>
                <div><a href="#">О нас</a></div>
                <div><a href="#">Контакты</a></div>
            </div>
        </header>
    )
}

export default Header;