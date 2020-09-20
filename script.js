/* ism = prompt('Ismingizni yozing')
if (ism ==='Azizjon') {
    alert('Salom Boss');
}
else {
    alert('Salom mehmon');
} */
 

var yosh = prompt ('Yoshingiz nechchida?')
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
}
