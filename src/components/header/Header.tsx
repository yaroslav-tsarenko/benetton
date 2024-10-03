import React, {FC, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as PrimaryLogo} from "../../assets/images/primary-logo.svg";
import {ReactComponent as SmallLogo} from "../../assets/images/small-logo-benetton.svg";
import {ReactComponent as TimesIcon} from "../../assets/icons/timesIcon.svg";
import LinkButton from "../link-button/LinkButton";
import styles from './Header.module.scss';
import {RxHamburgerMenu} from "react-icons/rx";
import {BACKEND_URL} from "../../constants/constants";
import axios from "axios";

interface HeaderButton {
    link: string;
    name: string;
}

interface HeaderProps {
    writeUsLink: string;
    workWithUsLink: string;
    whereToBuyLink: string;
    whereWorkLink: string;
    reviewsLink: string;
    rulesLink: string;
}

const Header: FC<HeaderProps> = ({
                                     writeUsLink,
                                     workWithUsLink,
                                     whereWorkLink,
                                     whereToBuyLink,
                                     reviewsLink,
                                     rulesLink
                                 }) => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const toggleBurgerMenu = () => {
        setIsBurgerOpen(!isBurgerOpen);
    };

    const [headerButtons, setHeaderButtons] = useState<HeaderButton[]>([]);

    useEffect(() => {
        const fetchHeaderButtons = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/get-header-buttons`);
                const buttons = response.data;
                const links = buttons.map((button: HeaderButton) => button.link);
                const names = buttons.map((button: HeaderButton) => button.name);
                setHeaderButtons(buttons);
                console.log("Links:", links);
                console.log("Names:", names);
            } catch (error) {
                console.error('Error fetching header buttons:', error);
            }
        };

        fetchHeaderButtons();
    }, []);

    return (
        <>
            <div className={`${styles.burgerMenuOverlay} ${isBurgerOpen ? styles.show : styles.hide}`}>
                <div className={`${styles.burgerMenu}`}>
                    <TimesIcon onClick={toggleBurgerMenu} className={styles.timesButton}/>
                    <PrimaryLogo/>
                    <nav>
                        {headerButtons.slice(0, 2).map((button, index) => (
                            <Link className={styles.linkButtonNav} key={index} to={button.link}>
                                {button.name}
                            </Link>
                        ))}
                    </nav>
                    <hr/>
                    <nav>
                        {headerButtons.slice(2, 4).map((button, index) => (
                            <Link className={styles.linkButtonNav} key={index} to={button.link}>
                                {button.name}
                            </Link>
                        ))}
                    </nav>
                    <nav>
                        {headerButtons.slice(4, 6).map((button, index) => (
                            <Link className={styles.linkButtonNav} key={index} to={button.link}>
                                {button.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <nav>
                        <Link to="/" className={styles.logo}>
                            <PrimaryLogo/>
                        </Link>
                        {headerButtons.slice(0, 2).map((button, index) => (
                            <LinkButton key={index} link={button.link}>
                                {button.name}
                            </LinkButton>
                        ))}
                    </nav>
                    <SmallLogo className={styles.smallLogo}/>
                    <nav>
                        {headerButtons.slice(2, 6).map((button, index) => (
                            <LinkButton key={index} link={button.link}>
                                {button.name}
                            </LinkButton>
                        ))}
                    </nav>
                </div>
                <div className={styles.headerContentMobile}>
                    <section>
                        <SmallLogo className={styles.smallLogo}/>
                        <button onClick={toggleBurgerMenu}>
                            <RxHamburgerMenu/>
                        </button>
                    </section>

                    <div className={styles.headerMobileButtons}>
                        {headerButtons.slice(6, 9).map((button, index) => (
                            <Link className={styles.linkButtonNav} key={index} to={button.link}>
                                {button.name}
                            </Link>
                        ))}
                    </div>
                </div>

            </header>
        </>
    );
};

export default Header;
