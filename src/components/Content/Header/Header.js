import styles from './header.css';
import {HeaderComponent} from "./HeaderComponent";
import {DressIcon, LoginArrow} from "../../../icons";
import {Link, Route, Routes} from "react-router-dom";
import {Clothes} from "../Clothes";
import {AddClothes} from "../AddClothes";
import {SelectClothes} from "../SelectClothes";
import {ModalWindow} from "../../ModalWindow/ModalWindow";
import React from "react";
import {MainPage} from "../MainPage";



export function Header() {
    const [isModal, setModal] = React.useState(false)

    const onClose = () => setModal(false)


    return(<header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.header__content}>
                <Link to="/" className={styles.dressIcon}>
                    <DressIcon />
                </Link>
                <Link to="/" className={styles.mainLink}>
                    <HeaderComponent text={'ГЛАВНАЯ'}/>
                </Link>
                <Link to="/clothes">
                    <HeaderComponent text={'МОЙ ГАРДЕРОБ'}/>
                </Link>
                <Link to="/addClothes">
                    <HeaderComponent text={'ДОБАВИТЬ ВЕЩЬ'}/>
                </Link>
                <Link to="/selectClothes">
                    <HeaderComponent text={'ПОДБОР ОДЕЖДЫ'}/>
                </Link>
                <a className={styles.cursor}>
                    <HeaderComponent text={'ВХОД'} icon={<LoginArrow />} onClick={() => setModal(true)}/>
                </a>
                </div>
            {isModal && (
                <ModalWindow
                    visible={isModal}
                    title="Заголовок"
                    content={<p>Что-то важное</p>}
                    footer={<button onClick={onClose}>Закрыть</button>}
                    onClose={onClose}
                />
            )}

            <Routes>
                <Route path='*' element={<MainPage />} />
                <Route path="/clothes/*" element={<Clothes />} />
                <Route path="/addClothes/*" element={<AddClothes />} />
                <Route path="/selectClothes/*" element={<SelectClothes />} />
            </Routes>
        </div>
    </header>)
}