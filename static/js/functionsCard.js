//Колонтикул
export function addTitleSuit(cardSuit, item, suit) {
  for (let i = 0; i < 2; i++) {
    const e = document.createElement("li");
    if (i === 0) e.textContent = item; //Карта
    if (i === 1) e.textContent = suit; //Масть
    cardSuit.appendChild(e);
  }
}

//Добовляет количество мастей в центре карты(Куда добавить, какую масть добавить)
export function addCenterCard(centerSuit, suit) {
    const e = document.createElement("li");
    e.textContent = suit;
    centerSuit.appendChild(e);
  }

  //Добовляет класс из массива по масти
export function addClass(arr, item, centerSuit) {
    for (let cn = 0; cn < arr.length; cn++) {
        const e = arr[cn];
        switch (item) {
          case e[0]:
            centerSuit.classList.add(e[1]);
            break;
        }
}
}  
