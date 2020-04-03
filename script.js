const modalOverlay = document.querySelector(".modal-overlay");
const cursos = document.querySelectorAll(".curso");
const modal = document.querySelector(".modal");

for (let curso of cursos) {
  curso.addEventListener("click", () => {
    const cursoId = curso.getAttribute("id");
    modalOverlay.classList.add("active");
    modalOverlay.querySelector(
      "iframe"
    ).src = `https://www.rocketseat.com.br/${cursoId}`;
  });
}
if (!modal.classList.contains(".maximize")) {
  document.querySelector(".maximize-modal").addEventListener("click", () => {
    modal.classList.add("maximize");
  });
}

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modalOverlay.querySelector("iframe").src = "";
  modal.classList.remove("maximize");
});
