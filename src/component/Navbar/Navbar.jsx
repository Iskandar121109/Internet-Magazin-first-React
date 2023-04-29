import React from 'react'
import classes from './navbar.module.css'

export const Navbar = ({ count, modalLogin, setModalLogin, modCatalog,
    setModCatalog, buyProduct, setBuyProduct, search, setSearch,
    heartCount, OrdersCount, setOrdersHandleClick,
    ordersHandleClick, vipCount, setVipCount, item, orders, vipes }) => {

    return (
        <div className={classes.navbar}>
            <div className={classes.logo}>
                <img src='NavbarLogo.png' alt="logo" />
                <h2>Северяночка</h2>
            </div>
            <div onClick={() => { modCatalog === false ? setModCatalog(true) : setModCatalog(false) }} className={classes.catalog}>
                <div className={classes.menu}>
                    <span className={classes.def}></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={classes.catalogTitle}>Каталог</div>
                <div className={`${classes.catalModul} ${modCatalog && classes.catalModulShow}`}>
                    <p>Акции</p>
                    <p>Новинки</p>
                    <p>Покупали раньше</p>
                    <p>Специальные предложения</p>
                    <p>Наши магазины...</p>
                    <p>Статья</p>
                </div>
            </div>
            <div className={classes.search}>
                <input type="search" placeholder='Найти товар' onChange={e => setSearch(e.target.value)} value={search} />
                <img src="search.png" alt="" />
            </div>
            <div className={classes.prices}>
                <div className={classes.vip} onClick={() => { setVipCount(vipCount = !vipCount) }}>
                    <span>{vipes.length}</span>
                    <img src="vip.png" alt="vip" />
                    <p>Избранное</p>
                </div>
                <div className={classes.orders} onClick={() => { setOrdersHandleClick(ordersHandleClick = !ordersHandleClick); }}>
                    <span>{orders.length}</span>
                    <img src="orders.png" alt="orders" />
                    <p>Заказы</p>
                </div>
                <div onClick={() => { setBuyProduct(buyProduct = !buyProduct) }} className={classes.basket}>
                    <span>{item.length}</span>
                    <img src="basket.png" alt="basket" />
                    <p>Корзина</p>
                </div>
            </div>
            <div onClick={() => setModalLogin(true)} className={classes.users}>
                {modalLogin && <img src="avatarUser.png" alt="users" />}
                {modalLogin && <p>Алексей</p>}
                {!modalLogin && <p>Войти</p>}
                <img className={classes.arrDown} src="arrDown.png" alt="down" />
            </div>
        </div>
    )
}
