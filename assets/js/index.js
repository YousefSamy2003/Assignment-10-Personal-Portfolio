//
allSection = document.querySelectorAll("section");
allLink = document.querySelectorAll("nav a");

window.addEventListener("scroll", function () {
  scrollSpy();
});

function scrollSpy() {
  var storeSection;
  for (let i = 0; i < allSection.length; i++) {
    if (this.scrollY >= allSection[i].offsetTop) {
      storeSection = allSection[i].getAttribute("id");
    }
  }
  for (let i = 0; i < allLink.length; i++) {
    if (allLink[i].getAttribute("href") == "#" + storeSection) {
      allLink[i].classList.add("active");
    } else {
      allLink[i].classList.remove("active");
    }
  }
}
scrollSpy();
