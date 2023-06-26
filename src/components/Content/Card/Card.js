import styles from './card.css';
import {CardInfo} from "./CardElements/CardInfo";
import {DeleteButton} from "./CardElements/DeleteButton";

export function Card() {
    const cards = [
        {
            name: 'Кошечки',
            style: 'Кошачий',
            color: 'Розовый',
            weather: '15C',
            category: 'На выход',
            note: 'Просто потому что я люблю кошечек',
            img: 'https://vk.com/sticker/1-71361-128b'
        },
        {
            name: 'Собачки',
            style: 'Собачий',
            color: 'Кремовый',
            weather: '15C',
            category: 'На выход',
            note: 'Просто потому что я люблю собачек',
            img: 'https://vk.com/sticker/1-68950-128b'
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
        return (<div className={styles.container}>
            <button className={styles.deleteBtn}><DeleteButton /></button>
            <CardInfo
            name={card.name}
            style={card.style}
            color={card.color}
            weather={card.weather}
            category={card.category}
            note={card.note}
            img={card.img}/>
        </div>)
    }): ''}</ul>

}