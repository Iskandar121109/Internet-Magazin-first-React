import React from 'react'
import classes from './titles.module.css'

function Titles({title}) {
    return (
        <div>
            <div className={classes.titles}>
                <div className={classes.title}>
                    <h2>{title}</h2>
                </div>
            </div>
        </div>  
    )
}

export default Titles