// 1-masala. 1. Kubning hajmini topadigan algoritm yozing.
var son = 3;
var kubHajmi = son * son * son;
console.log("1. Kub hajmi: " + kubHajmi);

// 2-masala
var son = 4;
var kub = son * son * son;
console.log("2. Berilgan sonning kubi: " + kub);

// 3-masala
var num1 = 7;
var num2 = 5;
var total = num1 + num2;
var square = total * total;
console.log("3. Yig'indi kvadrati: " + square);

// 4-masala
var num = 678;
var onlar = Math.floor((num % 100) / 10);
console.log("4. O'nlar xonasidagi son: " + onlar);

// 5-masala
var son = 876;
var birlik = son % 10;
var onlik = Math.floor(son / 10);
var yigindisi = birlik + onlik;
console.log("5. Raqamlari yig'indisi: " + yigindisi);

// 6-masala
var son = 789;
var yuzlar = Math.floor(son / 100);
console.log("6. Yuzlar xonasidagi raqam: " + yuzlar);

// 7-masala
var length = 5;
var eni = 3;
var height = 8;
var tolaSirti = 2 * (length * eni + length * height + eni * height);
console.log("7. Paralelepipedning to'la sirti: " + tolaSirti);