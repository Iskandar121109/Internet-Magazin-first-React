import React from 'react'
import classes from './articles.module.css'

function Articles() {
    const posts = [
        {
            id: 1,
            img: 'articles/mask.png',
            data: '21.03.2023',
            title: 'Режим использования масок и перчаток на территории магазинов',
            content: 'Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.',
        },
        {
            id: 2,
            img: 'articles/spring.png',
            data: '23.03.2023',
            title: 'Весеннее настроение для каждой',
            content: '8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.',
        },
        {
            id: 3,
            img: 'articles/foot.png',
            data: '25.03.2023',
            title: 'ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!',
            content: 'Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!',
        }
    ]
    return (
        <div className={classes.articles}>
            {posts.map(el => (
                <div key={el.id} className={classes.articleCards}>
                    <img src={el.img} alt={el.title} />
                    <div className={classes.cardBody}>
                        <div>{el.data}</div>
                        <strong>{el.title}</strong>
                        <p>{el.content}</p>
                        <button>Подробнее</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Articles