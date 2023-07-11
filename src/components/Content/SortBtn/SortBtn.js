import styles from './sortBtn.css';

export function SortBtn(props) {
    const {onClick, text} = props
    return  <>
        <button onClick={onClick} className={styles.btn}>{text}</button>
        </>
    }