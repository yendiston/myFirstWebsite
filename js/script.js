const lightbox = document.getElementById('outer-lightbox');
const image1 = document.querySelectorAll('.img-grid-item'); //MDN documents helped a lot with udnerstanding querySelector
image1.forEach(image => {
    image.addEventListener('click', e => { //Click event for the image grid to create the lightbox effect
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src
        img.style.backgroundRepeat = 'no-repeat'; //This did not fix it, the while loop below fixed the problem.
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    });
});
lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active'); //removes the active lightbox dim background so the page returns to normal
})
console.log(image1); //this was to test if the second Const was working properly