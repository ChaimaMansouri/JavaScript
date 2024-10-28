//if   else
const score = 85;

if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 80) {
  console.log('Grade: B');
} else if (score >= 70) {
  console.log('Grade: C');
} else {
  console.log('Grade: F');
}


//switch
const color = 'blue';

switch (color) {
  case 'red':
    console.log('The color is red.');
    break;
  case 'blue':
    console.log('The color is blue.');
    break;
  case 'green':
    console.log('The color is green.');
    break;
  default:
    console.log('Unknown color.');
}

//condition ?
const isMember = true;
const discount = isMember ? 10 : 0;

console.log(`Discount: ${discount}%`);
