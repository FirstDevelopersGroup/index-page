

function myFunction(x) {

	if(x=='open'){

     document.getElementById('t-index-close-menu ').classList.toggle("change"); 
     document.getElementById('t-index-open-menu').style.display="none"; 
     $(".run").on("click", function() {
    $(".t-index-overlay-menu").addClass("show");
});

}
    else{

    	document.getElementById('t-index-close-menu ').classList.toggle("change");
        document.getElementById('t-index-open-menu').style.display="block"; 

$(".t-index-overlay-menu").on("click", function() {
  $(".t-index-overlay-menu").removeClass("show");

});
    }
    
}




