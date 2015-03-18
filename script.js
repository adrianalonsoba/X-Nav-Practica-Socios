
jQuery(document).ready(function() {

	$( "#tabs" ).tabs();

	$( "#timeline" ).click(function(){
	    $.getJSON("jsons/timeline.json", function(data) {
	        for (var i = 0; i < data.length; i++) {
	        	$('#tabs-1').append('<div class="msg">'+
	        	"<img src="+data[i].avatar+" width='40' height='60'>"+
	        	'<strong>'+data[i].author+'</strong>'+
        		':'+data[i].title+
	        	'</div>');
	        };
	        
	    });
	});

	$( "#sent_messages" ).click(function(){
	    $.getJSON("jsons/myline.json", function(data2) {
	        alert(data2[0].author);
	    });
	});


	
});


