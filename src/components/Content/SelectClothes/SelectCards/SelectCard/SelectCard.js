import styles from './selectCard.css'
import {DeleteButton} from "../../../Card/CardElements/DeleteButton";

export function SelectCard(props) {
    const {img = 'https://svgshare.com/i/ucc.svg', name, style, note} = props;
    return <li className={styles.container}>
        {/*<button className={styles.deleteBtn}><DeleteButton  width={'28'} height={'28'}/></button>*/}
            <img src={img} className={styles.img}/>
            <h1 className={styles.name}>{name}</h1>
            <h1 className={styles.style}>{style}</h1>
    </li>
}