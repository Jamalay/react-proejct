import React from "react";
import ReactDOM from "react-dom/client";
import style  from '../styles/Main.module.css'

let count = 0;


const Main = () => {
    const increase = () => {
        count += 1;
    }
    return (
        <main>
            <div><p className={style.count_p_size}>{count}</p></div>
            <div className={style.buttons_div}>
                <button className={style.blue_button} onClick={increase}>Увеличить</button>
                <button className={style.orange_button}>Уменьшить</button>
                <button className={style.gray_button}>Сбросить</button>
            </div>
        </main>
    )
}

export default Main