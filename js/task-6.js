function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");
createButton.classList.add("firstBtn");
destroyButton.classList.add("secondBtn");
// Функция для создания elements and boxes
function createBoxes(amount) {
  const elements = [];
  for (let i = 0; i < amount; i++) {
    const boxes = document.createElement("div");
    const size = 30 + i * 10; // Размеры увеличиваются на 10px каждый новый елемент
    boxes.style.width = `${size}px`;
    boxes.style.height = `${size}px`;
    boxes.style.backgroundColor = getRandomHexColor();
    elements.push(boxes);
  }
  boxesContainer.append(...elements);
}

// Функция для очистко!
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const amount = parseInt(input.value, 10); // Получаем значение из input

  // Проверяем, что значение в пределах от 1 до 100
  if (amount >= 1 && amount <= 100) {
    destroyBoxes(); //Тогда удаляем старые элементы, если они есть
    createBoxes(amount); // Если есть елемнт то тогда создаем их
    input.value = ""; // Очищаем поле ввода после того выполнилось действие
  } else {
    alert("Please enter a number between 1 and 100"); // Предупреждение
  }
});
// Обработчик клика на кнопку Destroy
destroyButton.addEventListener("click", destroyBoxes); // Удаляем все элементы в контейнере
