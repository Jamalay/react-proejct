import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import style  from '../styles/Main.module.css'
//import App from '../App'

let count = 0;


const Main = () => {
    let [count, setCount] = useState(0);

    return (
        <main>
            <div><p className={style.count_p_size}>{count}</p></div>
            <div className={style.buttons_div}>
                <button className={style.blue_button}
                onClick={() => {
                    setCount((elem) => elem + 1)
                }}>
                    Увеличить
                </button>
                <button className={style.orange_button}
                onClick={() => {
                    if(count !== 0){
                        setCount((elem) => elem - 1)
                    }
                }}>
                    Уменьшить
                </button>
                <button className={style.gray_button}
                onClick={() => {
                    setCount(0)
                }}>
                    Сбросить
                </button>
            </div>
        </main>
    )
}

export default Main