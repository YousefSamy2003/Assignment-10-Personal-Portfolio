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
      localStorage.setItem("font", "alexandria");
    } else if (font === "cairo") {
      document.body.classList.add("font-cairo");
      localStorage.setItem("font", "cairo");
    } else if (font === "tajawal") {
      document.body.classList.add("font-tajawal");
      localStorage.setItem("font", "tajawal");
    }
  });
}

function getFontFromLocalStorage() {
  const font = localStorage.getItem("font");
  if (font === "alexandria") {
    document.body.classList.add("font-alexandria");
  } else if (font === "cairo") {
    document.body.classList.add("font-cairo");
  } else if (font === "tajawal") {
    document.body.classList.add("font-tajawal");
  }

  for (let i = 0; i < myAllFontsBtn.length; i++) {
    if (myAllFontsBtn[i].getAttribute("data-font") === font) {
      myAllFontsBtn[i].classList.add("active");
    } else {
      myAllFontsBtn[i].classList.remove("active");
    }
  }
}
getFontFromLocalStorage();

//          Navs and Tabs

const navsTabsButton = document.querySelectorAll("#portfolio-filters button");
const allCard = document.querySelectorAll(".portfolio-item");

for (let i = 0; i < navsTabsButton.length; i++) {
  navsTabsButton[i].addEventListener("click", function (e) {
    for (let j = 0; j < navsTabsButton.length; j++) {
      navsTabsButton[j].classList.remove(
        "active",
        "bg-linear-to-r",
        "from-primary",
        "to-secondary"
      );
    }
    navsTabsButton[i].classList.add(
      "active",
      "bg-linear-to-r",
      "from-primary",
      "to-secondary"
    );
    for (let x = 0; x < allCard.length; x++) {
      allCard[x].classList.add("hidden");
    }

    if (navsTabsButton[i].getAttribute("data-filter") === "all") {
      for (let z = 0; z < allCard.length; z++) {
        allCard[z].classList.remove("hidden");
      }
    } else if (navsTabsButton[i].getAttribute("data-filter") === "web") {
      for (let z = 0; z < allCard.length; z++) {
        if (allCard[z].getAttribute("data-category") === "web") {
          allCard[z].classList.remove("hidden");
        }
      }
    } else if (navsTabsButton[i].getAttribute("data-filter") === "design") {
      for (let z = 0; z < allCard.length; z++) {
        if (allCard[z].getAttribute("data-category") === "design") {
          allCard[z].classList.remove("hidden");
        }
      }
    } else if (navsTabsButton[i].getAttribute("data-filter") === "app") {
      for (let z = 0; z < allCard.length; z++) {
        if (allCard[z].getAttribute("data-category") === "app") {
          allCard[z].classList.remove("hidden");
        }
      }
    } else if (navsTabsButton[i].getAttribute("data-filter") === "ecommerce") {
      for (let z = 0; z < allCard.length; z++) {
        if (allCard[z].getAttribute("data-category") === "ecommerce") {
          allCard[z].classList.remove("hidden");
        }
      }
    }
  });
}

// carsoul

const nextBtn = document.getElementById("next-testimonial");
const prevBtn = document.getElementById("prev-testimonial");
const allCardTestimonial = document.querySelectorAll(".testimonial-card");
const widthCard = allCardTestimonial[0].offsetWidth;
const parentAllCard = document.getElementById("testimonials-carousel");
console.log(allCardTestimonial.length);

var count = 0;
nextBtn.addEventListener("click", function () {
  if (count < 3) {
    count++;
    update();
  } else {
    count = 0;
  }
});

prevBtn.addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = 3;
  }
  update();
});

function update() {
  parentAllCard.style.transform = `translateX(${widthCard * count}px)`;
}

const allCarouselIndicator = document.querySelectorAll(".carousel-indicator ");

for (let i = 0; i < allCarouselIndicator.length; i++) {
  allCarouselIndicator[i].addEventListener("click", function () {
    count = i;
    update();
  });
}
