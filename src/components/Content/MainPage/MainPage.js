import styles from './mainPage.css'
import {Main} from "./Main";
import {AboutUs} from "./Main/AboutUs";


export function MainPage() {
    return <>
        <Main />
        <AboutUs />
        <footer className={styles.footer} />
    </>
}