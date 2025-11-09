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
  nav.classList.remove("closing");
  links.classList.add("island");
  nav.classList.add("dynamic");
}

function dynamicIslandRe() {
  const nav = document.querySelector("nav");
  const links = document.querySelector("ul.links");
  nav.classList.add("closing");
  nav.classList.remove("dynamic");

  setTimeout(() => {
    links.classList.remove("island");
  }, 500);
}

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
