const acc = document.querySelector("#accordion  ");
const panel = document.querySelector("#panel");
const icon = document.querySelector("#icon");


const acc1 = document.querySelector("#accordion1");
const panel1 = document.querySelector("#panel1");
const icon1 = document.querySelector("#icon1");



const acc2 = document.querySelector("#accordion2");
const panel2 = document.querySelector("#panel2");
const icon2 = document.querySelector("#icon2");



const acc3 = document.querySelector("#accordion3");
const panel3 = document.querySelector("#panel3");
const icon3 = document.querySelector("#icon3");



const acc4 = document.querySelector("#accordion4");
const panel4 = document.querySelector("#panel4");
const icon4 = document.querySelector("#icon4");



const acc5 = document.querySelector("#accordion5");
const panel5 = document.querySelector("#panel5");
const icon5 = document.querySelector("#icon5");


acc.addEventListener("click", function () {
    panel.classList.toggle("block");
    panel.classList.toggle("hidden");
    acc.classList.toggle("bg-light-color-3");
    acc.classList.toggle("bg-white");
    acc.classList.toggle("pb-6");
    icon.classList.toggle("rotate-180");
});


acc1.addEventListener("click", function () {
    panel1.classList.toggle("block");
    panel1.classList.toggle("hidden");
    acc1.classList.toggle("bg-light-color-3");
    acc1.classList.toggle("bg-white");
    acc1.classList.toggle("pb-6");
    icon1.classList.toggle("rotate-180");
});



acc2.addEventListener("click", function () {
    panel2.classList.toggle("block");
    panel2.classList.toggle("hidden");
    acc2.classList.toggle("bg-light-color-3");
    acc2.classList.toggle("bg-white");
    acc2.classList.toggle("pb-6");
    icon2.classList.toggle("rotate-180");
});



acc3.addEventListener("click", function () {
    panel3.classList.toggle("block");
    panel3.classList.toggle("hidden");
    acc3.classList.toggle("bg-light-color-3");
    acc3.classList.toggle("bg-white");
    acc3.classList.toggle("pb-6");
    icon3.classList.toggle("rotate-180");
});


acc4.addEventListener("click", function () {
    panel4.classList.toggle("block");
    panel4.classList.toggle("hidden");
    acc4.classList.toggle("bg-light-color-3");
    acc4.classList.toggle("bg-white");
    acc4.classList.toggle("pb-6");
    icon4.classList.toggle("rotate-180");
});



acc5.addEventListener("click", function () {
    panel5.classList.toggle("block");
    panel5.classList.toggle("hidden");
    acc5.classList.toggle("bg-light-color-3");
    acc5.classList.toggle("bg-white");
    acc5.classList.toggle("pb-6");
    icon5.classList.toggle("rotate-180");
});