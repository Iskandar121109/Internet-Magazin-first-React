import React from 'react'
import { Navbar } from '../Navbar/Navbar';
import { useState } from 'react';
import classes from './catalog.module.css';
import { Buyings } from '../Buyings/Buyings';
import cardsArr from '../CardsArr/cardsArr';
import Fotter from '../Footter/Fotter';
import ModalLogin from '../ModalLogin/ModalLogin';
import { Orders } from '../Orders/Orders';
import { Vipes } from '../Vipes/Vipes';
import { Slider } from '../sliders/Slider';
import { Links } from '../Links/Links';

export const Catalog = () => {

  const [modalLogin, setModalLogin] = useState(false);
  const [modCatalog, setModCatalog] = useState(false);
  const [buyProduct, setBuyProduct] = useState(false);

  const [item, setItem] = useState([]);
  function addByu(el) {
    setItem([...item, el])
  }
  const [search, setSearch] = useState("");
  const filteredCards = cardsArr.filter(card =>
    card.itemName.toLowerCase().includes(search.toLowerCase())
  );
  const [heartCount, setHeartCount] = useState(0);
  const [vipCount, setVipCount] = useState(false)
  const [vipes, setVipes] = useState([]);

  function addtoVip(el) {
    setVipes([...vipes, el])
    setHeartCount(heartCount + 1)
    console.log(vipes);
  }
  const [OrdersCount, setOrdersCount] = useState(0);
  function incrementOrdersCount() {
    setOrdersCount(OrdersCount + 1)
  }
  function decrementOrdersCount() {
    if (OrdersCount >= 0 && OrdersCount !== -1) {
      setOrdersCount(OrdersCount - 1)
    }
  }
  const [ordersHandleClick, setOrdersHandleClick] = useState(false);
  console.log(ordersHandleClick);
  const [orders, setOrders] = useState([]);
  function addOrders(elem) {
    setOrders([...orders, elem])
  }
  return (
    <div className="homePage">
      <Navbar
        orders={orders}
        setOrdersHandleClick={setOrdersHandleClick}
        ordersHandleClick={ordersHandleClick}
        item={item}
        setModalLogin={setModalLogin}
        modCatalog={modCatalog} setModCatalog={setModCatalog}
        buyProduct={buyProduct} setBuyProduct={setBuyProduct}
        filteredCards={filteredCards}
        search={search} setSearch={setSearch}
        heartCount={heartCount}
        OrdersCount={OrdersCount}
        vipCount={vipCount} setVipCount={setVipCount}
        vipes={vipes}
      />
      <Slider />
      <Links />
      <div className={classes.catalog}>
        <div className={classes.title}>
          Каталог
        </div>
        <div className={classes.content}>
          <div className={classes.milk}>
            <div className={classes.contentTitles}>
              Молоко, сыр, яйцо
            </div>
          </div>
          <div className={classes.bread}>
            <div className={classes.contentTitles}>
              Хлеб
            </div>
          </div>
          <div className={classes.fruit}>
            <div className={classes.contentTitles}>
              Фрукты и овощи
            </div>
          </div>
          <div className={classes.iceProduct}>
            <div className={classes.contentTitles}>
              Замороженные продукты
            </div>
          </div>
          <div className={classes.drinkables}>
            <div className={classes.contentTitles}>
              Напитки
            </div>
          </div>
          <div className={classes.confectionery}>
            <div className={classes.contentTitles}>
              Кондитерские изделия
            </div>
          </div>
          <div className={classes.cofeeAndTea}>
            <div className={classes.contentTitles}>
              Чай, кофе
            </div>
          </div>
          <div className={classes.pasta}>
            <div className={classes.contentTitles}>
              Бакалея
            </div>
          </div>
          <div className={classes.healthlyFood}>
            <div className={classes.contentTitles}>
              Здоровое питание
            </div>
          </div>
          <div className={classes.zooproduct}>
            <div className={classes.contentTitles}>
              Зоотовары
            </div>
          </div>
          <div className={classes.kidsProduct}>
            <div className={classes.contentTitles}>
              Детское питание
            </div>
          </div>
          <div className={classes.meat}>
            <div className={classes.contentTitles}>
              Мясо, птица, колбаса
            </div>
          </div>
          <div className={classes.nonFoodProduct}>
            <div className={classes.contentTitles}>
              Непродовольственные товары
            </div>
          </div>
        </div>
      </div>
      <Fotter />
      <div className='modal'>
        <ModalLogin modalLogin={modalLogin} setModalLogin={setModalLogin} />
      </div>
      <Buyings buyProduct={buyProduct} setBuyProduct={setBuyProduct}
        item={item} setItem={setItem}
        incrementOrdersCount={incrementOrdersCount} decrementOrdersCount={decrementOrdersCount}
        addOrders={addOrders} orders={orders} setOrders={setOrders} />
      <Orders orders={orders} setOrders={setOrders} setOrdersHandleClick={setOrdersHandleClick} ordersHandleClick={ordersHandleClick} />
      <Vipes vipCount={vipCount} setVipCount={setVipCount} vipes={vipes} setVipes={setVipes} incrementOrdersCount={incrementOrdersCount}
        addOrders={addOrders}
      />
    </div>
  );
}
