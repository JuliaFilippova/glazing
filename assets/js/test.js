var number = 0;
var maxNumber = $(".test-item").length;
var $element = $(".test-item").find("input, select, textarea");
// var btnPrev = $(".quiz__prev");
var btnNext = $('.quiz__next');
var isValid;
var dataBlock;
var activeSlede = [];

for (var i = 0; i < maxNumber; i++) {
  activeSlede[i] = false;
}

$(".test-num-current").text(number + 1);
$(".test-num-all").text(maxNumber);

$element.on('change, input', function (e) {
  var value = $(this).val().trim();

  isValid = value !== "";
  btnActive(!isValid);

});

function btnActive(isValid) {
  if (number === 0) {
    // btnPrev.prop('disabled', 'false');
    btnNext.prop('disabled', isValid);
  } else {
    // btnPrev.prop('disabled', false);
    if (activeSlede[number] === true || isValid === false) {
      btnNext.prop('disabled', false);
    } else {
      btnNext.prop('disabled', true);
    }

  }

}

// sidebar

function progress(num) {
  var nums = num;
  var testBlock = ".test-block-" + nums;
  var testCircle = ".test-circle-" + (nums);
  // if(num !== 0){
  $(testBlock).addClass('test-block-active');
  $(testCircle).addClass('test-circle-active');
  // }

}
progress(0);



// btn

function btnClick() {



  btnNext.on('click', function (event) {
    event.preventDefault();
    activeSlede[number] = true;
    ++number;

    btnActive(!isValid);

    if (activeSlede[number] === true) {
      btnNext.prop('disabled', false);
    } else {
      btnNext.prop('disabled', true);
    }

    if (number === maxNumber - 1) {
      $(".test__btns").hide();

    }
    $(".test-item").hide();
    $(".test-item").eq(number).fadeIn(1000);

    progress(number);
    $(".test-num-current").text(number + 1);
    animateTop();

  });


}
btnClick();

function animateTop(eq) {
  var elem = $('.test__visual');
  var top = elem.offset().top - 15;
  $('body,html').animate({
    scrollTop: top
  }, 400);
}


$.fn.hasAttr = function (name) {
  return this.attr(name) !== undefined;
};





var nForm = false;
$(function () {
  'use strict';
  var action = './assets/mail/mail.php';
  $('form').on('submit', function (e) {
    e.preventDefault();
    var formThis = $(this);
    var fd = new FormData(this);


    formThis.find('.btn').attr({
      'disabled': 'true'
    });


    $.ajax({
      url: action,
      type: 'POST',
      contentType: false,
      processData: false,
      data: fd,
      success: function (msg) {
        if (formThis.find('input[name="formname"]').val() === "test") {


          formThis.find('input').attr({
            'disabled': 'true',
          });
          formThis.find('button').attr({
            'disabled': 'true',
          });

          $(".overlay").fadeOut();
          $('html').addClass('stop');
          $("#modal-thanks").fadeIn();
        } else {
          $(".overlay").fadeOut();
          $('html').addClass('stop');
          $("#modal-thanks").fadeIn();
        }

        formThis.find('.btn').removeAttr('disabled');
        $('form').trigger('reset');

      },

    });
  });
});