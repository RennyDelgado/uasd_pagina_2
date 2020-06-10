$(document).ready(function() {
	$(".megamenu").on("click", function(e) {
		e.stopPropagation();
	});
});

$('.carousel').carousel({
  interval: 9000000
})

$("#menuList li").on("click", function(){
  var tabIndex = $(this).index();
  $("#content .content").removeClass("active");
  $("#content .content").eq(tabIndex).addClass("active");
});


//function oculta(elemento) {
//alert(elemento);
    ///// capturamos el elemento
//item=$("#"+elemento);
//activo = document.querySelector(".activo-hoy");

//if($("#demo1").hasClass('primero')) {
//$("#demo1").removeClass('visible');
//$("#demo1").addClass('invisible');
//}

///// verificamos su estado
//if($(item).hasClass('visible')) {
//    $(item).removeClass('visible');
//// cambiamos su estado
//    $(item).addClass('invisible');
//// animamos
//    $(item).slideUp('fast');
//}
//else
//{
//    $(item).removeClass('invisible');
//    $(item).addClass('visible');
//    $(item).slideDown('fast');
//}
//}
