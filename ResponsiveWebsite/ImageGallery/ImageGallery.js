let lightbox = document.getElementById('overlay')


let imgs = document.querySelectorAll('img')
let image = document.getElementById('lightImage')

let close = document.getElementById('close')


imgs.forEach(img =>
{
    img.addEventListener('click', (e) =>
    {
        console.log("clicked");
        image.src = img.src
        lightbox.classList.add('active')
        document.body.style.overflow = "hidden"
    })
})

close.addEventListener('click', () => {
    lightbox.classList.remove('active')
    document.body.style.overflow = "visible"
})
