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

/*para los numeros de los dias*/
$("#menuList li").on("click", function(){
	var tabIndex = $(this).index();
	$(".dias_agenda").removeClass("activo");
	$(".dias_agenda").eq(tabIndex).addClass("activo");
});

$(".egresado_foto").on('click',function(){

  //let imagen = $(this).data(imagen);
let imagen = $(this).data('imagen');
let frase = $(this).data('frase');
let nombre = $(this).data('nombre');
let profesion = $(this).data('profesion');
let facultad = $(this).data('facultad');

//aqui le paso la foto en grande al otro elemento

//$(".foto_grande").css("background-image",imagen);
//$(".foto_grande").css("background-image",url(imagen));

$(".foto_grande").css("background-image","url("+imagen+")").show('slow');
$(".foto_facultad").attr('src', facultad);
$(".frase_egresado").html(frase);
$(".nombre_egresado").html(nombre);
$(".especialidad_egresado").html(profesion);

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
