const containText = document.querySelectorAll(".contain-text");
function staffTextAnime() {
  containText.forEach((text) => {
    text.classList.toggle(
      "anime",
      window.pageYOffset > text.offsetTop - window.innerHeight * 0.6
    );
    console.log(text.offsetTop);
  });
  // window.pageYOffset > containText.offsetTop - window.innerHeight * 0.6 &&
  //   containText.classList.add("anime");
  // window.pageYOffset <
  //   containText.offsetTop - (window.innerHeight + containText.clientHeight) &&
  //   containText.classList.remove("anime");
  // /////window.pageYOffset <
  // /////  containText.offsetTop - (window.innerHeight + containText.clientHeight) &&
  // /////  console.log("cgjgj");
  // /////window.pageYOffset > containText.offsetTop + containText.clientHeight * 0.2 &&
  // /////containText.classList.remove("anime");
}

function scrolled() {
  staffTextAnime();
}

window.addEventListener("scroll", scrolled);
