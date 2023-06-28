const navbar = document.getElementById("navbar");
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");
    if (!scrolled) {
      navbar.style.transform = "translateY(-70px)";
    }
    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add("top");
    scrolled = false;
  }
};

// Smooth Scrolling

document.querySelectorAll("#navbar a, .btn").forEach(function (element) {
  element.addEventListener("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();

      const hash = this.hash;
      const targetElement = document.querySelector(hash);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 100;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  });
});
