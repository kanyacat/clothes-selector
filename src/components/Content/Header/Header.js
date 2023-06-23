import styles from './header.css';
import {HeaderComponent} from "./HeaderComponent";
import {LoginArrow} from "../../../icons";
import {Link, Route, Routes} from "react-router-dom";
import Home from "../../../Home";
import Contact from "../../../Contact";
import {Clothes} from "../Clothes";
import {AddClothes} from "../AddClothes";
import {SelectClothes} from "../SelectClothes";

export function Header() {
    return(<header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.header__content}>
                <Link to="/">
                    <HeaderComponent text={'МОЙ ГАРДЕРОБ'}/>
                </Link>
                <Link to="/addClothes">
                    <HeaderComponent text={'ДОБАВИТЬ НУЖНУЮ ВЕЩЬ'}/>
                </Link>
                <Link to="/selectClothes">
                    <HeaderComponent text={'ПОДБОР ОДЕЖДЫ'}/>
                </Link>
                <HeaderComponent text={'login'} icon={<LoginArrow />}/>
            </div>

            <Routes>
                <Route path="/" element={<Clothes />} />
                <Route path="/addClothes" element={<AddClothes />} />
                <Route path="/selectClothes" element={<SelectClothes />} />
            </Routes>
        </div>
    </header>)
}