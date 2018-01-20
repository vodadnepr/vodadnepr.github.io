var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 4000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});


var valueElement = document.getElementById('value');

var start     = 0;
var end       = 100;
var duration  = 1000000; // In milliseconds (divide by 1000 to get seconds).
var framerate = 10000;    // In milliseconds (divide by 1000 to get seconds).

var toAdd = ( ( end - start ) * framerate ) / duration;

var interval = setInterval(function() {
  var currentValue = parseFloat(valueElement.innerHTML);
  
  if (currentValue < end) { //If number bigger than end value - +1
    clearInterval(interval);
    return;
  }
  
  valueElement.innerHTML = (!isNaN(currentValue) == true ? currentValue + toAdd : toAdd);
}, framerate);

jQuery(document).ready(function ($) {

  
  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  
  $('#slider').css({ width: slideWidth, height: slideHeight });
  
  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  
    $('#slider ul li:last-child').prependTo('#slider ul');

    // setInterval(function () {
    //     moveRight();
    // }, 5000);

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({

            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});    


$(document).ready(function(){
  // options
  var speed = 500; //transition speed - fade
  var autoswitch = true; //auto slider options
  var autoswitch_speed = 10000; //auto slider speed
  
  // add first initial active class
  $(".slide").first().addClass("active");
  
  // hide all slides
  $(".slide").hide;
  
  // show only active class slide
  $(".active").show();
  
  // Next Event Handler
  $('#next').on('click', nextSlide);// call function nextSlide
  
  // Prev Event Handler
  $('#prev').on('click', prevSlide);// call function prevSlide
  
  // Auto Slider Handler
  if(autoswitch == true){
    setInterval(nextSlide,autoswitch_speed);// call function and value 4000
  }
  
  // Switch to next slide
  function nextSlide(){
    $('.active').removeClass('active').addClass('oldActive');
    if($('.oldActive').is(':last-child')){
      $('.slide').first().addClass('active');
    } else {
      $('.oldActive').next().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  }
  
  // Switch to prev slide
  function prevSlide(){
    $('.active').removeClass('active').addClass('oldActive');
    if($('.oldActive').is(':first-child')){
      $('.slide').last().addClass('active');
    } else {
      $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  }
});

$(document).ready(function(){
  // options
  var speed = 500; //transition speed - fade
  var autoswitch = true; //auto slider options
  var autoswitch_speed = 10000; //auto slider speed
  
  // add first initial active class
  $(".slide2").first().addClass("active2");
  
  // hide all slides
  $(".slide2").hide;
  
  // show only active class slide
  $(".active2").show();
  
  // Next Event Handler
  $('#next2').on('click', nextSlide);// call function nextSlide
  
  // Prev Event Handler
  $('#prev2').on('click', prevSlide);// call function prevSlide
  
  // Auto Slider Handler
  if(autoswitch == true){
    setInterval(nextSlide,autoswitch_speed);// call function and value 4000
  }
  
  // Switch to next slide
  function nextSlide(){
    $('.active2').removeClass('active2').addClass('oldActive2');
    if($('.oldActive2').is(':last-child')){
      $('.slide2').first().addClass('active2');
    } else {
      $('.oldActive2').next().addClass('active2');
    }
    $('.oldActive2').removeClass('oldActive2');
    $('.slide2').fadeOut(speed);
    $('.active2').fadeIn(speed);
  }
  
  // Switch to prev slide
  function prevSlide(){
    $('.active2').removeClass('active2').addClass('oldActive2');
    if($('.oldActive2').is(':first-child')){
      $('.slide2').last().addClass('active2');
    } else {
      $('.oldActive2').prev().addClass('active2');
    }
    $('.oldActive2').removeClass('oldActive2');
    $('.slide2').fadeOut(speed);
    $('.active2').fadeIn(speed);
  }
});

$(document).ready(function(){
  // options
  var speed = 500; //transition speed - fade
  var autoswitch = true; //auto slider options
  var autoswitch_speed = 10000; //auto slider speed
  
  // add first initial active class
  $(".slide3").first().addClass("active3");
  
  // hide all slides
  $(".slide3").hide;
  
  // show only active class slide
  $(".active3").show();
  
  // Next Event Handler
  $('#next3').on('click', nextSlide);// call function nextSlide
  
  // Prev Event Handler
  $('#prev3').on('click', prevSlide);// call function prevSlide
  
  // Auto Slider Handler
  if(autoswitch == true){
    setInterval(nextSlide,autoswitch_speed);// call function and value 4000
  }
  
  // Switch to next slide
  function nextSlide(){
    $('.active3').removeClass('active3').addClass('oldActive3');
    if($('.oldActive3').is(':last-child')){
      $('.slide3').first().addClass('active3');
    } else {
      $('.oldActive3').next().addClass('active3');
    }
    $('.oldActive3').removeClass('oldActive3');
    $('.slide3').fadeOut(speed);
    $('.active3').fadeIn(speed);
  }
  
  // Switch to prev slide
  function prevSlide(){
    $('.active3').removeClass('active3').addClass('oldActive3');
    if($('.oldActive3').is(':first-child')){
      $('.slide3').last().addClass('active3');
    } else {
      $('.oldActive3').prev().addClass('active3');
    }
    $('.oldActive3').removeClass('oldActive3');
    $('.slide3').fadeOut(speed);
    $('.active3').fadeIn(speed);
  }
});


$(document).ready(function(){
    
    $('a[href^="#"]').click(function(){ 
    var target=$(this).attr('href'); 
    $('html, body').animate({ 
    scrollTop:$(target).offset().top}, 
    800); 
    return false; 
    });
  });



$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(400).fadeOut('slow');
});

$('#container-navi-two').on('click', function() {
  if ($(this).hasClass('on') || $(this).hasClass('off')) {
    $(this).toggleClass('on');
    $(this).toggleClass('off');
  }
  else {
    $(this).removeClass('noVisi')
    $(this).addClass('on');
  }
});

$('.go_to').on('click', function() {
  if ($('#container-navi-two').hasClass('on') || $(this).hasClass('off')) {
    $('#container-navi-two').toggleClass('on');
    $('#container-navi-two').toggleClass('off');
  }
  else {
    $('#container-navi-two').removeClass('noVisi')
    $('#container-navi-two').addClass('on');
  }
});
