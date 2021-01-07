let userName = prompt ('Please Enter Your Name');

document.write(userName)

if (userName == 'Judith'){
    document.write('<h3>' + 'Welcome Judith, dog lover' + '</h3');

} else if (userName != 'Judith') {
    document.write('<h3>' + 'Welcome Guest' + '</h3>')

} 
var today = new Date();
var hourNow= today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}
 