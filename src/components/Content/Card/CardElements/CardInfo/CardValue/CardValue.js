import styles from './cardValue.css';

export function CardValue(props) {
    const {title, value} = props;
    return <div className={styles.container}><span className={styles.title}>{title}</span>: <span className={styles.value}>{value}</span></div>
}