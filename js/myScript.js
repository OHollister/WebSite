$(document).ready(function()
{
	//https://www.jaypan.com/tutorial/highlighting-html-columns-jquery-and-css
	//http://codepen.io
	// function-scoped variable to store the class name. 
	var cellClassName = false;
	// Set jQuery .hover() on all li
	
	$("li").hover
	(
		// Mouse over function
		function()
		{
        // Save this class name to the global variable
			cellClassName = $(this).attr("class");
			
			//if($("#cellClassName").hasClass("col1")){
			
			// Add the .hover_class to all elements that have that class
			$("." + cellClassName).addClass("hover_class");
		},
		// This second function is our mouse out function
		function()
		{
			// Remove the .hover_class from the elements that have
			$("." + cellClassName).removeClass("hover_class");
		}
	);
});



