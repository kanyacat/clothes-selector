import styles from './headerComponent.css'

export function HeaderComponent(props) {
    const {text, icon, onClick} = props

    return (
        <p className={styles.headerLink} onClick={onClick}>{text} <span className={styles.icon}>{icon}</span></p>
    )
}