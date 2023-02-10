const hbg = document.querySelector("#hbg");
const nav = document.querySelector("header nav");
hbg.addEventListener("click", function (e) {
  //manipulation de classe = classList
  nav.classList.toggle("open");
  this.classList.toggle("open");
});
