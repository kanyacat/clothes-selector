import styles from './headerComponent.css'

export function HeaderComponent(props) {
    const {text, icon} = props

    return (
        <a href='#link' className={styles.headerLink}>{text} <span className={styles.icon}>{icon}</span></a>
    )
}