// A modal em si
const modalEmail = document.querySelector("#modal-email");

// O botão de Abrir Modal
const openModalEmail = document.querySelector("#open-modal-email");

// O botão de Fechar Modal
const closeModalEmail = document.querySelector("#close-modal-email");

const fadeEmail = document.querySelector("#fade-email");

const toggleModalEmail = () => {
    modalEmail.classList.toggle("hide-email");
    fadeEmail.classList.toggle("hide-email");
};


[openModalEmail, closeModalEmail, fadeEmail].forEach((el) => {
    el.addEventListener("click", ()=> toggleModalEmail())
});