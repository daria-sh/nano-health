$(document).ready(function() {
  $('.menu_mob').click(function() {
    if ($(window).width() <= 480) {
      $('#menu_mob').toggleClass('hide');
    }
  });
});
$(window).resize(function() {
  if ($(window).width() <= 480) {
    $('.inner_menu_verh').addClass('hide');
  }
});
$(document).ready(function() {
  $('.drop_down').click(function(event) {
    if ($(window).width() <= 480) {
      $(this).toggleClass('hide');
      $(this).toggleClass('clicked_name');
      $(this).parent().find('.active_mob').toggleClass('clicked_subunits ');
      event.preventDefault();
    }
  });
});