import styles from './cardList.css';
import {CardInfo} from "../Card/CardElements/CardInfo";
import {DeleteButton} from "../Card/CardElements/DeleteButton";
import {Card} from "../Card";
import {useState} from 'react';
import {SortBtn} from "../SortBtn";
import {useSelector} from "react-redux";
import {clothesSelector} from "../../../redux/clothes/selector";


let direction = false;

export function CardList() {
    const { items } = useSelector(clothesSelector)
    
    const [cardsState, setCardsState] = useState(items)
    
    
    const sortClick = (category) => {
        direction = !direction;
        setCardsState([...cardsState].sort((prev, next) => {
            return direction
                ? next[category].localeCompare(prev[category])
                : prev[category].localeCompare(next[category]);
            })
        )
    }

    // const handleDelete = (id) => {
    //     setCardsState(cardsState.filter(card => card.id !== id))
    // }

    return  <>
        <div className={styles.btnContainer}>
            <SortBtn onClick={() => sortClick('weather')} text={'Погода'}/>
            <SortBtn onClick={() => sortClick('style')} text={'Стиль'}/>
            <SortBtn onClick={() => sortClick('color')} text={'Цветовая гамма'}/>
        </div>
        <ul>{cardsState != null ? cardsState.map((card, index) => {
        return (<Card key={index}>
            <button className={styles.deleteBtn}
                    // onClick={() => handleDelete(card.id)}
            >
                <DeleteButton width={'38'} height={'38'} />
            </button>
            <CardInfo
            name={card.name}
            style={card.style}
            color={card.color}
            weather={card.weather}
            note={card.note}
            img={card.img}
            //   img='https://svgshare.com/i/ucc.svg'
            />
        </Card>)

    }): ''}</ul>
    </>

}