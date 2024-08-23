import React from 'react';
import styles from './MainContent.module.scss';
import {Fade} from "react-awesome-reveal";

const MainContent = () => {
    return (
        <>
            <Fade>
                <div className={styles.mainContentWrapper}>
                    <h3>Main Content Goes Here</h3>
                </div>
            </Fade>
        </>
    );
};

export default MainContent;