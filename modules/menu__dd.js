export default function initMenuDd() {
  const ddLi = document.querySelectorAll(".menu__dd-li");
  const ddContainer = document.querySelectorAll(".menu__dd-bg");
  const ddContainerUl = document.querySelector(".menu__dd-ul");

  function activeTab(i) {
    ddContainer.forEach((s) => {
      s.classList.remove("ativo");
    });
    ddContainer[i].classList.add("ativo");
  }

  function styleTab(i) {
    ddLi.forEach((s) => {
      s.classList.remove("ativo");
    });
    ddLi[i].classList.add("ativo");
  }

  ddLi.forEach((iMenu, index) => {
    iMenu.addEventListener("click", () => {
      activeTab(index);
      styleTab(index);
    });
  });

  function clicouFora() {
    ddContainer.forEach((s) => {
      s.classList.remove("ativo");
    });
    ddLi.forEach((i) => {
      i.classList.remove("ativo");
    });
  }

  document.addEventListener("mousedown", (e) => {
    if (!ddContainerUl.contains(e.target)) {
      clicouFora();
    }
  });
}
