import styles from './aboutUs.css'
import {Title} from "../../../CustomComponents/Title/Title";
import {Idea} from "./Idea";
import {Service} from "./Service";


export function AboutUs() {
    return <div className={styles.container}>
        <Title value='О нас' />
        <Idea />
        <Service />
    </div>
}