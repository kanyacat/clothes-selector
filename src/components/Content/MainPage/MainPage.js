import styles from './mainPage.css'
import {Link, Route, Routes} from "react-router-dom";
import {MainBtn} from "./MainBtn";


export function MainPage() {
    return <>
        <div className={styles.main}>
            <h1 className={styles.title}>ГАРДЕРОБ</h1>
            <div className={styles.btns}>
                <MainBtn value='Регистрация' />
                <MainBtn value='Авторизация' />
            </div>
        </div>
    </>
}