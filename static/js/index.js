import { createFragment } from "./card.js";
import { createNewDOM } from "./newDOM.js";
import { checkOrientation } from "./screen.js";
import { addPositionGrid } from "./grid.js";

//DOM

//Рисует карты
const root = document.querySelector(".root");
const complexity = document.querySelector(".complexity");

let lvl = 48;
createFragment(root, lvl);
//Функционал
//Первый запуск игры
createNewDOM();
/*
complexity.addEventListener("input", (e) => {
  let targetNum = +e.target.value;
  switch (targetNum) {
    case 1:
      lvl = 48;
      break;
    case 2:
      lvl = 24;
      break;
  }
  root.innerHTML = "";
  createFragment(root, lvl);
  createNewDOM();
});

*/
const boxCard = document.querySelectorAll(".box");

//Перезапуск
const updateBtn = document.getElementById("update");
updateBtn.addEventListener("click", () => {
  location.reload();
});

//ОТЛАВЛИВАЕТ ПОЛОЖЕНИЯ ЭКРАНА ПРИ ЗАГРУЗКЕ
window.addEventListener("load", checkOrientation);

//ОТЛАВЛИВАЕТ ПОЛОЖЕНИЯ ЭКРАНА ПРИ ПЕРЕВОРОТЕ
window.addEventListener("resize", checkOrientation);



//Повесил на всех позицию в сетке
addPositionGrid(boxCard);

//Функционал игры
let objPair = {
  a: "", //Масть первой карты
  b: "", //Масть второй карты
  num: 0, //Нумерация
  targetFirst: null, //Первая карта
  targetLast: null, //Вторая карта
  click: false, //Проверка на повторый клик
  flag: false, //Заполнен весь обЪект
};

boxCard.forEach((card) => {
  card.addEventListener("click", (eventCard) => {
    eventCard.currentTarget.classList.add("box-rotate-active"); //открывает карту
    let cardSuit = eventCard.currentTarget.dataset.card; //Записывает масть

    //Если чет
    if (objPair.num % 2 === 0) {
      objPair.a = cardSuit; //Масть первой карты
      objPair.targetFirst = eventCard.currentTarget; //Первая карта
      objPair.click = true; //Проверка на повторый клик
    }
    //Усли нечет
    if (objPair.num % 2 === 1) {
      objPair.b = cardSuit; //Масть второй карты
      objPair.targetLast = eventCard.currentTarget; //Вторая карта
      objPair.click = false; //Проверка на повторый клик
      objPair.flag = true; //Заполнен весь обЪект
    }
    //Проверка на повторый клик/ Если true повторный клик запрещен
    if (objPair.click) objPair.targetFirst.classList.add("disabled-card");
    if (!objPair.click) objPair.targetFirst.classList.remove("disabled-card");

    //Заполнен весь обЪект
    if (objPair.flag) {
      boxCard.forEach((openCard) => {
        //Если карты совпадают
        //Проверяем на наличие класса
        if (!openCard.classList.contains("box-rotate-active")) {
          //Сверяем масть
          if (objPair.a === objPair.b) {
            //Чистим объект
            setTimeout(() => {
              objPair.targetFirst.remove();
              objPair.targetLast.remove();
              objPair.a = "";
              objPair.b = "";
              objPair.flag = false;
            }, 300);
            
          }
          //Если карты не совпадают
          else {
            openCard.classList.add("disabled-box"); //отключаем все карты
            //Чистим объект и дом от классов
            setTimeout(() => {
              openCard.classList.remove("disabled-box");
              objPair.targetFirst.classList.remove("box-rotate-active");
              objPair.targetLast.classList.remove("box-rotate-active");
              objPair.a = "";
              objPair.b = "";
              objPair.flag = false;
            }, 300);
          }
        }
      });
    }
    objPair.num++;

    document.querySelector(
      ".update-total"
    ).textContent = `Всего ходов: ${objPair.num}`;
  });
});
