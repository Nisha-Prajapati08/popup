function copy (copyId){
    var $inp=$("<input>");
    $("body").append($inp);
    $inp.val($(""+copyId).text()).select();
    document.execCommand("copy");
    $inp.remove();
    $(".alert").fadeIn(500,function(){
        $(".alert").fadeOut();
    });
}
$(document).ready(function(){
    $("#button1").click(
        function(){
            copy('#coupon1');
        });
    
        $("#button2").click(
            function(){
                copy('#coupon2');
            });
       
        $("#button3").click(
                function(){
                    copy('#coupon3');
                });
        
        $("#button4").click(
                    function(){
                        copy('#coupon4');
                    });
            
    
});

window.addEventListener('scroll', function() {
    document.getElementById('popup').style.display = 'block';
  });
  function myFunction() {
  document.getElementById("popup").style.display = "none";

}
/*document.on("scroll").addEventListener("#open-popup",function(){
    document.body.classList.add('activepopup');
});

document.on("#popup .close-popup").addEventListener("scroll",function(){
    document.body.classList.add('activepopup');
});*/

