//switch case:

// switch (key) {   Syntax of switch statement
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=1;
switch (month){
    case 1:
        console.log("jan");
        break;                 //if this break statement is removed then all the code below break will be executed if further break statement is not there 
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;   
    default:
        console.log("No month");     
}

