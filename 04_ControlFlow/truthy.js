
const useremail="adarsh@google.com"; //truthy value
// const useremail=""; falsy value
if(useremail){
    console.log("Got user email");
}else{
    console.log("don't have user email");
}

//**Falsy Values:**
// false,0,null,undefined,"",-0,BigInt 0n,NaN


// **Truthy Values**
//"0", 'false', " ", [], {}, function(){} 

const obj={};
if(Object.keys(obj).length===0){
    console.log("Object is empty");
}

// *****Nullish coalescing Operator (??):.... null undefined*****

let val1;
// val1=5 ?? 10;  //5
// val1= null ?? 10;    //10
// val1= undefined ?? 10;  //10
val1=null ?? 10 ?? 5   //10
console.log(val1);

// ****Terniary Operator****
// condition ? true : false;     Syntax of terniary Operator

const price=100;

price>=80 ? console.log("greater") :console.log("smaller");