window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50 && !nav.classList.contains("sticky")) {
    nav.classList.add("sticky");
    nav.classList.add("animation");
  } else if (window.scrollY <= 50 && nav.classList.contains("sticky")) {
    nav.classList.remove("sticky");
    nav.classList.remove("animation");
  }
});

function dynamicIsland() {
  const nav = document.querySelector("nav");
  const links = document.querySelector("ul.links");
  const btn = document.querySelector(
    "nav > .sm-screen-nav > div.menu-toggle > button.icon"
  );
  btn.classList.remove("display");
  nav.classList.remove("sm-expand");
  links.classList.remove("expand");

  setTimeout(() => {
    nav.classList.remove("closing");
  }, 400);

  links.classList.add("island");
  nav.classList.add("dynamic");
}

function dynamicIslandRe() {
  const nav = document.querySelector("nav");
  const links = document.querySelector("ul.links");
  nav.classList.add("closing");
  nav.classList.remove("dynamic");
  const btn = document.querySelector(
    "nav > .sm-screen-nav > div.menu-toggle > button.icon"
  );

  setTimeout(() => {
    links.classList.remove("island");
    btn.classList.add("display");
  }, 500);
}

document
  .querySelector("nav > .sm-screen-nav > div.menu-toggle > button.icon")
  .addEventListener("click", function () {
    const nav = document.querySelector("nav");
    const links = document.querySelector("ul.links");
    nav.classList.toggle("sm-expand");
    setTimeout(() => {
      links.classList.toggle("expand");
    }, 500);
  });

setTimeout(dynamicIslandRe, 1000);

setInterval(function () {
  const nav = document.querySelector("nav");
  const links = document.querySelector("ul.links");
  if (
    !nav.classList.contains("dynamic") &&
    !links.classList.contains("island")
  ) {
    dynamicIsland();
  }
}, 10000);
setInterval(function () {
  if (window.innerWidth <= 575) {
    const i = document.querySelectorAll(
      "footer div.social-icons > div.icon > i"
    );
    i.forEach(function (iE) {
      iE.classList.remove("fa-xl");
      iE.classList.add("fa-lg");
      return;
    });
  } else if (window.innerWidth > 575) {
    const i = document.querySelectorAll(
      "footer div.social-icons > div.icon > i"
    );
    i.forEach(function (iE) {
      iE.classList.remove("fa-lg");
      iE.classList.add("fa-xl");
      return;
    });
  } else {
    return;
  }
}, 300);
