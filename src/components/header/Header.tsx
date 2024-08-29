import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as PrimaryLogo} from "../../assets/images/primary-logo.svg";
import {ReactComponent as SmallLogo} from "../../assets/images/small-logo-benetton.svg";
import {ReactComponent as TimesIcon} from "../../assets/icons/timesIcon.svg";
import LinkButton from "../link-button/LinkButton";
import styles from './Header.module.scss';
import {RxHamburgerMenu} from "react-icons/rx";

interface HeaderProps {
    writeUsLink: string;
    workWithUsLink: string;
    whereToBuyLink: string;
    whereWorkLink: string;
    reviewsLink: string;
    rulesLink: string;
}

const Header: FC<HeaderProps> = ({writeUsLink, workWithUsLink, whereWorkLink, whereToBuyLink, reviewsLink, rulesLink}) => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const toggleBurgerMenu = () => {
        setIsBurgerOpen(!isBurgerOpen);
    };

    return (
        <>
            <div className={`${styles.burgerMenuOverlay} ${isBurgerOpen ? styles.show : styles.hide}`}>
                <div className={`${styles.burgerMenu}`}>
                    <TimesIcon onClick={toggleBurgerMenu} className={styles.timesButton}/>
                    <PrimaryLogo/>
                    <nav>
                        <Link className={styles.linkButtonNav} to={writeUsLink}>
                            Написати нам
                        </Link>
                        <Link className={styles.linkButtonNav} to={workWithUsLink}>
                            Працювати у нас
                        </Link>
                    </nav>
                    <hr/>
                    <nav>
                        <Link className={styles.linkButtonNav} to={whereWorkLink}>
                            Де працюємо
                        </Link>
                        <Link className={styles.linkButtonNav} to={whereToBuyLink}>
                            Де купити
                        </Link>
                    </nav>
                    <nav>
                        <Link className={styles.linkButtonNav} to={reviewsLink}>
                            Відгуки
                        </Link>
                        <Link className={styles.linkButtonNav} to={rulesLink}>
                            Правила
                        </Link>
                    </nav>
                </div>
            </div>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <nav>
                        <Link to="/" className={styles.logo}>
                            <PrimaryLogo/>
                        </Link>
                        <LinkButton link={writeUsLink}>
                            Написати нам
                        </LinkButton>
                        <LinkButton link={workWithUsLink}>
                            Працювати у нас
                        </LinkButton>
                    </nav>
                    <SmallLogo className={styles.smallLogo}/>
                    <nav>
                        <LinkButton link={whereToBuyLink}>
                            Де купити
                        </LinkButton>
                        <LinkButton link={whereWorkLink}>
                            Де працюємо
                        </LinkButton>
                        <LinkButton link={reviewsLink}>
                            Відгуки
                        </LinkButton>
                        <LinkButton link={rulesLink}>
                            Правила
                        </LinkButton>
                    </nav>
                </div>
                <div className={styles.headerContentMobile}>
                    <SmallLogo className={styles.smallLogo}/>
                    <button onClick={toggleBurgerMenu}>
                        <RxHamburgerMenu/>
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;
