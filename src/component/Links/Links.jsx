import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './links.module.css'

export const Links = () => {
    return (
        <div className={classes.links}>
            <Link className={classes.link} to='/home'>Главная</Link>
            <Link className={classes.link} to='/catalog'>Каталог</Link>
        </div>
    )
}
