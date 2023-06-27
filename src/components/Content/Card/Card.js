import styles from './card.css';

export function Card({children}) {
        return (<li className={styles.container}>{children}</li>)
}