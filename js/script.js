$(document).ready(function() {
	$(".megamenu").on("click", function(e) {
		e.stopPropagation();
	});
});

$('.carousel').carousel({
  interval: 9000000
})


  $(document).ready(function(){
    $('.ver_agenda').on('click',function(e){
        $(this).parent().next().toggle('fast');
        e.preventDefault();
    });
    $('#alternar-todo').on('click',function(e){
        $('.respuesta').toggle('slow');
        e.preventDefault();
    });
});
