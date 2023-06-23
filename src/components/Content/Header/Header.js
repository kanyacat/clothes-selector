import styles from './header.css';
import {HeaderComponent} from "./HeaderComponent";
import {LoginArrow} from "../../../icons";

export function Header() {
    return(<header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.header__content}>
                <HeaderComponent text={'МОЙ ГАРДЕРОБ'}/>
                <HeaderComponent text={'ДОБАВИТЬ НУЖНУЮ ВЕЩЬ'}/>
                <HeaderComponent text={'ПОДБОР ОДЕЖДЫ'}/>
                <HeaderComponent text={'login'} icon={<LoginArrow />}/>
            </div>
        </div>
    </header>)
}