import React from "react";

class Content extends React.Component {
    render() {
      return <div>
                <h4>Хобі</h4>
            <ul>
                <li>Малювання</li>
                <li id="elementSix" >Заняття йогою</li>
                <li id="elementSeven" >Написання віршів</li>
            </ul>
            <h4>Улюблені фільми</h4>
            <ul>
                <li>Зоряні Війни(всі частини)</li>
                <li>Доктор Стрендж</li>
                <li>Приховані фігури</li>
            </ul>
            <h4>Найуподобаніше місто</h4>
            <p>Га́йдельберг (нім. Heidelberg МФА: [ˈhaɪ̯dl̩bɛɐ̯k]) — місто в Німеччині, на північному заході землі Баден-Вюртемберг. П'яте за величиною місто Баден-Вюртембергу, належить до агломерації регіон Рейн-Неккар, центром якої є сусідній Мангайм.
                Колишня столиця Курпфальцу, відома своїм Старим центром (Heidelberger Altstadt), давнім університетом Рупрехта-Карла, величними руїнами замку, а також колишньою Палатинською бібліотекою, однією з найбільших книгозбірень Ренесансу, нині частково включеною до складу бібліотеки Гайдельберзького університету.
                </p>
            <a href="https://www.heidelberg.de/english/Home.html"><img src="img/Heidelberg_corr.jpg" alt="Heidelberg" width="900"></img></a>
      </div>
    }
  }

export default Content;