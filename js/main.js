// first Js for pic change
// onmouseover="src='images/tolearn.jpg'" onmouseout="src='images/c1.jpg'"

// const changeImg = document.getElementById("changeImg");

// changeImg.addEventListener('mouseover', doThis);

var clientName;


        function checkName(){
            clientName = prompt("Welcome! what is your name?");
            checkName = clientName.toLowerCase();
                if (clientName == "alice"){
                alert ("welcome " + clientName +" "+"we are happy to see you again");
           }else if(clientName == "bob"){
            alert ("welcome " + clientName +" "+"we are happy to see you again");
           } else alert("Welcome to our Landing Page!")
           
           prompt(clientName +" " + "we have few question for you. Check out to proceed when you reply OK")
            
           var answer;
          answer = prompt("4 < 410 true or false");
           if (answer == "true"){
               alert("Correct! Not a fake News. Very good" + " " + clientName + "." + " " + "Lets take the next question please")
           }else if(answer == "false"){
               alert("Oops! that was wrong" +" " + clientName + "." + " " + "Lets take the next question please");
           }

           var secondAnswer;
           secondAnswer = prompt("Which is the greatest between 5 and 6 ?");

           if (secondAnswer == 6){
               alert("Excellent! 6 is the greatest" +" " + clientName + "." + " " + "Lets take the next question please");
           } else if(secondAnswer != 6){
               alert("Poor! That's wrong" +" " + clientName + "." + " " + "Lets take the next question please")
           }

           var lastAnswer;
           lastAnswer = prompt("What is <=3 ?");
           if (lastAnswer <= 3){
               alert("Bravo! Thanks for your time of responses" + " " + clientName + "." + " " + "Javascript is Great!")
           } else if(lastAnswer > 3){
               alert("Shock miss! nice try"  + " " + clientName + "." + " " + "Javascript is Great!" )
           }

        }

        console.log (checkName());




function doThis(object, url){

    object.src=url;
    
    // onmouseover="src='images/tolearn.jpg'", onmouseout="src='images/c1.jpg'"
}

function change(jik){
    document.getElementById(jik).style.backgroundColor= "green"
    document.getElementById(jik).style.color="white";
    


}

function revert(normal){
    document.getElementById(normal).style.backgroundColor="white";
    document.getElementById(normal).style.color="black";

}

function mouseDown(size){
    document.getElementById(size).style.transform(scale)= 1.4
}
