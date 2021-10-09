const animateCSS = (element, animation, prefix = "animate__") =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });

// Detect request animation framea
// var scroll =
//   window.requestAnimationFrame ||
//   // IE Fallback
//   function (callback) {
//     window.setTimeout(callback, 1000 / 60);
//   };
// var elementsToShow = document.querySelectorAll(".flipInX");

// function loop() {
//   Array.prototype.forEach.call(elementsToShow, function (element) {
//     if (isElementInViewport(element)) {
//       element.classList.add("animate__flipInX");
//     } else {
//       element.classList.remove("animate__flipInX");
//     }
//   });

//   scroll(loop);
// }

// // Call the loop for the first time
// loop();

// // Helper function from: http://stackoverflow.com/a/7557433/274826
// function isElementInViewport(el) {
//   // special bonus for those using jQuery
//   if (typeof jQuery === "function" && el instanceof jQuery) {
//     el = el[0];
//   }
//   var rect = el.getBoundingClientRect();
//   return (
//     (rect.top <= 0 && rect.bottom >= 0) ||
//     (rect.bottom >=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.top <=
//         (window.innerHeight || document.documentElement.clientHeight)) ||
//     (rect.top >= 0 &&
//       rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight))
//   );
// }

$(document).ready(function() {
	$(window).scroll(function(event) {
		var pos_body = $('html,body').scrollTop();
		// console.log(pos_body);
      if(pos_body>1330){
      $('.bounceInLeft').addClass("animate__bounceInLeft");
      $('.bounceInUp').addClass("animate__bounceInUp");
      $('.bounceInRight').addClass("animate__bounceInRight");
      }
      else{
      $('.bounceInLeft').removeClass("animate__bounceInLeft");
      $('.bounceInUp').removeClass("animate__bounceInUp");
      $('.bounceInRight').removeClass("animate__bounceInRight");
      }
		if(pos_body>2090){
      $('.flipInX').addClass("animate__flipInX");
      $(".flipInX").css("overflow","visible");
		}
		else{
      $('.flipInX').removeClass("animate__flipInX");
      $(".flipInX").css("overflow","hidden");
		}
		if(pos_body>5000){
      $('.slideInDown').addClass("animate__fadeInLeft");
      $('.fadeInUp').addClass("animate__fadeInUp");
		}
		else{
      $('.slideInDown').removeClass("animate__fadeInLeft");
      $('.fadeInUp').removeClass("animate__fadeInUp");
		}

	});
	$('.back-to-top').click(function(event) {
		$('html,body').animate({
			scrollTop: 0},
			1400);
	});
});
