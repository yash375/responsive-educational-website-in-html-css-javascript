$('.owl-carousel').owlCarousel({
  loop:true,
  margin:16,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause:true,
  stagePadding: 50,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:true
      },
      1000:{
          items:3,
          nav:true,
          loop:true
      }
  }
})


function togglemenu()
{
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')

}


function loadalert()
{
    alert("Please use Desktop mode for mobile preview");
}
