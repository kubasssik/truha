import { createFragment } from "./card.js";
import { createNewDOM } from "./newDOM.js";
import { checkOrientation } from "./screen.js";
import { addPositionGrid } from "./grid.js";
import { gameLogic } from "./logicGame.js";
import { objPair } from "./setting.js";
//DOM
//Рисует карты
const root = document.querySelector(".root");


createFragment(root, objPair.lvl);

//Первый запуск игры
createNewDOM();
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

//Повесил на всех позицию в сетке grid - Временно, потом надао переписать в css
addPositionGrid(boxCard);

//Функционал игры
gameLogic(boxCard, objPair)






