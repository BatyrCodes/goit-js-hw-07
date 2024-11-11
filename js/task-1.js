const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const items = item.querySelector("h2").textContent;
  const allElements = item.querySelectorAll("li").length;
  console.log(items);
  console.log(allElements);
});
