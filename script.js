
jQuery(document).ready(function() {

	$( "#tabs" ).tabs();

	$( "#timeline" ).click(function(){
	    $.getJSON("jsons/timeline.json", function(data) {
	        alert(data[0].author);
	    });
	});

	$( "#sent_messages" ).click(function(){
	    $.getJSON("jsons/myline.json", function(data2) {
	        alert(data2[0].author);
	    });
	});


	
});


