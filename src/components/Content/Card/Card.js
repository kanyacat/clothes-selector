import styles from './card.css';
import {CardInfo} from "./CardElements/CardInfo";
import {NoImg} from "../../../icons";
import {CardValue} from "./CardElements/CardInfo/CardValue";
import {CardNote} from "./CardElements/CardInfo/CardNote";

export function Card() {
    const cards = [
        {
            name: 'Кошечки',
            style: 'Кошачий',
            color: 'Розовый',
            weather: '15C',
            category: 'На выход',
            note: 'Просто потому что я люблю кошечек'
        },
        {
            name: 'Собачки',
            style: 'Собачий',
            color: 'Кремовый',
            weather: '15C',
            category: 'На выход',
            note: 'Просто потому что я люблю собачек'
        },
        {
            name: 'Крысятки',
            style: 'Крысиный',
            color: 'Белый',
            weather: '20C',
            category: 'Дома',
            note: 'Просто потому что я люблю крысок'
        },
    ]

    return <ul>{cards != null ? cards.map((card, index) => {

        return (<div className={styles.container}> <CardInfo name={card.name} style={card.style} color={card.color} weather={card.weather} category={card.category} note={card.note} /></div>)
    }): ''}</ul>

}