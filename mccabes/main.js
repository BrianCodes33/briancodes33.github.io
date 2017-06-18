
$(document).ready(function(){
  $('.instructor').each(function() {
    $(this).hover(
      function() {
        $(this).animate({opacity: 1.0}, 800);
      }
    )
  })
});
