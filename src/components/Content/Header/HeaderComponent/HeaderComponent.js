import styles from './headerComponent.css'

export function HeaderComponent(props) {
    const {text, icon} = props

    return (
        <p className={styles.headerLink}>{text} <span className={styles.icon}>{icon}</span></p>
    )
}