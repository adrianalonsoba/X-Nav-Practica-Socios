
jQuery(document).ready(function() {

	$( "#tabs" ).tabs();

	$( "#dialog" ).dialog();

	$( "#timeline" ).click(function(){
	    $.getJSON("jsons/timeline.json", function(data) {
	        for (var i = 0; i < data.length; i++) {
	        	$('#tabs-1').append('<div class="msg">'+
	        	"<img src="+data[i].avatar+" width='40' height='60'>"+
	        	'<strong>'+data[i].author+'</strong>'+
        		//':'+data[i].title+
        		"<div id='dialog' title='lalaa'>"+
        		"<p>This is the default dialog which is useful for displaying information. The dialog window can be moved, resized and closed with the 'x' icon.</p></div>"+
	        	'</div>');
	        };
	        
	    });
	});

	$( "#sent_messages" ).click(function(){
	    $.getJSON("jsons/myline.json", function(data) {
	        for (var i = 0; i < data.length; i++) {
	        	$('#tabs-2').append('<div class="msg">'+
	        	"<img src="+data[i].avatar+" width='60' height='60'>"+
	        	'<strong>'+data[i].author+'</strong>'+
        		//':'+data[i].title+
        		"<div id='dialog' title='lalaa'>"+
        		"<p>This is the default dialog which is useful for displaying information. The dialog window can be moved, resized and closed with the 'x' icon.</p></div>"+
	        	'</div>');
	        };
	    });
	});
	
});


