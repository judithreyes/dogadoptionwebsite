let likeDogs = prompt ('Do you like dogs?');

document.write(likeDogs)

if (likeDogs == 'yes'){
    document.write('<h3>' + 'Welcome, dog lover!' + '</h3');

} else if (likeDogs != 'yes') {
    document.write('<h3>' + 'You must be a cat lover' + '</h3>')

} 

let correctAnswer = 28;


function guessingGame(){
    let userAnswer = prompt('Please select a number 1 - 40');
    while (userAnswer < 1 || userAnswer > 40){
        userAnswer = prompt('Incorrect.  Please select a number 1 - 40');
    }
    let numberOfGuesses = 8
    for(let i = 0; i < numberOfGuesses; i++){
        if (userAnswer == correctAnswer){
            alert('Good Job, you guessed the right number');
            break;
        } else if (userAnswer < correctAnswer){
            alert('Sorry, too low');
            userAnswer = prompt('Please select a number 1 - 40');
        } else if (userAnswer > correctAnswer){
            alert('Sorry, too high');
            userAnswer = prompt('Please select a number 1 - 40');
        }
    }
}

function addImage() {
    var numberOfDogs = prompt("How many dogs do you want to adopt?");
    for (var i = 0; i < numberOfDogs; i++) {
        console.log (i)
        document.write('<img src="doge.jpgyes" width="100" height="100">'); }
                
}
guessingGame() 
addImage()

