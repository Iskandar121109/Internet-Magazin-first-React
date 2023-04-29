import React, { useState } from 'react'
import { Stars } from '../Stars/Stars';
import classes from './cards.module.css'

export const Cards3 = ({ addByu, addtoVip }) => {
    const [cards, setCards] = useState([
        {
            id: 1, img: 'cardStocks/cards3/1.png', heart: 'cardStocks/heart.png',
            discount: '-50%', priceForCard: '77,99 Р', itemName: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
            starActive: 'cardStocks/StarActive.png', starFalse: 'cardStocks/starFalse.png'
        },
        {
            id: 2, img: 'cardStocks/cards3/2.png', heart: 'cardStocks/heart.png',
            discount: '-50%', priceForCard: '159,99 Р', itemName: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
            starActive: 'cardStocks/StarActive.png', starFalse: 'cardStocks/starFalse.png'
        },
        {
            id: 3, img: 'cardStocks/cards3/3.png', heart: 'cardStocks/heart.png',
            discount: '-50%', priceForCard: '599,99Р', itemName: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
            starActive: 'cardStocks/StarActive.png', starFalse: 'cardStocks/starFalse.png'
        },
        {
            id: 4, img: 'cardStocks/cards3/4.png', heart: 'cardStocks/heart.png',
            discount: '-50%', priceForCard: '49,39 Р', itemName: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
            starActive: 'cardStocks/StarActive.png', starFalse: 'cardStocks/starFalse.png'
        }
    ]);
    return (
        <div className={classes.cardMain}>
            {cards.map(card => (
                <div key={card.id} className={classes.cards}>
                    <img className={classes.cardImg} src={card.img} alt={card.itemName} />
                    <img className={classes.heart} src={card.heart} alt='heart' onClick={() => { addtoVip(card) }} />
                    <div className={classes.cardTextContent}>
                        <span className={classes.discont}>{card.discount}</span>
                        <div className={classes.bodyPrice}>
                            <div>
                                <span className={classes.priceForCard}>{card.priceForCard}</span>
                                <p className={classes.forCard}>{card.ForCard}</p>
                            </div>
                            <div>
                                <span className={classes.priceDefault}>{card.priceDefault}</span>
                                <p className={classes.default}>{card.Default}</p>
                            </div>
                        </div>
                        <p className={classes.item}>{card.itemName}</p>
                        <Stars />
                    </div>
                    <button onClick={() => { addByu(card); }} className={classes.btn}>В корзину</button>
                </div>
            ))}
        </div>
    )
}
