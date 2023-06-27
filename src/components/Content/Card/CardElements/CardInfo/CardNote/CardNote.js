import styles from './cardNote.css';

export function CardNote(props) {
    const {value} = props;
    return (<textarea value={value} className={styles.textarea}  cols="30" rows="10" />)
}