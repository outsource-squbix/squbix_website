  $(window).scroll(function() {
  if ($(this).scrollTop() > 0) {
    $('.topnav').hide();
  } else {
    $('.topnav').show();
  }
});

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

// $('#myCarousel').carousel({
//   interval: 3000,
// })

AOS.init();
  

function myFunction() {
  document.getElementById("myLink").disabled = true;
}
