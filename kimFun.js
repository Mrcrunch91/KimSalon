/*Javascript and jQuery */

//Set variable house to get current local date. 

var house = new Date();
var theH = house.getHours();
house.setHours(theH);
//Var array for months of the year.
var theMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", 
"November", "December"];

//Var array for days of the week.
var theday = ["Sunday, ","Monday, ","Tuesday, ", "Wednesday, ", "Thursday, ", "Friday, ", "Saturday, "];
var theNum = house.getDay();


var inputMonth = (theMonths[house.getMonth()]);

//Variable string for footer date time.
var toSend = ("Today is: " + theday[theNum] + "" + inputMonth + " "
	+ house.getDate() + ", " + house.getFullYear()) + " " + house.getHours() + ":" + house.getMinutes() + ":" + house.getSeconds() 
+ " GMT-0500 (Eastern Standard Time)";

//Display date inside of css div "east".
document.getElementById("east").innerHTML = toSend;


//Highlights function for forms and tables data. Yellow for table row and red for table data. 
$(document).ready(function(){
	$('table tbody tr').hover(function(){
		$(this).addClass('highlight1');		
	}, function(){
		$(this).removeClass('highlight1');
		
	});

});


function initMap(){
	var uluru = {lat: 28.6729651, lng: -81.5025715};
	var map = new google.maps.Map(document.getElementById('map'),{
		zoom: 18, center: uluru
	});

	var marker = new google.maps.Marker({		
		position:uluru,
		map: map
	});
}



$(document).ready(function () {
	var url = window.location.href;
	var activePage = url;
	$("a").each(function () {
		var linkPage = this.href;

		if (activePage == linkPage) {
			$(this).closest("li").addClass("current");
		}
	});
});
