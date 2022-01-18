(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(82416541, "init", {
clickmap:true,
trackLinks:true,
accurateTrackBounce:true,
webvisor:true
});


function dtime_nums(d, like_eu) {
    var now = new Date;
    now.setDate(now.getDate() + d);
    var dayNum = "";
    if (now.getDate() < 10) {
        dayNum = "0"
    }
    dayNum += now.getDate();
    var monthNum = "";
    if (now.getMonth() + 1 < 10) {
        monthNum = "0"
    }
    monthNum += now.getMonth() + 1;
    if (like_eu === true) {
        document.write(dayNum + "." + monthNum + "." + now.getFullYear())
    } else {
        document.write(monthNum + "." + dayNum + "." + now.getFullYear())
    }
}

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