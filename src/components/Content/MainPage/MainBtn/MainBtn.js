import styles from './mainBtn.css'


export function MainBtn(props) {
    const {value} = props;

    return <>
        <button className={styles.btn}>{value}</button>
    </>
}