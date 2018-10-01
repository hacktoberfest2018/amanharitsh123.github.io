$(document).ready(function(){
    $(".bg .btn-circle").hide(0).delay(200).fadeIn(3000)
       $(".bg .btn-circle").click(function(){
        $(".bg .btn-circle").fadeOut(1000,function(){$(".bg .jumbotron").fadeIn(1000);});
               
    });
});
Aman Sharma
