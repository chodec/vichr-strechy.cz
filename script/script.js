const galleryOverlay = document.createElement('div')
galleryOverlay.classList.add('gallery-overlay')
galleryOverlay.innerHTML = `
    <span class="close-overlay">&times;</span>
    <div class="gallery-images"></div>
`
document.body.appendChild(galleryOverlay)

const closeOverlay = document.querySelector('.close-overlay')
const galleryImages = document.querySelector('.gallery-images')

document.querySelectorAll('.card').forEach((card, index) => {
    card.addEventListener('click', () => {
        const galleryId = `#gallery${index + 1}`
        const gallery = document.querySelector(galleryId)

        galleryImages.innerHTML = gallery.innerHTML
        galleryOverlay.classList.add('active')
    })
})

closeOverlay.addEventListener('click', () => {
    galleryOverlay.classList.remove('active')
})
