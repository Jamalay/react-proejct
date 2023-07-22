import React from "react";
import ReactDOM from "react-dom/client";
import logo from '../logos/Group 6 1.png'
import style from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={style.footer_menu}>
                <p><img src={logo}></img></p>
                <p>Партнерам</p>
                <p>Разработчикам</p>
                <p>Вакансии</p>
            </div>
            <div>
                <p>ООО “интукод”, 2020г.</p>
            </div>
        </footer>
    )
}

export default Footer;