console.log("Page loaded");

function contact(){
	alert("Colin M MacInnis\nPhone: +1 (902) 578-0701\nEmail: colin.m.macinnis@gmail.com");
}

function about(){
	alert("Colin M MacInnis\nHeight: 6 feet, 3 inches\nWeight: 230lbs\nBackground: Business\nHobbies: Video Games, Fitness Training, Kayaking");
}

$(document).ready(function(){
	$(".input-group-B").hide();
});

$("input").click(function(){
	var monthName=$("#month").val();
	var timeYear=$("#year").val();
	console.log("Checking available openings for " + monthName + ", " + timeYear);
	$(".input-group-B").show();
});


