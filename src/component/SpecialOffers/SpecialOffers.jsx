import React from 'react'
import classes from './social.module.css'

function SpecialOffers() {
    return (
        <div className={classes.social}>
            <div className={classes.decor}>
                <div className={classes.decorContent}>
                    <div className={classes.socTitle}>
                        Оформите карту «Северяночка»
                    </div>
                    <div className={classes.text}>
                        И получайте бонусы при покупке в магазинах и на сайте
                    </div>
                </div>
                <div className={classes.decorPhoto}>
                    <img src="social/decorPhoto.png" alt="decor" />
                </div>
            </div>
            <div className={classes.buyPromo}>
                <div className={classes.decorContent}>
                    <div className={classes.socTitle}>
                        Покупайте акционные товары
                    </div>
                    <div className={classes.text}>
                    И получайте вдвое больше бонусов
                    </div>
                </div>
                <div className={classes.decorPhoto}>
                    <img src="social/bajketPromo.png" alt="decor" />
                </div>
            </div>
        </div>
    )
}

export default SpecialOffers