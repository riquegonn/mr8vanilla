export default function initAccordion() {
  const accordionlist = document.querySelectorAll(".faq__ul dt");

  accordionlist[0].classList.add("ativo");
  accordionlist[0].nextElementSibling.classList.add("ativo");

  function activeAccordion() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }

  accordionlist.forEach((i) => {
    i.addEventListener("click", activeAccordion);
  });
}
