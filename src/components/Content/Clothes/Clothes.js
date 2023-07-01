import styles from './clothes.css'
import {Title} from "../Title/Title";
import {AddClothesButton} from "./AddClothesButton";
import {CardList} from "../CardList";
import {Link, Route, Routes} from "react-router-dom";
import {AddClothes} from "../AddClothes";


export function Clothes() {
    return <>
    <div className={styles.title}><Title value={'моя одежда'}/>
        <Link to='/addClothes' className={styles.addBtn}><AddClothesButton /></Link></div>
        <CardList />

        <Routes>
            <Route path="/addClothes" element={<AddClothes />} />
        </Routes>
    </>
}