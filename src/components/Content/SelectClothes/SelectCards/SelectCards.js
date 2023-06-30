import styles from './selectCards.css'

export function SelectCards({children}) {
    return <ul className={styles.container}>
        {children}
        </ul>
}