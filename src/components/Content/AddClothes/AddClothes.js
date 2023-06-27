import {Title} from "../Title/Title";
import styles from './addClothes.css'
import {Select} from "./CardAdd/Select/Select";
import {CardAdd} from "./CardAdd";
import {CardImg} from "./CardAdd/CardImg";
import {CardNote} from "../Card/CardElements/CardInfo/CardNote";

export function AddClothes() {

    return <>
        <Title value={'добавление вещи в гардероб'}/>
        <CardAdd>
            <div className={styles.container}>
                <button className={styles.img}><CardImg /></button>
                <div className={styles.inf}>
                    <div className={styles.title}>НАЗВАНИЕ: <span className={styles.textarea}><CardNote/></span></div>
                    <Select />
                    <CardNote />
                </div>
            </div>
        </CardAdd>
    </>
}