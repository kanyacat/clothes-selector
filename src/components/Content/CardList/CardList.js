import styles from './cardList.css';
import {CardInfo} from "../Card/CardElements/CardInfo";
import {DeleteButton} from "../Card/CardElements/DeleteButton";
import { nanoid } from "nanoid/non-secure";
import {Card} from "../Card";
import {useState} from 'react';


const cards = [
    {
        name: 'Кошечки',
        style: 'Собеседование',
        color: 'Тёмная одежда',
        weather: '15°C',
        note: 'Просто потому что я люблю кошечек',
        img: 'https://vk.com/sticker/1-71361-128b'
    },
    {
        name: 'Собачки',
        style: 'На прогулку',
        color: 'Светлая одежда',
        weather: '20°C',
        note: 'Просто потому что я люблю собачек',
        img: 'https://vk.com/sticker/1-68950-128b'
    },
    {
        name: 'Крысятки',
        style: 'Крысиный',
        color: 'Светлая одежда',
        weather: '15°C',
        note: 'Просто потому что я люблю крысок'
    },
].map((item) => ({
    ...item,
    id: nanoid(),
}));

export function CardList() {
    const [cardsState, setCardsState] = useState(cards)

    const handleDelete = id => {
        setCardsState(cardsState.filter(card => card.id !== id))
    }


    return  <>
    <ul>{cardsState != null ? cardsState.map((card, index) => {
        return (<Card key={card.id}>
            <button className={styles.deleteBtn} onClick={() => handleDelete(card.id)}><DeleteButton width={'38'} height={'38'} /></button>
            <CardInfo
            name={card.name}
            style={card.style}
            color={card.color}
            weather={card.weather}
            note={card.note}
            img={card.img}
            />
        </Card>)
    }): ''}</ul>
    </>

}