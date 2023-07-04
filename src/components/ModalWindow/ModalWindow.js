import styles from './modalWindow.css';
import React from "react";
import ReactDOM from "react-dom";
import {LoginForm} from "./LoginForm/LoginForm";
import {DeleteButton} from "../Content/Card/CardElements/DeleteButton";
import {RegForm} from "./RegForm/RegForm";


export const ModalWindow = ({
                   visible = false,
                   title = '',
                   content = '',
                   footer = '',
                   onClose,
               }) => {

    const node = document.querySelector("#modal_root");
    if (!node) return null;

    // создаем обработчик нажатия клавиши Esc
    const onKeydown = ({key}) => {
        switch (key) {
            case 'Escape':
                onClose()
                break
        }
    }

    React.useEffect(() => {
        document.addEventListener('keydown', onKeydown)
        return () => document.removeEventListener('keydown', onKeydown)
    })

    const [logIn, setLogIn] = React.useState(true);

    // если компонент невидим, то не отображаем его
    if (!visible) return null;

    // или возвращаем верстку модального окна
    return ReactDOM.createPortal(<div className={styles.modal} onClick={onClose}>
        <div className={styles.modalDialog} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
                <span className={styles.modalTitle}>
                    <a className={styles.link} onClick={() => setLogIn(true)}>Вход</a>
                    <span className={styles.line}>|</span>
                    <a  className={styles.link} onClick={() => setLogIn(false)}>Регистрация</a>
                </span>
                <span className={styles.modalClose} onClick={onClose}>
            <DeleteButton width={'28'} height={'28'} />
          </span>
            </div>
            <div className={styles.modalBody}>
                {logIn && (<div className={styles.modalContent}><LoginForm /></div>)}
                {!logIn && (<div className={styles.modalContent}><RegForm /></div>)}
            </div>
        </div>
    </div>, node)
}


