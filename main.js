
const navBtn = document.querySelector(".nav-btn");
const menu = document.querySelector(".menu");

navBtn.addEventListener("click", () => {

  menu.classList.toggle("menu-open");
});


const openModalBtn = document.querySelector(".video-btn");
const modal = document.querySelector(".modal");
const video = document.querySelector("video");


openModalBtn.addEventListener("click", () => {
  modal.style.animation = "fadeIn 500ms";
  modal.showModal()
  video.play();
});


modal.addEventListener("click", e => {

  const size = modal.getBoundingClientRect();
  if(
      e.clientX < size.left ||
      e.clientX > size.right ||
      e.clientY < size.top ||
      e.clientY > size.bottom
  ) {
    modal.style.animation = "fadeOut 500ms forwards";
    modal.addEventListener("animationend", close)
    function close() {
      modal.close();
      modal.removeEventListener("animationend", close);
    }
    video.pause();
  }
});