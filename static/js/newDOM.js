const root = document.querySelector(".root");
//Создлает новый дом
 export function createNewDOM() {
    const box = document.querySelectorAll(".box");
 
    //Клонирование root
    const clonedElement = root.cloneNode(true);
    
    // Теперь это массив DOM-элементов
    const cloneArr = Array.from(clonedElement.children);
    
    //удаляет дом- карты
    box.forEach((element) => {
      const parent = element.parentNode;
      parent.removeChild(element);
    });
    
    // Перемешанный массив
    function shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }
    
    //Новый DOM
    const newDOM = shuffle(cloneArr);
    newDOM.map( newCard => root.appendChild(newCard)); 
}

