const togglePassword = document.querySelectorAll('#pwd-btn');
const passwordBox = document.querySelectorAll('#pwd');

function toggleVisibility() {
    if (passwordBox[0].type == 'text'){
        passwordBox.forEach(el => el.type = "password");
        togglePassword.forEach(el => el.classList.add('fa-eye-slash'))
        togglePassword.forEach(el => el.classList.remove('fa-eye'))
    }
    else if (passwordBox[0].type == 'password'){
        passwordBox.forEach(el => el.type = "text");
        togglePassword.forEach(el => el.classList.add('fa-eye'))
        togglePassword.forEach(el => el.classList.remove('fa-eye-slash'))
    }
    else {console.log('Something wrong!')}
}


// Chat Popup
toggleFab();

//define chat color
if (typeof(Storage) !== "undefined") {
  if (localStorage.getItem('fab-color') === null) {
    localStorage.setItem("fab-color", "blue");
  }
  $('.fabs').addClass(localStorage.getItem("fab-color"));
} else {
  $('.fabs').addClass("blue");
}

//Fab click
$('#prime').click(function() {
  toggleFab();
});

//Speak admin msg
function botSpeak(text) {
  if ('speechSynthesis' in window) {
    var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  }
}

//Toggle chat and links
function toggleFab() {
  $('.prime').toggleClass('fa-plus');
  $('.prime').toggleClass('fa-times');
  $('.prime').toggleClass('is-active');
  $('#prime').toggleClass('is-float');
  $('.chat').toggleClass('is-visible');
  $('.fab').toggleClass('is-visible');
  
}

//User msg
function userSend(text) {
  var img = '<i class="fas fa-user"></i>';
  $('#chat_converse').append('<div class="chat_msg_item chat_msg_item_user"><div class="chat_avatar">' + img + '</div>' + text + '</div>');
  $('#chatSend').val('');
  if ($('.chat_converse').height() >= 256) {
    $('.chat_converse').addClass('is-max');
  }
  $('.chat_converse').scrollTop($('.chat_converse')[0].scrollHeight);
}

//Admin msg
function adminSend(text) {
  $('#chat_converse').append('<div class="chat_msg_item chat_msg_item_admin"><div class="chat_avatar"><i class="fas fa-headset"></i></div>' + text + '</div>');
  botSpeak(text);
  if ($('.chat_converse').height() >= 256) {
    $('.chat_converse').addClass('is-max');
  }
  $('.chat_converse').scrollTop($('.chat_converse')[0].scrollHeight);
}

//Send input using enter and send key
// $('#chatSend').bind("enterChat", function(e) {
//   userSend($('#chatSend').val());
//   adminSend('How may I help you.');
// });
$('#fab_send,#chatSend').each(function(){
        $(this).bind("enterChat", function(e) {
        if($('#chatSend').val().toLowerCase() == '/help') {
            userSend($('#chatSend').val());
            adminSend(`Danh sách các lệnh hỗ trợ:<br>/help: Hiển thị tin nhắn hỗ trợ này.<br>/about: thông tin về người tạo web<br>`);
        }
        if($('#chatSend').val().toLowerCase() == '/about') {
            userSend($('#chatSend').val());
            adminSend('Tên người tạo trang web: Bùi Quang Huy<br>Học viên lớp NCT-JSA04 của MindX');
        }
        else if ($('#chatSend').val() == null){
            adminSend('Tôi có thể giúp gì cho bạn?');
        }
    })
});
$('#chatSend').keypress(function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    if (jQuery.trim($('#chatSend').val()) !== '') {
      $(this).trigger("enterChat");
    }
  }
});

$('#fab_send').click(function(e) {
  if (jQuery.trim($('#chatSend').val()) !== '') {
    $(this).trigger("enterChat");
  }
});

// Color options
$(".chat_color").click(function(e) {
  $('.fabs').removeClass(localStorage.getItem("fab-color"));
  $('.fabs').addClass($(this).attr('color'));
  localStorage.setItem("fab-color", $(this).attr('color'));
});

$('.chat_option').click(function(e) {
  $(this).toggleClass('is-dropped');
});

//Loader effect
function loadBeat(beat) {
  beat ? $('.chat_loader').addClass('is-loading') : $('.chat_loader').removeClass('is-loading');
}

function hideChat(hide) {
  if (hide) {
    $('.chat_converse').css('display', 'none');
    $('.fab_field').css('display', 'none');
  } else {
    // Help
    $('#fab_help').click(function(){userSend('Help!');});
    $('.chat_login').css('display', 'none');
    $('.chat_converse').css('display', 'block');
    $('.fab_field').css('display', 'inline-block');
  }
}
hideChat(false);
// End Chat Popup

$(window).on('scroll',function() {
    if ($(this).scrollTop() > 120){  
        $('.navbar-area').addClass("is-sticky");
    }
    else{
        $('.navbar-area').removeClass("is-sticky");
    }
});
// // Slide
// var slideshow1 = document.getElementById("slideshow1");
// slideshow1.currentSlideIndex = 1;
// showSlides(slideshow1.currentSlideIndex, slideshow1);

// var slideshow2 = document.getElementById("slideshow2");
// slideshow2.currentSlideIndex = 1;
// showSlides(slideshow2.currentSlideIndex, slideshow2);


// function plusSlides(n, slideshow) {
//   showSlides(slideshow.currentSlideIndex += n, slideshow);
// }

// function currentSlide(n, slideshow) {
//   showSlides(slideshow.currentSlideIndex = n, slideshow);
// }

// function showSlides(n, slideshow) {
//   var i;
//   var slides = slideshow.getElementsByClassName("mySlides");
//   var dots = slideshow.getElementsByClassName("dot");
//   if (n > slides.length) {slideshow.currentSlideIndex = 1}    
//   if (n < 1) {slideshow.currentSlideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace("dot-active", "");
//   }
//   slides[slideshow.currentSlideIndex-1].style.display = "block";  
//   dots[slideshow.currentSlideIndex-1].className += "dot-active";
// }
