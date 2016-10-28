
$(document).ready(function()
{
var cellClassName = false;

	
$("li").hover(function(){
 $("." +cellClassName).removeClass("hover_blue");
 $("." + cellClassName).removeClass("hover_red"); 
 $("." + cellClassName).removeClass("hover_green");    
 
 cellClassName = $(this).attr("class");

    $("li").hover(function(){
       
	if ( $(this).hasClass("col1, red")) {
       $("." + cellClassName).addClass("hover_red");
	}
    
});
    $("li").hover(function(){
	
	if ( $(this).hasClass("col2, blue")) { 
       $("." + cellClassName).addClass("hover_blue");
	}
    
});
    
    $("li").hover(function(){
		
	if ( $(this).hasClass("col3, green")) { 
       $("." + cellClassName).addClass("hover_green");
	}
    
});
		                       },
	function(){}
	);
});
    


