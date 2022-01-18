
$(document).ready(function () {
  

	$('.change-package-selector').on('change', (function () {
		 $('.item-gift').hide();
		 $('#' + $(this).val()).show();
	   }));
  
	   $('a').not('.policy').click(function (e) {
		e.preventDefault();
		$("html, body").animate({
		  scrollTop: $('form').offset().top
		}, 500);
		return false;
	  });
		  
  
	  })