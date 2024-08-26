import React, {FC} from 'react';
import styles from './ForumLink.module.scss';
import {Link} from "react-router-dom";

interface ForumLinkProps {
    link: string;
    title?: string;
}

const ForumLink: FC<ForumLinkProps> = ({link, title}) => {
    return (
        <Link to={link} className={styles.forumLink}>
            {title}
        </Link>
    );
};

export default ForumLink;