const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

modal.addEventListener('innerHTML', () =>{
    modal.innerHTML.close();
})

openModal.addEventListener('click', () =>{
    modal.showModal();
})

closeModal.addEventListener('click', () =>{
    modal.close();
})

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active')
}

window.addEventListener("scroll", function(){
    let reveals =
    document.querySelectorAll(".reveal")
    reveals.forEach(function(oneBlok){
    let windowHeight = window.innerHeight
    let revealTop = oneBlok.getBoundingClientRect().top
    let revelPoint = 100
    if (revealTop < windowHeight - revelPoint){
    19
    oneBlok.classList.add("active")
    } else {
    oneBlok.classList.remove("active")
    }
    })
    });

    window.addEventListener("scroll", function(){
        let revealsFast =
        document.querySelectorAll(".reveal-fast")
        revealsFast.forEach(function(oneBlok){
        let windowHeight = window.innerHeight
        let revealTop = oneBlok.getBoundingClientRect().top
        let revelPoint = 100
        if (revealTop < windowHeight - revelPoint){
        19
        oneBlok.classList.add("active")
        } else {
        oneBlok.classList.remove("active")
        }
        })
    });
    



