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

//                 change Theme And Store in local storage
btnMode = document.getElementById("theme-toggle-button");
htmlPage = document.querySelector("html");

function storeTheme() {
  if (localStorage.getItem("theme") == "light") {
    htmlPage.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
    htmlPage.classList.add("dark");
  }
}
btnMode.addEventListener("click", function () {
  htmlPage.classList.toggle("dark");
  if (localStorage.getItem("theme") == "dark") {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});
storeTheme();

///// open sideBar

sideBarBtn = document.getElementById("settings-toggle");
sideBar = document.getElementById("settings-sidebar");

sideBarBtn.addEventListener("click", function () {
  sideBar.classList.toggle("translate-x-full");
  sideBarBtn.classList.toggle("show");
});
