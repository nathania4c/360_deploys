/* jQuery and JavaScript code here for lab6-1.html */

window.onload = function() {

var title = $("#pageTitle");
title.html("Lab 6 - DOM Manipulation with JQuery");

var x = $("#msgArea");
var y = x.attr("class");
x.html("My class is " + y);

$(".btn.btn-primary").css("background-color", "red");
$("body").css("background-color", "ivory");
$(".center-icons").addClass("selected");

var x = $(".panel");
var y = $("#message");

x.on("click", function() {
	y.html("You clicked this panel");
});

x.on("mousemove", function(e){
	y.html("x=" + e.pageX + " y=" + e.pageY);	
});
x.on("mouseleave", function(e){
	y.html("the mouse has left");
});

var z = $("#panel-2");
var w = $('<img src="images/art/thumbs/13030.jpg"/>');
z.append(w);

var a = $(".img-responsive");
a.on("mouseover",function() {
		
	$(this).addClass("gray");
	var alt = $(this).attr("alt");
	var src = $(this).attr("src");
	var newsrc = src.replace("small","medium");
			
	var preview = ("<div id=\"preview\"></div>");
	var image = $("<img src=\"" + newsrc + "\" id=\"img\">");
	var caption =("<p>" + alt + "</p>");
			
	$(this).after(preview);
	$("#preview").append(image);
	$("#preview").css("display","block");
	$("#img").css("display","none");
	$("#preview").append(caption);
	$("#img").fadeIn(1000);
			
});
	
a.on("mouseleave",function() {
		$("#preview").remove();
		$(this).removeClass("gray");
	});
}