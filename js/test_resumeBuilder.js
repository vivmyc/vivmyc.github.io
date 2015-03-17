$("#main").append("Vivian M Yu Ching");

var formattedName = '';
var formattedRole = '';
var formattedSkills = '';
var formattedEmployer = '';
var formattedPosition = '';
var formattedDates = '';
var formattedLocation = '';
var formattedDescription = '';
var formattedProjectTitle = '';
var formattedProjectDates = '';
var formattedprojectDescription = '';
var formattedprojectImage = '';

/*
example1();
function example1() {
    console.log("Ran the example1");
}
example2();
var example2 = function() {
    console.log("Ran the example2");
}
*/

var bio = {
	"name" : "Jon Ching",
	"role" : "Software Engineer",
	"contacts" : {
		"mobile": "609-123-7890",
		"email" : "jching@rutgers.edu",
		"location" : "New York City",
		"instagram":"@jonching"
	},
	"picture" : "images/jonathan.jpg",
	"skills": ["node.js", "mongoDB", "iOS Development", "Web Development", "JUnit"],
	"welcomeMsg" : "Welcome to my Resume."
	};

var work = {
	"job" : [
		{
			"company" : "Boxed",
			"position" : "Software Engineer",
			"dates" : "May 2013 - Present",
			"loc" : "New York City",
			"desc" : "Right place at the right time!  Thanks to my Fraternity brother who came back to recruit \
			for an intern position.  I was lucky enough to get this position which led to a full time job offer once I \
				graduated."
		},
		{
			"company": "Thingy",
		 	"position": "Intern",
		 	"dates" : "June 2012 - April 2013" ,
		 	"loc" : "Parsippany, New Jersey",
		 	"desc" : "My first job.  Worked on an iOS project for presenting slides on and iPad.  Gained invaluable experience."
		}
	]
};

var projects = {
	"proj" : [
		{
			"pTitle":"Slide Presentor App for iOS",
			"pDate":"2012",
			"pDesc":"Worked on the Slide Presentor App for iOS.  This entailed fixing bugs and also testing.",
			"pImage":""
		},
		{
			"pTitle":"Search Function",
			"pDate":"2014",
			"pDesc":"Added the backend search function for Boxed iOS and Android Apps",
			"pImage":"images/fry.jpg"
		}
	]
};

projects.display = function() {
	for (index in projects.proj) {
		console.log(projects.proj[index].pTitle);
		$("#projects").append(HTMLprojectStart);
		formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.proj[index].pTitle)
		formattedProjectDates = HTMLprojectDates.replace("%data%", projects.proj[index].pDate)
		formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.proj[index].pDesc)
		formattedprojectImage = HTMLprojectImage.replace("%data%", projects.proj[index].pImage)

		//formattedJob = formattedEmployer+formattedPosition
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedprojectDescription);

		if (projects.proj[index].pImage.length>0)
		{
			$(".project-entry:last").append(formattedprojectImage);
		}
		
	};
};

projects.display();

var education = {
	"schools" : [
		{ "name": "SUNY Stony Brook",
		  "city" : "Stony Brook",
		  "degree" : "Bachelor of Science",
		  "major" : ["Computer Science"]
		},

		{ "name" : "NYU Poly School of Engineering",
		  "city" : "New York",
		  "degree" : "Master of Science",
		  "major" : ["Computer Science"]
		}
	],

	"onlineCourses" : [
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"dates" : "March 2015",
			"url" : "http://www.udacity.com"
		}
	]
};


formattedName = HTMLheaderName.replace("%data%", bio.name);
formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedName);
$("#header").append(formattedRole);

var headerInfo = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").append(headerInfo);

var headerInfo = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").append(headerInfo);

var headerInfo = HTMLbioPic.replace("%data%", bio.picture);
$("#header").append(headerInfo);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	formattedSkills = HTMLskills.replace("%data%", bio.skills);
	$("#header").append(formattedSkills);
};

function inName() {
	var nameArr = name.split(" ");
	var firstName = nameArr[0].charAt(0).toUpperCase() + nameArr[0].substr(1).toLowerCase();
	var lastName = nameArr[1].toUpperCase();
	return (firstName + " " + lastName);
}
//console.log("Int'l Name:" + inName(bio.name));

function displayWork(){
	for (index in work.job) {
		//console.log(work.job[index].company);

		$("#workExperience").append(HTMLworkStart);
		formattedEmployer = HTMLworkEmployer.replace("%data%", work.job[index].company);
		formattedPosition = HTMLworkTitle.replace("%data%", work.job[index].position);
		formattedJob = formattedEmployer+formattedPosition
		$(".work-entry:last").append(formattedJob);

		//$("#workExperience").append(HTMLworkDates);
		formattedDates = HTMLworkDates.replace("%data%", work.job[index].dates);
		$(".work-entry:last").append(formattedDates);

		//$("#workExperience").append(HTMLworkLocation);
		formattedLocation = HTMLworkLocation.replace("%data%", work.job[index].loc);
		$(".work-entry:last").append(formattedLocation);

		//$("#workExperience").append(HTMLworkDescription);
		formattedDescription = HTMLworkDescription.replace("%data%", work.job[index].desc);
		$(".work-entry:last").append(formattedDescription);
	};
}

displayWork();


$("#main").append(internationalizeButton);

//$(document).ready(function(){
//   $("p:last").css("background-color", "yellow");
//});


$(document).click(function(loc) { 
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y) 
});







