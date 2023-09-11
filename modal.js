// A modal em si
const modal = document.querySelector("#modal");

// O botão de Abrir Modal
const openModal = document.querySelector("#open-modal");

// O botão de Fechar Modal
const closeModal = document.querySelector("#close-modal");

const fade = document.querySelector("#fade");

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};


[openModal, closeModal, fade].forEach((el) => {
    el.addEventListener("click", ()=> toggleModal())
});