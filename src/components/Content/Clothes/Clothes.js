import styles from './clothes.css'
import {Title} from "../Title/Title";
import {Card} from "../Card";
import {AddClothesButton} from "./AddClothesButton";
import {CardList} from "../CardList";

export function Clothes() {
    return <>
    <div className={styles.title}><Title value={'моя одежда'}/> <span className={styles.addBtn}><AddClothesButton /></span></div>
        <CardList />
    </>
}