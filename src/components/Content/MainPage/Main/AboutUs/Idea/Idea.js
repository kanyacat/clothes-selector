import styles from './idea.css'


export function Idea() {
    return <>
        <div className={styles.content}>
        <span className={styles.imgContainer} />
            <div className={styles.idea}>
                <h1 className={styles.title}>ИДЕЯ</h1>
                <p className={styles.text}>«Гардероб» - мы создали это приложение для всех тех, кто каждое утро теряется в собственных вещах,
                    а вместо чашечки кофе судорожно разгребает завалы в поисках того самого костюма или платья. Узнаете себя?
                    Значит, вы попали в нужное место.</p>
                       <p className={styles.text}>Предлагаем присоединиться к нам, стать пользователем приложения «Гардероб» и,
                           наконец, освободить те самые драгоценные 15 минут утреннего времени для мелки радостей.
                           Попробуйте и посмотрите, как это изменит вашу жизнь, всегда приятнее начинать день
                           с улыбки и хорошего настроения.
                       </p>
            </div>
        </div>
            </>
}