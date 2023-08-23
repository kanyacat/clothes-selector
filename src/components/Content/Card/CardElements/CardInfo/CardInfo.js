import styles from './cardInfo.css';
import {CardValue} from "./CardValue";

export function CardInfo(props) {
    const {name, style, color, weather, img = 'https://svgshare.com/i/ucc.svg'} = props;

    return (<div className={styles.container}> <div className={styles.imgContainer}><img className={styles.img} src={img}/></div>
        <div className={styles.content}>
            <CardValue title={'Название'} value={name}/>
            <CardValue title={'Стиль'} value={style}/>
            <CardValue title={'Цветовая гамма'} value={color}/>
            <CardValue title={'Погода'} value={weather + '°C'} />
        </div>
    </div>)


}