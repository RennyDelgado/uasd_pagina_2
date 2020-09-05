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

$(".menu_boton1").on('click',function(){
	$(".menu_sobre_la_uasd").toggle("slow");
  //$(".menu_imagen1").attr('src', "img/cerrar.png");
});

$(".menu_boton2").on('click',function(){
	$(".menu_rectoria").toggle("slow");
	//$(".menu_imagen2").attr('src', "img/cerrar.png");
});

$(".menu_boton3").on('click',function(){$(".menu_vice_rectoria").toggle("slow");});
$(".menu_boton4").on('click',function(){$(".menu_direcciones_generales").toggle("slow");});
$(".menu_boton5").on('click',function(){$(".menu_programas_proyectos").toggle("slow");});
$(".menu_boton6").on('click',function(){$(".menu_otras_dependencia").toggle("slow");});
$(".menu_boton7").on('click',function(){$(".menu_pie_vicerectorias").toggle("slow");});
$(".menu_boton8").on('click',function(){$(".menu_pie_facultades").toggle("slow");});
$(".menu_boton9").on('click',function(){$(".menu_pie_recintos").toggle("slow");});
$(".menu_boton10").on('click',function(){$(".menu_pie_centros").toggle("slow");});
$(".menu_boton11").on('click',function(){$(".menu_pie_sub_centro").toggle("slow");});
$(".menu_boton12").on('click',function(){$(".menu_pie_institutos").toggle("slow");});
$(".menu_boton13").on('click',function(){$(".menu_pie_uasd_digital").toggle("slow");});
$(".menu_boton14").on('click',function(){$(".redes_sociales").toggle("slow");});
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
