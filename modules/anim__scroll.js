export default function initAnimScroll() {
  const target = document.querySelectorAll("[data-anime]");
  const animationClass = "animate";

  function animeScroll() {
    const windowTop = window.scrollY + (window.innerHeight * 3) / 4;
    target.forEach(function (e) {
      if (windowTop > e.offsetTop) {
        e.classList.add(animationClass);
      }
    });
  }

  window.addEventListener("scroll", animeScroll);
  window.Animation;
}
