"use-client";

import styles from "./articleCard.module.css";

const ArticleCard = ({date, description, title, content, imageAlt, imageSrc}) => {
    
    return (
        <div className={styles.articleCard}>
            <div className= {styles.articleCardImage}>
                <img src={imageSrc} alt={imageAlt} />
            </div>
            <div className={styles.articleCardContent}>
                <h2>{title}</h2>
                <p>{date}</p>
                <p>{description}</p>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default ArticleCard; 