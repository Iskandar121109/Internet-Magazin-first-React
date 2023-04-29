import React from 'react'
import classes from './orders.module.css'

export const Orders = ({ orders, setOrders, setOrdersHandleClick, ordersHandleClick }) => {
    return (
        <div className={ordersHandleClick === true ? classes.orders : classes.OrdersClose}>
            <span onClick={() => setOrdersHandleClick(false)} className={classes.close}>&times;</span>
            <h1>Покупки:</h1>
            <div className={classes.containerCard}>
                {orders.length !== -1 ? orders.map(card =>
                    <div key={card.id} className={classes.cards}>
                        <img className={classes.cardImg} src={card.img} alt={card.itemName} />
                        <img className={classes.heart} src={card.heart} alt='heart' />
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
                            <div className={classes.btns}>
                                <button className={classes.btn} >Купленно</button>
                            </div>
                        </div>
                    </div>
                ) : 'Покупок нету'}
            </div>
        </div>

    )
}
