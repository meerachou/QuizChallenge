// quiz begins, no answers correct
var correct = 0;

// ask five questions
var answer1 = prompt('What day is it');
if ( answer1.toUpperCase() === 'TUESDAY') {
  correct += 1;
}
var answer2 = prompt('What is my favorite color?');
if ( answer2.toUpperCase() === 'RED') {
  correct += 1;
}
var answer3 = prompt('Do you love bunnies?');
if ( answer3.toUpperCase() === 'YES' || answer3.toUpperCase() === 'Y' ) {
  correct += 1;
}
var answer4 = prompt('Do you love brown bunnies?');
if ( answer4.toUpperCase() === 'YES' || answer4.toUpperCase() === 'Y' ) {
  correct += 1;
}
var answer5 = prompt('Do you love Peter Rabbit');
if ( answer5.toUpperCase() === 'YES' || answer5.toUpperCase() === 'Y' ) {
  correct += 1;
}

// output results
document.write('<p>You got ' + correct + ' out of 5 questions correct.</p>');

// output rank
if (correct === 5) {
  document.write('<p><strong>You earned a glod crown!</strong></p>');
} else if (correct >= 3) {
  document.write('<p><strong>You earned a silver crown!</strong></p>');
} else if (correct >= 1) {
  document.write('<p><strong>You earned a bronze crown!</strong></p>');
} else {
  document.write('<p><strong>Sorry, you lose the challenge.</strong></p>');
}