
var screen = window.innerWidth;


var view = screen <= 600 ? 1 : screen <= 992 ? 4 :  5


const swip = (view, space, data) =>{

    return {
        slidesPerView: view,
        spaceBetween: space,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: data[0],
          clickable: true,
        },
        navigation: {
          nextEl: data[1],
          prevEl: data[2],
        },
      }

}

var swiper = new Swiper(".mySwiper", swip(1, 0, [".swiper-pagination", ".swiper-button-next", ".swiper-button-prev" ]) );


var swiper1 = new Swiper(".mySwiper1", swip(view, 80, [".swiper-pagination1", ".nexts", ".prevs" ]));


  window.addEventListener('resize', () => {

      var screen = window.innerWidth;
      let view = null

      if(screen <= 600){

          view = 1

      } else if(screen <= 992 ){

           view = 4

      } else{ 

        view = 5
      }

      new Swiper(".mySwiper1", swip(view, 30, [".swiper-pagination1", ".nexts", ".prevs" ]));
  })



/*STARTS OF COLLAPSE PANEL*/
var panels = document.querySelectorAll(".panel-list")


panels.forEach( element => {
  element.addEventListener('click', e => {
    
    var header = e.target.closest(".panel-header");

    if( header ){
        var body = header.nextElementSibling;
        body.style.maxHeight = body.style.maxHeight ? "" : body.scrollHeight + "px"
    }

  })
})

/*END OF COLLAPSE PANEL*/




/*STARTS OF MOBILE NAVIGATION TOGGLE*/
var navIcon = document.querySelector("#nav-icon");
var navigation = document.querySelector(".navigation");
var close = document.querySelector(".fa.times");


navIcon.addEventListener("click", function() {
    
    navigation.classList.add("navigation-show")
})


close.addEventListener("click", function() {
    
    navigation.classList.remove("navigation-show")
})

/*END OF MOBILE NAVIGATION TOGGLE*/







/*STARTS OF HEADER SCROLL EFFECT*/

if( !window.location.pathname.endsWith("api.html") ){


  window.scrollTo(0,0);

  window.addEventListener("scroll", function() {

      let header = document.querySelector(".header")

      if (window.scrollY > 120){
          header.classList.add("header-colored")
      } else{
        header.classList.remove("header-colored")
      }
  })

}


/*END OF HEADER SCROLL EFFECT*/










