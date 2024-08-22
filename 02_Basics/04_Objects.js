
const tinderUser=new Object();//This is singleton Object
console.log(tinderUser);

const tinderUser2={}; //This is non-singleton Object
console.log(tinderUser2);

tinderUser.id="1234";
tinderUser.name="Adarsh";
tinderUser.isLoggedIn=false;
console.log(tinderUser);

const regularUser={
    email: "adarsh@google.com",
    fullName:{
        userFullName:{
            firstName:"Adarsh",
            lastName:"Pathak"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
// const obj3={obj1,obj2};//This statement does not combines the elements
// console.log(obj3);

const obj3=Object.assign({},obj1,obj2);
console.log(obj3);
// What Object.assign() Does:
// Object.assign() is a method that copies the values of all enumerable properties from one or more source objects to a target object. It returns the target object.

// Role of {} in Object.assign({}, obj1, obj2):
// Creates an Empty Target Object:
// The {} creates an empty object, which will act as the target object for the assignment. This means the properties from obj1 and obj2 will be copied into this new empty object.

// Prevents Modifying the Original Objects:
// By providing {} as the first argument, you create a new object that is independent of obj1 and obj2. This way, obj1 and obj2 remain unchanged. If you omit {} and instead pass obj1 directly as the first argument like Object.assign(obj1, obj2), the properties of obj2 would be copied into obj1, modifying it.

// Example:
// javascript
// Copy code
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// const obj3 = Object.assign({}, obj1, obj2);
// obj3 will be { a: 1, b: 3, c: 4 }.
// obj1 will remain { a: 1, b: 2 }.
// obj2 will remain { b: 3, c: 4 }.

const obj4={...obj1,...obj2};//spread Operator
console.log(obj4);

const user=[
    {
        name:"Adarsh",
        age:10
    },
    {
        name:"Pathak",
        age:11
    },
    {
        name:"Hello",
        age:12
    }
];
  console.log(user[1].name);

  console.log(tinderUser);
  console.log(Object.keys(tinderUser));//Returns an array with all the keys of object
  console.log(Object.values(tinderUser));//Returns an array with all the values of object

  console.log(tinderUser.hasOwnProperty("isLoggedIn"));//Determine wheather the object is having the isLoggedIn as a key


  const course={
    courseName:"Js in Hindi",
    price:"999",
    courseInstructor:"Adarsh"
  }

  const {courseInstructor:instructor}=course;
  console.log(courseInstructor);
//   Destructuring Assignment
// javascript
// Copy code
// const { courseInstructor } = course;
// This line does the following:

// Extracting the Property Value:

// It looks for the courseInstructor property in the course object.
// Finds the value "Adarsh" associated with the courseInstructor key.
// Assigning to a Variable:

// It creates a new variable named courseInstructor.
// Assigns the value "Adarsh" to this new variable.
// What Does This Mean?
// After running the destructuring statement, you have a new variable courseInstructor that holds the value "Adarsh".
// The original course object remains unchanged.


// **************JSON file format**************
// {
//    " name":"Adarsh",
//     "age":18,
//     "class":"A"
// }

// In JavaScript, object keys can be strings or symbols, and if you don't use quotes, JavaScript automatically converts the key to a string if it's not a symbol. For example:

// javascript
// Copy code
// const obj = {
//     name: "Adarsh",
//     age: 18,
//     class: "A"
// };
// Here, name, age, and class are automatically treated as string keys by JavaScript.

// However, JSON is a textual format and must follow stricter rules to ensure that data is consistently interpreted across all platforms. That’s why in JSON:

// json
// Copy code
// {
//    "name": "Adarsh",
//    "age": 18,
//    "class": "A"
// }
// All keys must be strings.


// This is also a format of JSON file
[
    {},
    {},
    {},
    {}
]