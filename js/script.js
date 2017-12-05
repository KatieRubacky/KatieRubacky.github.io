$(document).ready(function(){
      $('.parallax').parallax();
});
$('.carousel-control').click(function(e){
            e.preventDefault();
            $('#myCarousel').carousel( $(this).data() );
});
AP.resize();