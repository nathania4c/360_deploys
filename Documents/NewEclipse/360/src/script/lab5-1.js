
window.onload = function() {
	
	var x = document.getElementById("mainForm");
	x.setAttribute('name', 'fun');
	
	var continent = document.fun.continent;
	continent.onchange = function(e){
		if (continent.selectedIndex=="0")
			continent.style.outline="2px solid red";
		else
			continent.style.outline = 'none';
	}
	
	var country = document.fun.country;
	country.onchange = function(e){
		if (country.selectedIndex=="0")
			country.style.outline="2px solid red";
		else
			country.style.outline = 'none';
	}
	
	var rate = document.fun.rate;
	rate.onchange = function(e){
		if (rate.value == "" || rate.value == null){
			console.log("boo");
			rate.style.outline="2px solid red";
		}else
		 rate.style.outline = 'none';
	}
	
	var date = document.fun.date;
	date.onchange = function(e){
		 date.style.outline = 'none';
		 }
	var time = document.fun.time;
	time.onchange = function(e){
		 time.style.outline = 'none';
		 }
	var city = document.fun.city;
	city.onchange = function(e){
		city.style.outline = 'none';
	}
	
	var items = document.getElementsByClassName("required");
	var a = items[0];
	var b = items[1];
	var c = items[2];
   
   a.onchange = function(e){
	   a.setAttribute('class', 'done');
   }
   b.onchange = function(e){
	   b.setAttribute('class', 'done');
   }
   c.onchange = function(e){
	   c.setAttribute('class', 'done');
   }
   
   	document.getElementById("mainForm").onsubmit = function(e){
   			
		var theTitle = a.value;
	 	var theDescription = b.value;
	 	var theCheckBox = c.checked;
	 	var message = "";
	 	
	 	if (theTitle == null || theTitle == ""){
	 		e.preventDefault();
	 		message+="no title. ";
	 		a.setAttribute('class', 'unfilledRequired');
	 	} if (theDescription == null || theDescription == ""){
	 		e.preventDefault();
			message+="no description. ";
			b.setAttribute('class', 'unfilledRequired');
 		} if (!theCheckBox){
 			e.preventDefault();
 			message+="please check the box. ";
 		}
 		if (message != "")
 			alert(message);
   }
}