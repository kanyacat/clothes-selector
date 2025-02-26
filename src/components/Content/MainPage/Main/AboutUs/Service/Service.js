import styles from './service.css'


export function Service() {
    return <>
        <div className={styles.content}>
            <div className={styles.service}>
                <h1 className={styles.title}>СЕРВИС</h1>
                <p className={styles.text}>Данный сервис – это организатор гардероба,
                    в котором можно оцифровать одежду.
                </p>

                <p className={styles.text}>Больше не нужно тратить время на
                    бессмысленные поиски, достаточно просто зайти на сайт.
                    И, конечно, «Гардероб» позволит подбирать
                    необходимую одежду согласно предстоящим мероприятиям, погоде и просто вашему настроению.
                </p>
            </div>
            <span className={styles.imgContainer} />

        </div>
            </>
}