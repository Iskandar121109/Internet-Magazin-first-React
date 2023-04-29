import React, { useState } from 'react'
import classes from './search.module.css'

export const Search = ({ props }) => {
    // Поиск по сайту 
    const [searchProduct, setSearchProduct] = useState("");
    const [cards, setCards] = useState([
        {
            id: 1, img: 'cardStocks/blinSmysom.png', heart: 'cardStocks/heart.png',
            discount: '-50%', priceForCard: '44,50 Р', priceDefault: '50.50 Р',
            ForCard: 'С картой', Default: 'Обичный', itemName: 'Г/Ц Блинчики с мясом вес, Россия',
            starActive: 'cardStocks/StarActive.png', starFalse: 'cardStocks/starFalse.png'
        },
        {
            id: 2, img: 'cardStocks/milk.png', heart: 'cardStocks/heart.png',
            discount: '-50%', priceForCard: '44,50 Р', priceDefault: '50.50 Р',
            ForCard: 'С картой', Default: 'Обичный', itemName: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...',
            starActive: 'cardStocks/StarActive.png', starFalse: 'cardStocks/starFalse.png'
        },
        {
            id: 3, img: 'cardStocks/kalbasa.png', heart: 'cardStocks/heart.png',
            discount: '-50%', priceForCard: '44,50 Р', priceDefault: '50.50 Р',
            ForCard: 'С картой', Default: 'Обичный', itemName: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...',
            starActive: 'cardStocks/StarActive.png', starFalse: 'cardStocks/starFalse.png'
        },
        {
            id: 4, img: 'cardStocks/sosiska.png', heart: 'cardStocks/heart.png',
            discount: '-50%', priceForCard: '44,50 Р', priceDefault: '50.50 Р',
            ForCard: 'С картой', Default: 'Обичный', itemName: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...',
            starActive: 'cardStocks/StarActive.png', starFalse: 'cardStocks/starFalse.png'
        }
    ]);
    const results = !searchProduct
        ? cards
        : cards.filter((product) =>
            product.itemName.toLowerCase().includes(searchProduct.toLowerCase())
        );
    return (
        <div className={classes.search}>
            <input type="search" placeholder="Поиск товаров" onChange={(e) => setSearchProduct(e.target.value)} />
            <ul>
                {results.map(el => (<li key={el.id}>{el.itemName}</li>))}
            </ul>
        </div>
    )
}
