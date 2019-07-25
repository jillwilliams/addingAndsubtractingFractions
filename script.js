// user input = answer1, 
// onclick = calculate1( )  
// output = demo1
// FIRST EXAMPLE PROBLEM
const answerOne = ( ) => {
    var answ1 = document.getElementById("answer1").value;
        if  (answ1 == "41/35" )  {
            return "Good Job!";
        } else
            return "Please try again";
}
const calculate1 = ( ) => {
    document.getElementById("demo1").innerHTML = answerOne( );
};
// SECOND EX PROBLEM
const answerTwo = ( ) => {
    var answ2 = document.getElementById("answer2").value;
        if  (answ2 == "33/18")  {
            return "Good Job!";
        } else
            return "Please try again";
}
const calculate2 = ( ) => {
    document.getElementById("demo2").innerHTML = answerTwo( );
};
// THIRD EX PROBLEM
const answerThree = ( ) => {
    var answ3 = document.getElementById("answer3").value;
        if  (answ3 == "54/108")  {
            return "Good Job!";
        } else
            return "Please try again";
}
const calculate3 = ( ) => {
    document.getElementById("demo3").innerHTML = answerThree( );
};
// FOURTH EX PROBLEM
const answerFour = ( ) => {
    var answ4 = document.getElementById("answer4").value;
        if  (answ4 == "19/18")  {
            return "Good Job!";
        } else
            return "Please try again";
}
const calculate4 = ( ) => {
    document.getElementById("demo4").innerHTML = answerFour( );
};
