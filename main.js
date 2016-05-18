$(document).ready(function() {
   var option = $('.option');
   $(option).hide();
   //$('.phone').css('transform', 'rotateY(0deg) rotateX(0deg)');
});

$('#menu-btn').on('click', function() {
   $(this).toggleClass('multiply');
   $('.option').slideToggle("fast");
   $('.pic').slideToggle("fast");
});

$('.profile-pic').on('click', function() {
   $('.user-menu').toggleClass('um-height');
});
