$(document).ready(function() {
	$(".menu").click(function() {
		if ($(window).width() <= 480){
			$("#menu_mob").toggleClass("hide");
		}
	});
});
// скрипт для сохранения форматирования меню и каталога при динамическом изменении размера экрана
$(window).resize(function() {
	if ($(window).width() <= 480){
		$(".inner_menu_verh").addClass("hide");
	}
});
$(document).ready(function() { 
	$(".catalog").click(function() {
		if ($(window).width() <= 480){
			$(".active_mob").toggleClass("hide");
			$(this).toggleClass("clicked_name");
			$(".active_mob").toggleClass("clicked_subunits");
		}
	});
});