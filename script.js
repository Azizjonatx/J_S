/* ism = prompt('Ismingizni yozing')
if (ism ==='Azizjon') {
    alert('Salom Boss');
}
else {
    alert('Salom mehmon');
} */
 

/* var yosh = prompt ('Yoshingiz nechchida?')
if (yosh >= 0 && yosh <= 18) {
    alert('Yoshsiz, O\'qishingiz kerak') ;
}
else if (yosh >=18 && yosh <=50) {
    alert('Ishlashingiz kerak');
}
else if (yosh >=50 && yosh <=59) {
    alert('Yaqinda pensiyaga chiqasiz');
}
else if (yosh >=59 && yosh <= 150)
    alert('Pensionerga o\'xshaysiz, hali tirik bo\'lsangiz :\)')
else {
    alert('Nimadur noto\'g\'ri ketdi')
} */

var firstNumber = +prompt('Hohlagan soningizni kiriting');
var secondNumber = +prompt('Hohlagan soningizni kiriting');
var thirdNumber = +prompt('Hohlagan soningizni kiriting');

if (firstNumber > secondNumber && firstNumber < thirdNumber /* && !isNaN(firstNumber) */ || firstNumber < secondNumber && firstNumber > thirdNumber /* && !isNaN(firstNumber) */ ) {
    alert(firstNumber);
}
else if (secondNumber > firstNumber && secondNumber < thirdNumber /* && !isNaN(secondNumber) */ || secondNumber < firstNumber && secondNumber > thirdNumber /* && !isNaN(secondNumber) */) {
    alert(secondNumber);
}
else if (thirdNumber > secondNumber && thirdNumber < firstNumber /* && !isNaN(thirdNumber) */ || thirdNumber < secondNumber && thirdNumber > firstNumber /* && !isNaN(thirdNumber) */) {
    alert(thirdNumber);
}
else {
    alert('Nimadur noto\'g\'ri ketdi')
}
