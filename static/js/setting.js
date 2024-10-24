//Управление
export let objPair = {
    a: "", //Масть первой карты
    b: "", //Масть второй карты
    num: 0, //Нумерация
    targetFirst: null, //Первая карта
    targetLast: null, //Вторая карта
    click: false, //Проверка на повторый клик
    flag: false, //Заполнен весь обЪект
    reset: function resetFunc() {
      objPair.a = "";
      objPair.b = "";
      objPair.flag = false;
      },
      lvl: 48,
      win: false,
  };