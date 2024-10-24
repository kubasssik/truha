import * as fun from "./functionsCard.js";
import * as myArr from "./arr.js";
import { createElement } from "./createElement.js";
import { createNewDOM } from "./newDOM.js";





//Создает колоду
export function createFragment(root, lvl) {
  const fragment = document.createDocumentFragment();
  
  for (let i = 0; i < lvl; i++) {
    //Создает тег и класс
    const box = createElement("div", "box", `${myArr.cards[i]}${myArr.cardSuit[i]}`);
    const cardFront = createElement("div", "front");
    const cardBack = createElement("div", "back");
    const topTitleSuit = createElement("ul", "card-top");
    const centerSuit = createElement("ul", "card-center");
    const bottomTitleSuit = createElement("ul", "card-bottom");

    const item = myArr.cards[i]; //Карта
    const suit = myArr.cardSuit[i]; //Масть

    //Верхний колонтикул
    fun.addTitleSuit(topTitleSuit, item, suit);
    //Нижний колонтикул
    fun.addTitleSuit(bottomTitleSuit, item, suit);

    //Добовляет количество мастей в центре карты и классы
    if (item === "T") {
      fun.addCenterCard(centerSuit, suit);
      //Добовляет масть в центр только для туз
      centerSuit.classList.add("ace");
    } else
      for (let center = 0; center < item; center++) {
        //Добовляет масть в центр
        fun.addCenterCard(centerSuit, suit);
        //Добавляет класс из массива по масти
        fun.addClass(myArr.arrCn, item, centerSuit);
      }

    //Красит в крысный, красную масть
    if (suit === "♥" || suit === "♦") cardFront.style.color = "red";

    cardFront.appendChild(topTitleSuit);
    cardFront.appendChild(centerSuit);
    cardFront.appendChild(bottomTitleSuit);

    box.appendChild(cardFront);
    box.appendChild(cardBack);

    fragment.appendChild(box);
    root.appendChild(fragment);
  }
}
