import styles from './cardInfo.css';
import {CardValue} from "./CardValue";
import {CardNote} from "./CardNote";
import {EditButton} from "../EditButton";

export function CardInfo(props) {
    const {name, style, color, weather, category, note, img = 'https://svgshare.com/i/ucc.svg'} = props;

    return (<div className={styles.container}> <div className={styles.img}><img src={img}/></div>
        <div>
            <CardValue title={'название'} value={name}/>
            <CardValue title={'Стиль'} value={style}/>
            <CardValue title={'цветовая гамма'} value={color}/>
            <CardValue title={'погода'} value={weather}/>
            <CardValue title={'категория'} value={category}/>
            <span className={styles.note}><CardNote value={note}/></span>
            <span className={styles.editBtn}><EditButton /></span>
        </div>
    </div>)


}