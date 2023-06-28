import styles from './cardInfo.css';
import {CardValue} from "./CardValue";
import {CardNote} from "./CardNote";

export function CardInfo(props) {
    const {name, style, color, weather, category, note, img = 'https://svgshare.com/i/ucc.svg'} = props;

    return (<div className={styles.container}> <div className={styles.img}><img src={img}/></div>
        <div className={styles.content}>
            <CardValue title={'название'} value={name}/>
            <CardValue title={'Стиль'} value={style}/>
            <CardValue title={'цветовая гамма'} value={color}/>
            <CardValue title={'погода'} value={weather}/>
            <CardValue title={'категория'} value={category}/>
            <CardNote value={note}/>
        </div>
    </div>)


}