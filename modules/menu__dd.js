export default function initMenuDd() {
  const linkDd = document.querySelectorAll(".menu__down");
  const servicosDd = document.querySelector(".servicos__dd");
  const servicos = document.querySelector(".servicos__bg");

  function handleFunction() {
    servicos.classList.toggle("ativo");
    servicosDd.classList.toggle("ativo");
  }

  linkDd.forEach((i) =>
    i.addEventListener("click", (e) => {
      e.preventDefault();
      handleFunction();
    })
  );
}
