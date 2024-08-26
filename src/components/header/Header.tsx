import React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as PrimaryLogo} from "../../assets/images/primary-logo.svg";
import {ReactComponent as SmallLogo} from "../../assets/images/small-logo-benetton.svg";
import LinkButton from "../link-button/LinkButton";
import styles from './Header.module.scss';


const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <Link to="/" className={styles.logo}>
                    <PrimaryLogo/>
                </Link>
                <section>
                    <LinkButton link="/">
                        Написати нам
                    </LinkButton>
                    <LinkButton link="/">
                        Працювати у нас
                    </LinkButton>
                </section>
            </nav>
            <SmallLogo/>
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
        </header>
    );
};

export default Header;