let count = 0;

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let incrementBtn = document.getElementById("increment-btn");
let saveBtn = document.getElementById("save-btn");

incrementBtn.addEventListener("click", function () {
  count++;
  countEl.textContent = count;
});

saveBtn.addEventListener("click", function () {
  saveEl.textContent += " " + count + " -";
  count = 0;
  countEl.textContent = 0;
});
