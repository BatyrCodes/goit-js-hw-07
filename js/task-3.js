const inputName = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

inputName.addEventListener("input", listenerInput);
function listenerInput(value) {
  const trimValue = inputName.value.trim();
  if (trimValue) {
    nameOutput.textContent = trimValue;
  } else {
    nameOutput.textContent = "Anonymous";
  }
}

const taskH1 = document.querySelector("h1");
taskH1.classList.add("texh1");
