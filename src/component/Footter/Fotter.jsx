import React from 'react'
import classes from './footter.module.css'

function Fotter() {
    return (
        <div className={classes.footter}>
            <div className={classes.content}>
                <div className={classes.logo}>
                    <img src="footter/logoFotter.png" alt="logo" />
                </div>
                <div className={classes.links}>
                    <span>О компании</span>
                    <span>Контакты</span>
                    <span>Вакансии</span>
                    <span>Статьи</span>
                    <span>Политика обработки персональных данных</span>
                </div>
                <div className={classes.social}>
                    <img src="footter/instagramm.png" alt="instagramm" />
                    <img src="footter/vk.png" alt="instagramm" />
                    <img src="footter/facebook.png" alt="instagramm" />
                    <img src="footter/ok.png" alt="instagramm" />
                </div>
                <div className={classes.namber}>
                    <img src="footter/phone.png" alt="phone" />
                     8 800 777 33 33
                </div>
            </div>
            <div className={classes.design}>

            </div>
        </div>
    )
}

export default Fotter