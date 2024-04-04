function otevriHAM(){
    const hammenu = document.querySelector('.HAM--menu')
    hammenu.style.display = 'block'
    
}



function zavritHAM(){
    const hammenu = document.querySelector('.HAM--menu')
    hammenu.style.display = 'none'
}

// window.addEventListener('resize', function() {
//     const hammenu = document.querySelector('.HAM--menu')
//     hammenu.style.display = 'none'
// });

window.addEventListener('resize', function() {
    const hammenu = document.querySelector('.HAM--menu')
    if (window.innerWidth > 750) {
        
        hammenu.style.display = 'flex'
    }
    else{
        hammenu.style.display = 'none'
    }
});