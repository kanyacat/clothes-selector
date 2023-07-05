import styles from './headerComponent.css'

export function HeaderComponent(props) {
    const {text, icon, onClick} = props

    return (
        <nav className={styles.headerLink} onClick={onClick}>{text} <span className={styles.icon}>{icon}</span></nav>
    )
}