//
const allSection = document.querySelectorAll("section");
const allLink = document.querySelectorAll("nav a");

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
const btnMode = document.getElementById("theme-toggle-button");
const htmlPage = document.querySelector("html");

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

/////                            open sideBar

const sideBarBtn = document.getElementById("settings-toggle");
const sideBar = document.getElementById("settings-sidebar");

sideBarBtn.addEventListener("click", function () {
  sideBar.classList.toggle("translate-x-full");
  sideBarBtn.classList.toggle("show");
});

////                    scroll to top button

const scrollToTopBtn = document.getElementById("scroll-to-top");
window.addEventListener("scroll", function () {
  if (this.scrollY > allSection[0].offsetTop) {
    scrollToTopBtn.classList.remove("opacity-0");
    scrollToTopBtn.classList.remove("invisible");
  } else {
    scrollToTopBtn.classList.add("opacity-0");
    scrollToTopBtn.classList.add("invisible");
  }
});
scrollToTopBtn.addEventListener("click", function () {
  location.href = "#hero-section";
});

///              handle     fonts

const myAllFontsBtn = document.querySelectorAll(".my-fonts button");

for (let i = 0; i < myAllFontsBtn.length; i++) {
  myAllFontsBtn[i].addEventListener("click", function () {
    for (let j = 0; j < myAllFontsBtn.length; j++) {
      myAllFontsBtn[j].classList.remove("active");
    }
    myAllFontsBtn[i].classList.add("active");
    const font = myAllFontsBtn[i].getAttribute("data-font");
    document.body.classList.remove(
      "font-cairo",
      "font-alexandria",
      "font-tajawal"
    );
    if (font === "alexandria") {
      document.body.classList.add("font-alexandria");
    } else if (font === "cairo") {
      document.body.classList.add("font-cairo");
    } else if (font === "tajawal") {
      document.body.classList.add("font-tajawal");
    }
  });
}
