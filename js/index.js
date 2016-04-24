$(function() {
  
  var $tiles = $('.tile');
  
  $(window).on('scroll', function() {
    var y = $(this).scrollTop();
    
    $tiles.each(function(index) {
      if($(this).position().top - 400 < y) {
        $(this).addClass('tile' + (index + 1) + '-anime');
      }
    });
  });
});