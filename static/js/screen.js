//Проверка ориентации
export function checkOrientation() {
  document.querySelector(".error").style.display = "none";
  if (screen.orientation.type === "portrait-primary") {
    document.querySelector(".error").style.display = "block";
  }
}
