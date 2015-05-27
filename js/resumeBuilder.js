//
// Udacity Front-end Developer Nanodegree - Project #2
//

var formattedItem = '';

//--------------
// Bio
//--------------
var bio = {
	"name" : "Jon Ching",
	"role" : "Software Engineer",
	"contacts" : {
		"mobile" : "609-213-7890",
		"email" : "jonching@rutgers.edu",
		"github" : "spindle",
		"twitter" : "@jonching",
		"location" : "72 Wild Azalea Lane Skillman, NJ"
	},
	"welcomeMessage" : "Thanks for checking out my dynamic resume project!",
	"skills": ["awesomeness", "javascript", "jQuery", "node.js", "mongoDB", "iOS Development", "Boxing", "and much more!"],
	"biopic" : "images/jonathan.jpg"
};
bio.display = function() {

		formattedItem = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedItem);
		formattedItem = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedItem);

		formattedItem = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedItem);
		$("#footerContacts").append(formattedItem);

		formattedItem = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedItem);
		$("#footerContacts").append(formattedItem);

		formattedItem = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedItem);
		$("#footerContacts").append(formattedItem);

		formattedItem = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedItem);
		$("#footerContacts").append(formattedItem);

		formattedItem = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedItem);

		formattedItem = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedItem);

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (index in bio.skills) {
				formattedItem = HTMLskills.replace("%data%", bio.skills[index]);
				$("#header").append(formattedItem);	
			}		
		};
}
bio.display();

//--------------
// Education
//--------------
var education = {
	"schools" : [
		{ "name": "Rutgers State University",
		  "location" : "New Brunswick, New Jersey",
		  "degree" : "BS",
		  "majors" : ["Computer Science"],
		  "dates" : "2009 - 2014 ",
		  "url" : ""
		},

		{ "name" : "NYU Poly School of Engineering",
		  "location" : "New York, NY",
		  "degree" : "MS",
		  "majors" : ["Computer Science"],
		  "dates" : "2015 - Present ",
		  "url" : ""
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
education.display = function() {
	for (index in education.schools) {
		$("#education").append(HTMLschoolStart);
		formattedItem = HTMLschoolName.replace("%data%", education.schools[index].name);
		$(".education-entry:last").append(formattedItem);
		formattedItem = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
		$(".education-entry:last").append(formattedItem);
		formattedItem = HTMLschoolDates.replace("%data%", education.schools[index].dates);
		$(".education-entry:last").append(formattedItem);
		formattedItem = HTMLschoolLocation.replace("%data%", education.schools[index].location);
		$(".education-entry:last").append(formattedItem);
		formattedItem = HTMLschoolMajor.replace("%data%", education.schools[index].majors);
		$(".education-entry:last").append(formattedItem);
	}

	$(".education-entry:last").append(HTMLonlineClasses);

	for (index in education.onlineCourses) {	
		
		formattedItem = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);
		$(".education-entry:last").append(formattedItem);
		formattedItem = HTMLonlineDates.replace("%data%", education.onlineCourses[index].dates);
		$(".education-entry:last").append(formattedItem);
		formattedItem = HTMLonlineURL.replace("%data%", education.onlineCourses[index].url);
		$(".education-entry:last").append(formattedItem);
	}
};
education.display();


//--------------
// Work
//--------------
var work = {
	"jobs" : [
			{
			"employer" : "Boxed",
			"title" : "Software Engineer",
			"location" : "New York, NY",
			"dates" : "June 2014 - Present",	
			"description" : "Presently a software engineer at a startup company delivering wholesale big box items right to your door."
		},
		{
			"employer" : "Boxed",
			"title" : "Intern",
			"location" : "Edison, NJ",
			"dates" : "May 2013 - May 2014",
			"description" : "Software Engineer Intern at Boxed startup."
		},
		{
			"employer": "Thingy, Inc.",
		 	"title": "Intern",
		 	"location" : "Parsippany, New Jersey",
		 	"dates" : "June 2012 - April 2013" ,
		 	"description" : "My first job!  Worked on an iOS project for presenting slides on and iPad.  Gained invaluable experience."
		}
	]
};
work.display = function (){
	for (index in work.jobs) {
		//console.log(work.job[index].company);

		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
		var formattedPosition = HTMLworkTitle.replace("%data%", work.jobs[index].title);
		formattedItem = formattedEmployer+formattedPosition
		$(".work-entry:last").append(formattedItem);

		formattedItem = HTMLworkDates.replace("%data%", work.jobs[index].dates);
		$(".work-entry:last").append(formattedItem);

		formattedItem = HTMLworkLocation.replace("%data%", work.jobs[index].location);
		$(".work-entry:last").append(formattedItem);

		formattedItem = HTMLworkDescription.replace("%data%", work.jobs[index].description);
		$(".work-entry:last").append(formattedItem);
	};
}
work.display();

//--------------
// Projects
//--------------
var projects = {
	"projects" : [
		{
			"title":"Slide Presentor App for iOS",
			"dates":"2012",
			"description":"Worked on the Slide Presentor App for iOS.  This entailed fixing bugs and also testing.",
			"images":[]
		},
		{
			"title":"Search Function",
			"dates":"2014",
			"description":"Added the backend search function for Boxed iOS and Android Apps",
			"images": [
			"images/search3.PNG",
			"images/search1.PNG",
			"images/search2.PNG"
			]
		}
	]
};
projects.display = function() {
	for (index in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		formattedItem = HTMLprojectTitle.replace("%data%", projects.projects[index].title)
		$(".project-entry:last").append(formattedItem);

		formattedItem = HTMLprojectDates.replace("%data%", projects.projects[index].dates)
		$(".project-entry:last").append(formattedItem);

		formattedItem = HTMLprojectDescription.replace("%data%", projects.projects[index].description)
		$(".project-entry:last").append(formattedItem);
		
		if (projects.projects[index].images.length>0) {
			for (var index2 in projects.projects[index].images)
			{
				formattedItem = HTMLprojectImage.replace("%data%", projects.projects[index].images[index2])
				$(".project-entry:last").append(formattedItem);
			}
		}
		
	};
};
projects.display();

$("#mapDiv").append(googleMap);

$(document).click(function(loc) { 
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y) 
});











