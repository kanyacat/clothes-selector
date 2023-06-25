import styles from './cardNote.css';

export function CardNote(props) {
    const {value = ''} = props;
    return (<textarea className={styles.textarea}  cols="30" rows="10" disabled>{value}</textarea>)
}