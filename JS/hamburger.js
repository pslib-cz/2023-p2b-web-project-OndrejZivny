function otevriHAM(){
    const hammenu = document.querySelector('.hammenu')
    hammenu.style.display = 'flex'
}

function zavritHAM(){
    const hammenu = document.querySelector('.hammenu')
    hammenu.style.display = 'none'
}

window.addEventListener('resize', function() {
    const hammenu = document.querySelector('.hammenu')
    hammenu.style.display = 'none'
});