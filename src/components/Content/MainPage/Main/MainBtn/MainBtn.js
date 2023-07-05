import styles from './mainBtn.css'


export function MainBtn(props) {
    const {value, onClick} = props;

    return <>
        <button className={styles.btn} onClick={onClick}>{value}</button>
    </>
}