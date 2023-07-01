import styles from './modalWindow.css';
import React from "react";

const Modal = ({
                   visible = false,
                   title = '',
                   content = '',
                   footer = '',
                   onClose,
               }) => {

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
    return <div className={styles.modal} onClick={onClose}>
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
    </div>
}

export const ModalWindow = () => {
    const [isModal, setModal] = React.useState(false)
    const onClose = () => setModal(false)
    return (
        <React.Fragment>
            <button onClick={() => setModal(true)}>Клик-клик-клик</button>
            <Modal
                visible={isModal}
                title="Заголовок"
                content={<p>Что-то важное</p>}
                footer={<button onClick={onClose}>Закрыть</button>}
                onClose={onClose}
            />
         </React.Fragment>
    );
};

