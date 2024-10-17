const galleryImages = document.querySelectorAll('.gallery-img')
const modal = document.getElementById('gallery-modal')
const modalImage = document.getElementById('modal-image')
const closeModal = document.getElementById('close-modal')

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        modalImage.src = img.src // Set the modal image source
        modal.classList.add('show') // Add 'show' class to open modal
    })
})

closeModal.addEventListener('click', () => {
    modal.classList.remove('show') // Remove 'show' class to close modal
})

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show') // Remove 'show' class to close modal
    }
})

window.onload = function() {
    modal.classList.remove('show') // Ensure modal is hidden on load
}
