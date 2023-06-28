import styles from './deleteButton.css'

export function DeleteButton() {
    return(
        <svg className={styles.btn} width="38" height="38" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M65.9917 66.6819C50.5232 81.4087 26.045 80.8074 11.3182 65.3389C-3.40868 49.8703 -2.80741 25.3921 12.6611 10.6653C28.1297 -4.06154 52.6079 -3.46026 67.3347 12.0083C82.0616 27.4768 81.4603 51.955 65.9917 66.6819ZM55.3872 19.7484L58.9425 23.4828L42.9339 38.7239L58.2223 54.7823L54.4879 58.3376L39.1995 42.2792L23.0919 57.6144L19.5366 53.88L35.6441 38.5448L20.3563 22.487L24.0907 18.9317L39.3785 34.9894L55.3872 19.7484Z" fill="#CABCB1"/>
        </svg>)
}