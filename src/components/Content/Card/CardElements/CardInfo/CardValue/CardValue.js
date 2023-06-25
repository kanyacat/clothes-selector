import styles from './cardValue.css';

export function CardValue(props) {
    const {title, value} = props;
    return <><h1 className={styles.title}>{title}: {value}</h1></>
}