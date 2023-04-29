import React from 'react'
import classes from './modalLogin.module.css'

function ModalLogin({ modalLogin, setModalLogin }) {
    return (
        <div className={modalLogin === false ? classes.close : classes.open} >
            <div className={classes.modalLogin} >
                <div className={classes.loginIn}>
                    <span onClick={() => { setModalLogin(false) }}>&times;</span>
                    <h3 className={classes.h3}>Вход</h3>
                    <div className={classes.form}>
                        <div className={classes.boxs}>
                            <label htmlFor="phone">Телефон</label>
                            <input className={classes.input} type="text" name='phone' placeholder='Введите телефон' />
                        </div>
                        <button className={classes.btn}>Вход</button>
                        <div className={classes.btnsLogin}>
                            <button className={classes.registr}>Регистрация</button>
                            <button className={classes.forgotPass}>Забилы пароль?</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalLogin