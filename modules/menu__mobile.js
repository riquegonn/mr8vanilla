export default function initMenuMobile() {
  const abrirModal = document.querySelector("[data-modal='abrir']");
  const fecharModal = document.querySelector("[data-modal='fechar']");
  const containerModal = document.querySelector("[data-modal='menu']");
  const linkModal = document.querySelectorAll(".header__mobile li a");
  console.log(linkModal);

  function toggleModal(e) {
    e.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function clicouNoLink() {
    containerModal.classList.remove("ativo");
  }

  function clicouFora(e) {
    if (e.target === containerModal) {
      toggleModal(e);
    }
  }

  [abrirModal, fecharModal].map((e) =>
    e.addEventListener("click", toggleModal)
  );
  containerModal.addEventListener("click", clicouFora);
  linkModal.forEach((i) => i.addEventListener("click", clicouNoLink));
}
