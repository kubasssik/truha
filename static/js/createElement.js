//Создает тег и класс
export function createElement(tag, cn, dataSet) {
  const element = document.createElement(tag);
  element.classList.add(cn);
  element.dataset.card = dataSet;
  return element;
}