/* jQuery and JavaScript code here for lab6-1.html */
window.onload=function()
{
	$("#pageTitle").html("Lab 6 - DOM Manipulation Using jQuery");
	$("#msgArea").append("My class is "+$("#msgArea").attr("class"));
	$("button").css("background-color","red");
	$("body").css("background-color","ivory");
	$(".center-icons").addClass("selected");
	$(".panel").on("click",function()
		{
			$("#message").html("You clicked in this panel");
		});
	$(".panel").on("mousemove",function(e)
		{
			$("#message").html("x="+e.pageX + " y=" +e.pageY);
		});
	$(".panel").on("mouseleave",function()
		{
			$("#message").html("The mouse has left");
		});
	$("#panel-2").append("<img src=\" images/art/thumbs/13030.jpg\">")
	$(".img-responsive").on("mouseover",function()
		{
			$(this).addClass("gray");
			var alt = $(this).attr("alt");
			var src = $(this).attr("src");
			var newsrc = src.replace("small","medium");
			
			var preview = "<div id=\"preview\"></div>";
			var image = $("<img src=\"" + newsrc + "\" id=\"img\">");
			var caption ="<p>" + alt + "</p>";
			
			$(this).after(preview);
			$("#preview").append(image);
			$("#preview").css("display","block");
			$("#img").css("display","none");
			$("#preview").append(caption);
			$("#img").fadeIn(1000);
			
		});
	$(".img-responsive").on("mouseleave",function()
		{
			$("#preview").remove();
			$(this).removeClass("gray");
		});
}

	