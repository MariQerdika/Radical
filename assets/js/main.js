$(document).ready(function(){
  $(".menu_li").click(function(){
    $(this).addClass("active");
    $(".menu_li").not(this).removeClass("active");
  });
});


$(document).ready(function(){
  $('.toggle').click(function(){
    $('.menu_list').toggleClass('active');
  });
});










  jQuery(document).ready(function(){
  "use strict"
  $('.slider').ripples({
    dropRadius: 15,
    pertuarbance: 0.01,
  });


var typed = new Typed('.text', {
  strings: ["Front-end Development", "Back-end development"],
  typeSpeed: 60,
  loop:true,
});


$(window).scroll(function(){
  var top = $(window).scrollTop();
  if(top>=60){
    $("header").addClass('secondary');
  }
  else if ($("header").hasClass('secondary')){
           $("header").removeClass('secondary');
  }
  });

$('.work').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
  enabled: true
  }
});



var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    boolean:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsiveClass:true,
    
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,  
        },
        1200:{
            items:3,  
        }
    }
});




  });



var button = document.getElementById("button")
button.addEventListener('click', function(){
  swal("Your text here:", {
  content: "input",
})
.then((value) => {
  swal(`You typed: ${value}`);
});
})


