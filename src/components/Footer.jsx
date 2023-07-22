import React from "react";
import ReactDOM from "react-dom/client";
import logo from '../logos/Group 6 1.png'
import style from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={style.footer_menu}>
                <p><img src={logo}></img></p>
                <p><a>Партнерам</a></p>
                <p><a>Разработчикам</a></p>
                <p><a>Вакансии</a></p>
            </div>
            <div>
                <p><a>ООО “интукод”, 2020г.</a></p>
            </div>
        </footer>
    )
}

export default Footer;