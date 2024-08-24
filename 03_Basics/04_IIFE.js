//Immediately Invoked Function Expression(IIFE)

(function chai(){
    console.log("DB Connected");
})();   //This parenthesis is necessary after every function to invoke the function immediately and semicolon is also necessary......

(function chai2(){ //This is called named IIFE
    console.log("db");
})();

(()=>{    //This is called unnamed IIFE 
    console.log("Hello this is arrow function IIFE");
})();

((name)=>{
    console.log(`Hello this is arrow function IIFE , ${name} `);
})("Adarsh");
