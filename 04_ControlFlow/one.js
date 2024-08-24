//if :

if(true){

}

const userLoggedIn=true;
if(userLoggedIn){

}

if(2=="2"){
    console.log("Executed");
}
// What Happens in if(2 == "2"):
// 2 (number) and "2" (string) are the two values being compared.
// JavaScript attempts to convert them to the same type to compare them.
// Conversion Process:
// JavaScript converts the string "2" to a number 2 because when comparing a number and a string using ==, the string is coerced to a number.
// After the conversion, the comparison becomes if(2 == 2), which evaluates to true.

if(2==="2")  //Here data type is not converted
{ 
    console.log("Executed");
}

const temp=40;

if(temp>50){                   //If else statement
    console.log("Temp is greater than 50");
}
else{
    console.log("Temp is less than 50");
}

const score=400;
if(score>200){
    const power="fly";
    console.log(`User Power: ${power}`);
}
// console.log(`User Power: ${power}`);   Variable power is not defined

const balance=800;
if(balance>500)
    console.log("hello");
 
if(balance>500)
    console.log("hello"),console.log("world");  //We can write two statement using commas in a single line but generally it is not preferrable....

if(balance<200){         //if else if statement
    console.log("less than 200");
}else if(balance<500){
    console.log("less than 500");
}else if(balance<800){
    console.log("less than 800");
}else if(balance<1000){
    console.log("less than 1000");
}else{
    console.log("less than 1200");
}

 const userIn=true;
 const debitCard=true;
 const loggedInFromGoogle=false;
 const loggedInFromEmail=true;

 if(userIn && debitCard && 2==3){
    console.log("Allow to buy courses");
 }

 if(loggedInFromGoogle || loggedInFromEmail){
    console.log("Allow to buy all the courses");
 }
 