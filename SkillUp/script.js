const heroSection = document.querySelector(".top-div");
const footerElem = document.querySelector(".footer");

const scroollElement = document.createElement("div");
scroollElement.classList.add("scrollTop-style");

scroollElement.innerHTML = `<i class="fa-solid fa-arrow-up scroll-top"></i>`;

footerElem.after(scroollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};

scroollElement.addEventListener("click", scrollTop);

// Login and call now

document.addEventListener("click", () => {
  let Login = document.getElementById("LoginNow");
  Login.addEventListener("click", () => {
    let LoginForm = document.getElementsByClassName("form");
    for (let i = 0; i < LoginForm.length; i++) {
      LoginForm[i].style.display = "block";
    }
  });
  let crossmark = document.getElementById("crossMark");
  crossmark.addEventListener("click", () => {
    let LoginForm = document.getElementsByClassName("form");
    for (let i = 0; i < LoginForm.length; i++) {
      LoginForm[i].style.display = "none";
    }
  });
});

// Burger Menu

document.addEventListener("click", function () {
  const toggleButton = document.getElementById("toggleContent");
  const burgerContent = document.getElementById("burgerContent");
  const hideBurgerIcon = document.getElementById("hideBurger");

  toggleButton.addEventListener("click", function () {
    let hide = document.getElementsByClassName("hide");
    for (let i = 0; i < hide.length; i++) {
      hide[i].style.display = "none";
    }
    burgerContent.style.display = "block";
  });

  hideBurgerIcon.addEventListener("click", function () {
    let hide = document.getElementsByClassName("hide");
    for (let i = 0; i < hide.length; i++) {
      hide[i].style.display = "block";
    }
    burgerContent.style.display = "none";
  });
});

// Login for small devices

document.addEventListener("click", () => {
  let smallLogin = document.getElementById("smallLogin");
  smallLogin.addEventListener("click", () => {
    let Loginform = document.getElementsByClassName("form");
    for (let i = 0; i < Loginform.length; i++) {
      Loginform[i].style.display = "block";
    }
  });
});

// Application

let EnquiryNow = document.getElementById("EnquiryNow");
EnquiryNow.addEventListener("click", () => {
  let details = document.getElementsByClassName("details");
  for (let i = 0; i < details.length; i++) {
    details[i].style.display = "block";
  }
});

let crossmark = document.getElementById("crossMark2");
crossmark.addEventListener("click", () => {
  let details = document.getElementsByClassName("details");
  for (let i = 0; i < details.length; i++) {
    details[i].style.display = "none";
  }
});
