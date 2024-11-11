const logForm = document.querySelector(".login-form");

logForm.addEventListener("submit", checkInfoLog);

function checkInfoLog(event) {
  // Останавливаем авто-перезагрузку страницыа
  event.preventDefault();

  // Извлекаем объект элементов формы из объекта form
  const { elements } = logForm;
  const email = elements.email.value.trim();
  const password = elements.password.value.trim();

  // Проверка на пустые поля
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }
  // Создаем объект с данными формы
  const formData = {
    email,
    password,
  };
  console.log(formData);

  // Очищаем форму
  logForm.reset();
}
// Надеюсь, комментарии вас не беспокоят!
// Это для себя, чтобы потом можно было вернуться и посмотреть.
