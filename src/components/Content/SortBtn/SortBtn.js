import styles from './sortBtn.css';
import {SortArrow} from "../../../icons";

export function SortBtn(props) {
    const {onClick, text} = props
    return  <>
        <button onClick={onClick} className={styles.btn}>{text}
            <span className={styles.icon}><SortArrow/></span> </button>
        </>
    }