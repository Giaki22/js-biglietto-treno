alert ("Avvio Programma TreniTaglia");
let numKm = prompt ("Inserire numero kilometri da percorrere");
let price = (numKm * 0.21);
let age = prompt ("Inserire età");
let finalPrice;
if (age > 0 && age <= 18){
    finalPrice = price-price*20/100;
}
else if (age >= 65 && age<110){
    finalPrice = price-price*40/100;
}
else{
    finalPrice = price
}
alert ("Il prezzo finale del biglietto è di " + finalPrice.toFixed(2) + "€");