const $win =  document.querySelector('.win')
//Функционал игры
export function gameLogic(boxCard, objPair, ) {

    boxCard.forEach((card) => {
      card.addEventListener("click", (eventCard) => {
      
        eventCard.currentTarget.classList.add("box-rotate-active"); //открывает карту
        const cardSuit = eventCard.currentTarget.dataset.card; //Записывает масть
    
        //Если чет
        if (objPair.num % 2 === 0) {
          objPair.a = cardSuit; //Масть первой карты
          objPair.targetFirst = eventCard.currentTarget; //Первая карта
          objPair.click = true; //Проверка на повторый клик
        }
        //Усли нечет
        else if (objPair.num % 2 === 1) {
          objPair.b = cardSuit; //Масть второй карты
          objPair.targetLast = eventCard.currentTarget; //Вторая карта
          objPair.click = false; //Проверка на повторый клик
          objPair.flag = true; //Заполнен весь обЪект
        }
  
        //Проверка на повторый клик/ Если true повторный клик запрещен
        if (objPair.click) objPair.targetFirst.classList.add("disabled-card");
        else if (!objPair.click) objPair.targetFirst.classList.remove("disabled-card");
    
        //Заполнен весь обЪект
        if (objPair.flag) {
          boxCard.forEach((openCard) => {
          
            //Проверяем на наличие класса
            if (!openCard.classList.contains("box-rotate-active")) {
               //Если карты совпадают
              //Сверяем масть
              if (objPair.a === objPair.b) {
                //Чистим объект
                setTimeout(() => {
                  objPair.targetFirst.remove();
                  objPair.targetLast.remove();
                  objPair.reset() 
                  objPair.win = true
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
                  objPair.reset() 
                  
                }, 500);
              }
              objPair.win = false
            }
          });
        }
        objPair.num++;
        if(objPair.win) objPair.lvl -= 2;
        if(objPair.lvl === 0) {
            $win.classList.add("win-active");
            $win.textContent = `Всего ходов: ${objPair.num}`
        }
     
        console.log( objPair.lvl);
        document.querySelector(
          ".update-total"
        ).textContent = `Всего ходов: ${objPair.num}`;
      });
    });
  }
