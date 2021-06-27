var userName="guruiaint";
var password="aj1234";

var userName=(prompt("Enter your User Name"));
var password=(prompt("Enter your Password"));

if(userName="guruiaint"){
    console.log("User Name correct");
}else{
    console.log("User Name Invalid");
}

if(password="aj1234"){
    console.log("Password correct");
}else{
    console.log("Password Invalid");
}

var numberChildren;
numberChildren=" 2 ";
var spouse;
spouse=" Wendy ";
var geo;
geo=" Arizona ";
var city;
city=" Mesa "
var jobTitle;
jobTitle=" Software Developer ";
var date;
date=" Dec 23rd, 2021";
var vehicle;
vehicle=" Dodge Ram";
var dog;
dog=" Elsa ";
var cat1;
cat1=" Max ";
var cat2;
cat2=" Kitten ";
var child1;
child1=" Kate ";
var child2;
child2=" Hayley ";
var houseBedroom;
houseBedroom=" 3 ";
var houseBathroom;
houseBathroom=" 2 ";
var activity;
activity=" camping ";
var dreamJob;
dreamJob=" Google ";
var hobby;
hobby=" videogames ";
var favoriteFood;
favoriteFood=" Sushi ";
var favoriteMovie;
favoriteMovie=" Pulp Fiction ";
var favoriteColor;
favoriteColor=" Blue";

document.write("You will be a" + jobTitle + "in" + city + geo + "and married to" + spouse + "with" + numberChildren + "children," + child1 + "and" + child2 + "on" + date + ".  You'll live in a" + houseBedroom + "bedroom," + houseBathroom + "bathroom house and drive a" + vehicle + ".  You will get a great job at" + dreamJob + "and go" + activity + "and play" + hobby + "on the weekends.  You're favorite things are" + favoriteFood + "," + favoriteMovie + "and the color" + favoriteColor + ".")
for(var i=0;i<=100;i+=2){
    console.log(i);
}