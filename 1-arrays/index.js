// Question 1
var classroomSupplies = [];

classroomSupplies[0] = "pen";
classroomSupplies[1] = "paper";
classroomSupplies[2] = "desk";
classroomSupplies[3] = "computer";

console.log(classroomSupplies);
// [ 'pen', 'paper', 'desk', 'computer' ]

classroomSupplies.sort();
console.log(classroomSupplies);
// ['computer', 'desk', 'paper', 'pen']

// Question 2
var travelPlaces = [];

travelPlaces[0] = "toronto";
travelPlaces[1] = "newYork";
travelPlaces[2] = "australia";
travelPlaces[3] = "spain";

console.log(travelPlaces);
// [ 'toronto', 'newYork', 'australia', 'spain' ]


// Question 3
var bakingRecipies = [ "brownies", "cookies", "cakes", "tarts" ];
bakingRecipies.pop();

console.log(bakingRecipies);
// [ 'brownies', 'cookies', 'cakes' ] 


// Question 4
  var schedule = [
    { courseNumber: "comp170", courseName: "fundamentalsFrontendWebTech", courseCredits: "3.0" },
   
    { courseNumber: "mdia1055", courseName: "vectorGraphics", courseCredits: "3.0" },

    { courseNumber: "mdia1106", courseName: "design", courseCredits: "3.0" },

    { courseNumber: "mdia1620", courseName: "basicSystemOperations", courseCredits: "3.0"} ];

  console.table(schedule);
  console.log( `I am taking ${courseNumber}, ${courseName} that is worth ${courseCredits}. `);

  