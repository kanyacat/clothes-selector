import styles from './cardValue.css';

export function CardValue(props) {
    const {title, value} = props;
    return <h1 className={styles.title}>{title}: <span className={styles.value}>{value}</span></h1>
}