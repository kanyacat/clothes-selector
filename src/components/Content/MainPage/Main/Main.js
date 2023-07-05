import styles from './main.css'
import {MainBtn} from "./MainBtn";
import React from "react";
import {ModalWindow} from "../../../ModalWindow/ModalWindow";


export function Main() {
    const [isModal, setModal] = React.useState(false)

    const onClose = () => setModal(false)

    return <>
        <main className={styles.main}>
            <h1 className={styles.title}>ГАРДЕРОБ</h1>
            <div className={styles.btns}>
                <MainBtn value='Начать пользоваться' onClick={() =>
                    setModal(true) } />
            </div>
        </main>
        {isModal && (
            <ModalWindow
                visible={isModal}
                title="Заголовок"
                content={<p>Что-то важное</p>}
                footer={<button onClick={onClose}>Закрыть</button>}
                onClose={onClose}
            />
        )}
    </>
}