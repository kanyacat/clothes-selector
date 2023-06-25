import styles from './cardInfo.css';
import {NoImg} from "../../../../../icons";
import {CardValue} from "./CardValue";
import {CardNote} from "./CardNote";

export function CardInfo(props) {
    const {name, style, color, weather, category, note} = props;

    return (<div className={styles.container}> <div className={styles.img}><NoImg /></div>
        <div>
            <CardValue title={'название'} value={name}/>
            <CardValue title={'Стиль'} value={style}/>
            <CardValue title={'цветовая гамма'} value={color}/>
            <CardValue title={'погода'} value={weather}/>
            <CardValue title={'категория'} value={category}/>
            <CardNote value={note}/>
        </div>
    </div>)


}