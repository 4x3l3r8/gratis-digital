import React from "react";

var openmodal = document.querySelectorAll(".modal-open");
for (var i = 0; i < openmodal.length; i++) {
  openmodal[i].addEventListener("click", function (event) {
    event.preventDefault();
    toggleModal();
  });
}

// const overlay = document.querySelector(".modal-overlay");
// overlay.addEventListener("click", toggleModal);

var closemodal = document.querySelectorAll(".modal-close");
for (var j = 0; j < closemodal.length; j++) {
  closemodal[i].addEventListener("click", toggleModal);
}

document.onkeydown = function (evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
    isEscape = evt.key === "Escape" || evt.key === "Esc";
  } else {
    isEscape = evt.keyCode === 27;
  }
  if (isEscape && document.body.classList.contains("modal-active")) {
    toggleModal();
  }
};

function toggleModal() {
  const body = document.querySelector("body");
  const modal = document.querySelector(".modal");
  modal.classList.toggle("opacity-0");
  modal.classList.toggle("pointer-events-none");
  body.classList.toggle("modal-active");
  //   console.log("Modal active")
}

const Modal = ({ children, visible, onClose }) => {
  // if (!visible) return null;

  const handleOnBackDropClick = (e) => {
    if (e.target.id === "backdrop") onClose && onClose();
  };

  return (
    <div
      id="backdrop"
      onClick={handleOnBackDropClick}
      className={`${
        visible ? "opacity-100 block" : "opacity-0 hidden"
      } fixed transition-all duration-200 inset-0 overflow-y-auto overflow-x-hidden items-center justify-center z-[100] z- bg-transparent bg-opacity-50 backdrop-blur-md`}
    >
      {children}
    </div>
  );
};

export default Modal;
