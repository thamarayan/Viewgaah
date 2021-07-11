function checkElementLocation() {
  var $window = $(window);
  var bottom_of_window = $window.scrollTop() + $window.height();

  $('.elem').each(function(i) {
    var $that = $(this);
    var bottom_of_object = $that.position().top + $that.outerHeight();

    //if element is in viewport, add the animate class
    if (bottom_of_window > bottom_of_object) {
      $(this).addClass('fade-in');
    }
  });
}

// if in viewport, show the animation
checkElementLocation();


$(window).on('scroll', function() {
  checkElementLocation();
  scrollFunction();
});


let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}