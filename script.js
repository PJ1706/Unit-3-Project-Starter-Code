/* Declare variables below to save the different sections (divs) of your story*/

let First = document.querySelector(".option-one");
let Second = document.querySelector(".option-two");
//two different first option screen
let FirstDiv = document.querySelector(".option-one-screen");
let SecondDiv = document.querySelector(".option-two-screen");

let LastOneDiv = document.querySelector(".option-one-end");
let LastTwoDiv = document.querySelector(".option-two-end");
//body
let body = document.querySelector("body");

First.onclick=function(){
    FirstDiv.style.display="block";
    body.style="background-color: #e30010";
    LastOneDiv.style.display="block";
    
};

First.onclick=function(){
    SecondDiv.style.display="block";
    body.style="background-color: #e64004";
    LastTwoDiv.style.display="block";
    
};



/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/


