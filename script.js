const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var fixed = document.querySelector("#fixed-image")
var elemC = document.querySelector("#elem-con")
var elem = document.querySelectorAll(".elem")
var intro = document.querySelector("#intro")
var menu = document.querySelector("nav h3")
var fixedmenucol = document.querySelector("#fixed-scr")
var navimg = document.querySelector("nav img")
 var introz = document.querySelector("#intro").childNodes
 console.log(introz)
var plusone = 0
function fxdimg(){
    elemC.addEventListener("mouseenter",function(){
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave",function(){
        fixed.style.display = "none"
    })
    elem.forEach(function(e){
       e.addEventListener("mouseenter",function(){
       var image = e.getAttribute("ran-img")
       fixed.style.backgroundImage = `url(${image})`
       })
    })
}
function swiperjs(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
      });
}
function men(){
    menu.addEventListener("click",function(){
        if (plusone==0) {
            fixedmenucol.style.top = 0 
            
            plusone = 1
        }
        else{
            fixedmenucol.style.top = "-100%"
            plusone = 0
        }
    
    })
}
 async function intr(){
    setTimeout(() => {
        intro.style.top = "-100%"
    }, 3000);
        setTimeout(() => {
            introz[0].style.display = "block";
        }, 200);
        setTimeout(() => {
            introz[0].style.display = "none";
        }, 1000);
        setTimeout(() => {
            introz[1].style.display = "block";
        }, 1200);
        setTimeout(() => {
            introz[1].style.display = "none";
        }, 2000); 
        setTimeout(() => {
            introz[2].style.display = "block";
        }, 2200); 
    }
intr()
men()
fxdimg()
swiperjs()