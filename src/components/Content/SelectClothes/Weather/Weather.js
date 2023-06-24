import styles from './weather.css';
import {Header} from "./Header";

export function Weather() {
    return(<div className={styles.container}>
        <Header/>
    </div>)
}