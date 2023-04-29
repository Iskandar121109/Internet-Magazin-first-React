import React, { useState } from 'react';
import classes from './stars.module.css';

export const Stars = () => {
    const [stars, setStars] = useState([
        { id: 1, src: 'cardStocks/starFalse.png' },
        { id: 2, src: 'cardStocks/starFalse.png' },
        { id: 3, src: 'cardStocks/starFalse.png' },
        { id: 4, src: 'cardStocks/starFalse.png' },
        { id: 5, src: 'cardStocks/starFalse.png' }
    ]);

    function handleStarClick(id) {
        const updatedStars = stars.map(star => {
            if (star.id <= id) {
                return { ...star, src: 'cardStocks/StarActive.png' };
            } else {
                return { ...star, src: 'cardStocks/starFalse.png' };
            }
        });
        setStars(updatedStars);
    }

    return (
        <div className={classes.stars}>
            {stars.map(star => (
                <img
                    key={star.id}
                    className={classes.starFalse}
                    src={star.src}
                    alt="Звёзды"
                    onClick={() => handleStarClick(star.id)}
                />
            ))}
        </div>
    );
}; 