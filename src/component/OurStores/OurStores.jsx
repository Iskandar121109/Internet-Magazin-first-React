import React from 'react'
import classes from './ourStores.module.css'

function OurStores() {
    return (
        <div className={classes.ourStores}>
            <div className={classes.links}>
                <p className={classes.active}>п.Щельяюр</p>
                <p className={classes.deactive}>д.Вертеп</p>
                <p className={classes.deactive}>с.Краснобор</p>
                <p className={classes.deactive}>д.Диюр</p>
            </div>
            <div className={classes.map}>
                <img src="ourStories/map.png" alt="map" />
            </div>
        </div>
    )
}

export default OurStores