import {Title} from "../Title/Title";
import styles from './addClothes.css'
import {Select} from "./Select/Select";
import {CardImg} from "./CardImg";
import {CardNote} from "../Card/CardElements/CardInfo/CardNote";
import {Card} from "../Card";
import {Formik, useFormik} from "formik";

export function AddClothes() {
        return (<>
            <Title value={'добавление вещи в гардероб'}/>
            <ul>
                <Card>
                    <form className={styles.container}>
                        <button className={styles.img}><CardImg/></button>
                        <div className={styles.inf}>
                            <div className={styles.title}>НАЗВАНИЕ: <span
                                    className={styles.textarea}><CardNote/></span></div>
                                <Select/>
                                <CardNote/>
                                <br/>
                                <input type="submit" value="Отправить"/>
                        </div>
                    </form>
                </Card>
            </ul>
        </>)
    }