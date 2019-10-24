window.onload = function() {
    // mobile  menu
    let menu = document.getElementById('header__menu-burger');
    let showMenu = document.getElementById('mobile-menu');
    menu.addEventListener('click', openMenu);

    function openMenu() {
        let span1 = document.getElementById('line-1');
        let span2 = document.getElementById('line-2');
        let span3= document.getElementById('line-3');
        showMenu.classList.toggle('mobile-menu_show');
        span1.classList.toggle('line-1');
        span2.classList.toggle('line-2-hidden');
        span3.classList.toggle('line-3');
        // no scroll
        if(showMenu.classList.contains('mobile-menu_show')) {
          document.body.style.overflowY = 'hidden';
        }
        else {
          document.body.style.overflowY = 'scroll';
        }
    }  
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////


      let contentImage = $(".content");
      let image = $(".content__image-item2");
  
     function showAllObjects (object) {
             object.fadeIn(900);
    }
   
    function moving (object, speed) {
      contentImage.on('mousemove', function(event) {
            var X = Math.floor((event.pageX)/speed-20) + "px";
            var Y = Math.floor((event.pageY)/speed) + "px";	
            object.css('transform', 'translate('+X+' , '+Y+')');
        });
    }
    
    function moveAll (object) {
        moving($(object[0]),12);
    }
   
    showAllObjects(image);
    moveAll(image);
   
////////////////////////////////////////////////////
////////////////////////////////////////////////////
   


    //  slick - - slider
    $('.slider__items').slick({
      nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
      prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      adaptiveHeight: true,
      variableWidth: true,

      responsive: [{
          breakpoint: 600,
          settings: {
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: true,
            centerPadding: '10%',
            dotsClass: "my-dots",
          }
        },

        {
          breakpoint: 320,
          settings: {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '20px',
            dotsClass: "my-dots",
          }
        },
      ]
    });


    /////////  init  plugin  wow.js  /////////////////
    new WOW().init();

}