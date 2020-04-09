// var scene_4 = document.getElementById('scene-4');
// var parallax4 = new Parallax(scene_4);



$('.close').on('click', function (event) {
  event.preventDefault();
  if ($(this).hasClass('close-video')) {
    $('.modal-video-body iframe').remove();
  } else if ($(this).hasClass('close-nav')) {
    $(".nav-wrap-header").fadeOut();
  }
  $(".overlay").fadeOut();
  $("html").removeClass('stop');
});

$('.overlay').not('#modal-page').mouseup(function (e) {
  var container = $('.modal-wrap');
  if (container.has(e.target).length === 0 && !container.is(e.target)) {
    $('html').removeClass('stop');
    $('.overlay').fadeOut();
  }
});


$('.link-conf').on('click', function (event) {
  event.preventDefault();

  $('html').addClass('stop');
  $('#politics').fadeIn();
});

$('.btn-cb-js').on('click', function (event) {
  event.preventDefault();

  $('html').addClass('stop');
  $('#modal-callback').fadeIn();
});
$('.const-btn-js').on('click', function (event) {
  event.preventDefault();
  var ind = '#modal-big-' + $(this).index();
  $('html').addClass('stop');
  $(ind).fadeIn();
});

$('.sist-btn2-js').on('click', function (event) {
  event.preventDefault();
  var ind = '#modal-hs-' + $(this).parent().index();
  $('html').addClass('stop');
  $(ind).fadeIn();
});
$('.sist-btn21-js').on('click', function (event) {
  event.preventDefault();
  var ind = '#modal-hs-' + $(this).data('ind');
  $('html').addClass('stop');
  $(ind).fadeIn();
});

$('.mg-btn-js').on('click', function (event) {
  event.preventDefault();
  $('.two-title').val($(this).data('title'));
  $('.overlay').hide();
  $('html').addClass('stop');
  $('#modal-callback-two').fadeIn();
});

$('.sist-btn-js').on('click', function (event) {
  event.preventDefault();
  $('.two-title').val($(this).parent().find('.sist-title-js').text().trim());
  $('.overlay').hide();
  $('html').addClass('stop');
  $('#modal-callback-two').fadeIn();
});


// date-js
var now = new Date();
now.setDate(now.getDate() + 2);
var day = now.getDate();
var mounth = now.getMonth() + 1;
if (mounth === 13) {
  mounth = now.getMonth() + 1;
}
if (mounth < 10) {
  mounth = '0' + mounth;
}

if (day < 10) {
  day = '0' + day;
}

$('.date-js').text(day + "/" + mounth);



$('.project__slider').slick({
  //dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 600,
  arrows: false,
  adaptiveHeight: true

});

var len = $('.project__slider').slick('getSlick').slideCount;
var numAll = len;

$('.test-num-all-slide').text(numAll);

var labelSlider = 1;
$('.project__slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  var number = nextSlide + 1;
  $('.test-num-current-slide').text(number);

});


$('.prg-left').on('click', function (event) {
  $('.project__slider').slick('slickPrev');
});
$('.prg-right').on('click', function (event) {
  $('.project__slider').slick('slickNext');
});



// Отправка заявки 
$(document).ready(function () {
  $('form').submit(function () { // проверка на пустоту заполненных полей.
    if (document.form.name.value == '' || document.form.phone.value == '') {
      valid = false;
      return valid;
    }
    $.ajax({
      type: "POST",
      url: "mail/mail.php",
      data: $(this).serialize()
    }).done(function () {
      $('#modal-thanks').fadeIn();
      // $(this).find('input').val('');
      $('form').trigger('reset');
    });
    return false;
  });
});

// $(document).ready(function() {
// 	$('#formCall').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
// 		if (document.form.name.value == '' || document.form.phone.value == '' ) {
// 			valid = false;
// 			return valid;
// 		}
// 		$.ajax({
// 			type: "POST",
// 			url: "mail/mail.php",
// 			data: $(this).serialize()
// 		}).done(function() {
// 			$('.js-overlay-window-thank-you').fadeIn();
// 			$(this).find('input').val('');
// 			$('#formCall').trigger('reset');
// 		});
// 		return false;
// 	});
// });