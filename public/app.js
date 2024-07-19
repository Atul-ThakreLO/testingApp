window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  const blob = document.querySelector(".blob");
  setTimeout(() => {
    loader.style = "display: none;";
  }, 2500);
});
// ///////////////////////////////////////////////////////////

const heightAmount = document.querySelector(".heightAmount");
function heightAmountCalc() {
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let amount = (document.documentElement.scrollTop / height) * 100;
  heightAmount.style = `width: ${amount}%`;
}

// ///////////////////////////////////////////////////////////

// //////////////////////////////////////////////////

const header = document.querySelector("header");
const listService = document.querySelector(".list-services");
const links = document.querySelector(".links");
const cancel = document.querySelector(".cross");
const menuButton = document.querySelector(".button-m");
function headActive() {
  header.classList.toggle("headActive", window.pageYOffset > 80);
  listService.classList.toggle("listActive", window.pageYOffset > 80);
  links.classList.toggle("linkActive",  window.pageYOffset > 80)
  // if(window.pageYOffset < 755) {
}

// /////////////////////////////////////////////////////////

menuButton.addEventListener("click", () => {
    links.classList.toggle("links-display");
    cancel.classList.add("display-cross");
});

// //////////////////////////////////////////////////////////
links.addEventListener("click", (e) => {
  if (e.target.closest(".service-btn")) {
    console.log("Got clicked" + e.target.innerText);
    listService.classList.toggle("list-services-display");
  } else {
    console.log("rem")
    if(listService.classList.contains("list-services-display")) {
      listService.classList.remove("list-services-display");
      console.log("removed")
    }
  }
});

cancel.addEventListener("click", () => {
  links.classList.remove("links-display");
  cancel.classList.remove("display-cross")
})
// const serviceButton = document.querySelector(".service-btn");
// serviceButton.addEventListener("click", () => {

// })
// //////////////////////////////////////////////////////////////

function scrolled() {
  // console.log(window.pageYOffset);
  heightAmountCalc();
  headActive();
  // console.log(document.documentElement.scrollHeight)
}

window.addEventListener("scroll", scrolled);

let date = new Date().getFullYear();

document.querySelector(".copyright").innerHTML = `© ${date} Neuheit All Rights Reserved.`