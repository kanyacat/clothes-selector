import styles from './title.css';

export function Title(props) {
    const {value} = props
    return(<h1 className={styles.title}>{value}</h1>)
}
