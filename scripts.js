function openModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = src;
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

document.getElementById("imageModal").onclick = function(event) {
    if (event.target === this) {
        closeModal();
    }
};