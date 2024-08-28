import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as PrimaryLogo} from "../../assets/images/primary-logo.svg";
import {ReactComponent as SmallLogo} from "../../assets/images/small-logo-benetton.svg";
import {ReactComponent as TimesIcon} from "../../assets/icons/timesIcon.svg";
import LinkButton from "../link-button/LinkButton";
import styles from './Header.module.scss';
import {RxHamburgerMenu} from "react-icons/rx";
import {useLinkStore} from "../../store/linkStore";

const Header = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const getLink = useLinkStore((state) => state.getLink);
    const writeUsLink = getLink("writeUs") || '/';
    const workWithUsLink = getLink("writeUs") || '/';
    const whereToBuyLink = getLink("whereToBuy") || '/';
    const whereWorkLink = getLink("whereWork") || '/';
    const reviewsLink = getLink("reviews") || '/';
    const rulesLink = getLink("rules") || '/';

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
                        <Link className={styles.linkButtonNav} to={writeUsLink}>
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
