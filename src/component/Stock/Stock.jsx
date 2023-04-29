import React from 'react'
import classes from './stock.module.css'

export const Stock = ({ props, title, next }) => {
    return (
        <div>
            <div className={classes.stock}>
                <div className={classes.title}>
                    <h2>{title}</h2>
                    <div>
                        <span>{next}</span>
                       <img src="arrRight.png" alt="arrRight" /> 
                    </div>
                </div>
            </div>
        </div>
    )
}
