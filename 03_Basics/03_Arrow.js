const user={
    username:"Adarsh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);//Refering to the current object user.It is same as object user
    }
}
console.log(user.welcomeMessage());

// In JavaScript, the this keyword is used within an object to refer to the current object, the object that the code is being executed on. It allows you to access the properties and methods of the object within its own methods.

// const user = {
//     username: "Adarsh",
//     price: 999,
//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to website`);
//     }
// }
// Use of this in the Example:
// this.username: Here, this refers to the user object. So, this.username is accessing the username property of the user object, which in this case is "Adarsh".

user.welcomeMessage();
user.username="Pathak";
user.welcomeMessage();

console.log(this); //Here it is refering to the empty object beacause here globally there is no object but in browser there is a globally present object which is called window object....so in browser it will return an non empty object......



// function chai(){
    //   let username="Adarsh";
//     console.log(this);       Returns window object of browser
        // console.log(this.username);
// }
// chai();
// console.log(this);

// ***********Arrow Function************
const chai= ()=>{
    console.log(this);  //Returns emty object 
}

const add=(num1,num2)=>{
    return num1+num2;
}
console.log(add(2,5));

const add1=(num1,num2) => (num1+num2); //Another way of declaring arrow function..Here we dont need to write the curly brackets only () this bracket is required and we dont need to write the return keyword.....
console.log(add1(2,8));

const add2=()=>({name:"Adarsh",age:22});
console.log(add2());












