import React from 'react'
import { Stars } from '../Stars/Stars';
import classes from './cards.module.css'

export const Cards = ({ btnchild, addByu, getStar, srcStar, filteredCards, addtoVip }) => {
    return (
        <div className={classes.cardMain}>
            {filteredCards.map(card => (
                <div key={card.id} className={classes.cards}>
                    <img className={classes.cardImg} src={card.img} alt={card.itemName} />
                    <img className={classes.heart} src={card.heart} alt='heart' onClick={() => {addtoVip(card)}} />
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
                        <Stars getStar={getStar} cardActive={card.cardActive} srcStar={srcStar}/>
                        <button onClick={() => { addByu(card); }}
                            className={classes.btn}>{btnchild}</button>
                    </div>
                </div>
            ))
            }
        </div >
    )
}
