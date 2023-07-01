import styles from './modalWindow.css';
import React from "react";
import ReactDOM from "react-dom";


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

    // если компонент невидим, то не отображаем его
    if (!visible) return null;

    // или возвращаем верстку модального окна
    return ReactDOM.createPortal(<div className={styles.modal} onClick={onClose}>
        <div className={styles.modalDialog} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>{title}</h3>
                <span className={styles.modalClose} onClick={onClose}>
            &times;
          </span>
            </div>
            <div className={styles.modalBody}>
                <div className={styles.modalContent}>{content}</div>
            </div>
            {footer && <div className={styles.modalFooter}>{footer}</div>}
        </div>
    </div>, node)
}


