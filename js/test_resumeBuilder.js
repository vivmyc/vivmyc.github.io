/*******
$("#main").append("Viv Ching");
var awesomeThoughts = "I am Viv and I am AWESOME"
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
console.log(funThoughts);
$("#main").append(funThoughts);
********/


var name="Vivian M. Yu Ching";
var role="Senior Applications Developer"
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedName);
$("#header").append(formattedRole);
//console.log("name=" + name);
//console.log("role=" + role);

var work = {};
work.position =  "Senior Applications Developer";
work.employer = "AT&T";
work.years = 19.5;

/*
var education = {};
education["name"] = "NYU Poly School of Engineering";
education["years"] = "1982-1986";
education["city"] = "New York";
*/

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
}


$("#main").append(work["position"]);
$("#main").append(education.name);


var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    
    newArray = _array.slice(0);
    tempArray = newArray;
    var lastNumber = tempArray.pop();
    lastNumber = lastNumber + 1;
    var secondNumber=tempArray.pop();
    var firstNumber=tempArray.pop();
    
    newArray.push(firstNumber);
    newArray.push(secondNumber); 
    newArray.push(lastNumber); 
    
    /*
 	newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    */
    
    
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));