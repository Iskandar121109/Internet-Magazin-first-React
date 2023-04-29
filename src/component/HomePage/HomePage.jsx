import React from 'react'
import { Navbar } from '../Navbar/Navbar';
import { useState } from 'react';
import Articles from '../Articles/Articles';
import { Buyings } from '../Buyings/Buyings';
import { Cards } from '../Cards/Cards';
import { Cards2 } from '../Cards/Cards2';
import { Cards3 } from '../Cards/Cards3';
import cardsArr from '../CardsArr/cardsArr';
import Fotter from '../Footter/Fotter';
import ModalLogin from '../ModalLogin/ModalLogin';
import OurStores from '../OurStores/OurStores';
import SpecialOffers from '../SpecialOffers/SpecialOffers';
import { Stock } from '../Stock/Stock';
import Titles from '../Titles/Titles';
import { Orders } from '../Orders/Orders';
import { Vipes } from '../Vipes/Vipes';
import { Slider } from '../sliders/Slider';
import { Links } from '../Links/Links';

export const HomePage = () => {

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
      <Stock title='Акции' next='Акции' />
      <Cards
        btnchild="В корзину"
        addByu={addByu} filteredCards={filteredCards}
        addtoVip={addtoVip} />
      <Stock title='Новинки' next='Все новинки' />
      <Cards2 addByu={addByu} addtoVip={addtoVip} />
      <Stock title='Покупали раньше' next='Все покупки' />
      <Cards3 addByu={addByu} addtoVip={addtoVip} />
      <Titles title='Специальные предложения' />
      <SpecialOffers />
      <Titles title='Наши магазины' />
      <OurStores />
      <Stock title='Статья' next='Все статьи' />
      <Articles />
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
