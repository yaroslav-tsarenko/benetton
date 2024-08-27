import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as PrimaryLogo } from "../../assets/images/primary-logo.svg";
import { ReactComponent as SmallLogo } from "../../assets/images/small-logo-benetton.svg";
import { ReactComponent as TimesIcon } from "../../assets/icons/timesIcon.svg";
import LinkButton from "../link-button/LinkButton";
import styles from './Header.module.scss';
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setIsBurgerOpen(!isBurgerOpen);
    };

    return (
        <>
            <div className={`${styles.burgerMenuOverlay} ${isBurgerOpen ? styles.show : styles.hide}`}>
                <div className={`${styles.burgerMenu}`}>
                    <TimesIcon onClick={toggleBurgerMenu} className={styles.timesButton} />
                    <PrimaryLogo />
                    <nav>
                        <Link className={styles.linkButtonNav} to="/">
                            Написати нам
                        </Link>
                        <Link className={styles.linkButtonNav} to="/">
                            Працювати у нас
                        </Link>
                    </nav>
                    <hr />
                    <nav>
                        <Link className={styles.linkButtonNav} to="/">
                            Написати нам
                        </Link>
                        <Link className={styles.linkButtonNav} to="/">
                            Працювати у нас
                        </Link>
                    </nav>
                    <nav>
                        <Link className={styles.linkButtonNav} to="/">
                            Написати нам
                        </Link>
                        <Link className={styles.linkButtonNav} to="/">
                            Працювати у нас
                        </Link>
                    </nav>
                </div>
            </div>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <nav>
                        <Link to="/" className={styles.logo}>
                            <PrimaryLogo />
                        </Link>
                            <LinkButton link="/">
                                Написати нам
                            </LinkButton>
                            <LinkButton link="/">
                                Працювати у нас
                            </LinkButton>
                    </nav>
                    <SmallLogo className={styles.smallLogo} />
                    <nav>
                        <LinkButton link="/">
                            Де купити
                        </LinkButton>
                        <LinkButton link="/">
                            Де працюємо
                        </LinkButton>
                        <LinkButton link="/">
                            Відгуки
                        </LinkButton>
                        <LinkButton link="/">
                            Правила
                        </LinkButton>
                    </nav>
                </div>
                <div className={styles.headerContentMobile}>
                    <SmallLogo className={styles.smallLogo} />
                    <button onClick={toggleBurgerMenu}>
                        <RxHamburgerMenu />
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;
