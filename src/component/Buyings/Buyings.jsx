import React from 'react'
import classes from './buying.module.css'

export const Buyings = ({ buyProduct, setBuyProduct, item, setItem,
    decrementCount, incrementOrdersCount,
    decrementOrdersCount, addOrders, orders, setOrders }) => {
    const sum = item.map(el => parseFloat(el.priceForCard))
    let result = 0;
    { sum.length === 0 ? result = 0 : result = sum.reduce((a, b) => a + b) }

    const deleteBuys = (id) => {
        setItem(item.filter(el => el.id !== id))
    }
    const deleteOrders = (id) => {
        setOrders(orders.filter(el => el.id !== id))
    }
    return (
        <div className={buyProduct === true ? classes.buying : classes.buyingClose}>
            <span onClick={() => setBuyProduct(false)} className={classes.close}>&times;</span>
            <p style={{ fontSize: '18px' }}>Сумма заказа: <b>{result}</b> рубль</p>
            <div className={classes.containerCard}>
                {item.length !== -1 ? item.map(card =>
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
                                <button className={classes.btn} onClick={() => { addOrders(card); }}>Купыть</button>
                                <button onClick={() => { deleteBuys(card.id); deleteOrders(card.id); }} className={`${classes.btn} ${classes.btnRed}`}>Удалить</button>
                            </div>
                        </div>
                    </div>
                ) : 'Карзина пуста'}
            </div>
        </div>
    )
}
