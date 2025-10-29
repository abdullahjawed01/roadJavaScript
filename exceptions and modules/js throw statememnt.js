// throw 
// you can use throw statement to pass user - defined exception

// syntax:- 
// throw expression;
// (allow you yo create a custom error)

// ex:-
const number = 40;
try{
    if (number >50){
        console.log("success");
    }
    else {
        throw new Error("the number is low");
        
    }
}
catch (error){
        console.log("An error caught");
        console.log("Error messege error");
    }

// output:-
// An error caught
// Error messege the number is low