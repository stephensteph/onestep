$(document).ready(function(){

  $('.slideshow_container').slick({
  		arrows: false,
  		dots: true,
  		autoplay: true,
  		draggable: false,
  		mobileFirst: true,
  		swipe: false,
  });

  var icons = $('#menu li');
  var h2 = $(".topNav h2");
  var tl = new TimelineLite();
  tl.from(h2, 1.2, {top:-100, opacity:0, autoAlpha:0});

  $('#toggle').click(function(){
  	$('#menu').fadeIn(1500);
  	$('.full_container').fadeOut(1500);
  	tl.to(h2, 5, {top:-100, opacity:0, autoAlpha:0})
  	.staggerFrom(icons, 1.2, {scale:0, rotation:-360, autoAlpha:0}, 0.3, "-=4");
  });

  $('#toggle_remove').click(function(){
  	tl.to(h2, 1.2, {top:0, visibility:'visible', opacity:1, autoAlpha:0});
  	$('#menu').fadeOut(1500);
  	$('.full_container').fadeIn(1500);
  });

});
