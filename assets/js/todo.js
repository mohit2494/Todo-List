console.log("javascript file connected !");

if(jQuery)
	console.log("jQuery is loaded !")

/*

	Notes on using on function
	1. click function is different from the
	   On function in the sense that On function
	   applied to all the dynamic elements while
	   the click function applies to elements which
	   were present when the page loaded.

	2. On function is to be applied to an element
	   which was already present when the page was
	   loaded, so in this case we are doing 

	   $("ul").on 

	   because we want the ul to handle the
	   dynamic li.

*/

// Check off specific todo's by clicking 
$("ul").on("click","li",function(){
	// Toggle class completed
	$(this).toggleClass("completed");

});

// Click on X to delete todo
$("ul").on("click","span",function(event){
	// console text
	console.log('clicked on a span');


	$(this).parent().css({

		background: "#00E640",
		color: "white"
	});

	// we want to delete the li on clicking of span
	$(this).parent().fadeOut(1000,function(){

		$(this).remove();
	});

	// to stop from event bubbling to happen
	event.stopPropagation();

});

// select input from user and add to user list
$("input[type='text']").keypress(function(event){
	if(event.which === 13){


		// Store text from input text
		var text = $(this).val();

		// Make a new li 
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+text+"</li>");

		// Clear input
		var text = $(this).val("");		
	}
});

$('.fa-edit').click(function(){

	$("input[type='text']").fadeToggle();
});