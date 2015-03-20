
jQuery(document).ready(function() {

	$( "#tabs" ).tabs();

	$( "#timeline" ).click(function(){
	    $.getJSON("jsons/timeline.json", function(data) {
	        for (var i = 0; i < data.length; i++) {
	        	 $( '#tabs-1' ).append("<div>" + '<img src='+ data[i].avatar + " width='40' height='60'>" + "  " + data[i].author + ":" + data[i].title + "<div>");
	        	 $( '#tabs-1' ).append("<div>" + data[i].body + "<li>" + data[i].date + "</li>" + "</div>");
	        };
	        $('#tabs-1').accordion({collapsible: true, active:false, heightStyle: "content"}); 
	        $.getJSON("jsons/update.json", function(data2) {
	        	if(data2.length>0){
	        		alert("hay mensajes nuevos");
	        	}
	        });

	    });
	});

	$( "#sent_messages" ).click(function(){
	    $.getJSON("jsons/myline.json", function(data) {
	        for (var i = 0; i < data.length; i++) {
	        	 $( '#tabs-2' ).append("<div>" + '<img src='+ data[i].avatar + " width='60' height='60'>" + "  " + data[i].author + ":" + data[i].title + "<div>");
	        	 $( '#tabs-2' ).append("<div>" + data[i].body + "<li>" + data[i].date + "</li>" + "</div>");
	        };
	        $('#tabs-2').accordion({collapsible: true, active:false, heightStyle: "content"}); 
	    });
	});
	
});


