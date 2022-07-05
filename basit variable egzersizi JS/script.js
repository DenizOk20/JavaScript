let ogr1_Ad = "Deniz";
let ogr1_Soyad = "Ök";
let ogr1_dogum = "2009";
let ogr1_matematik = 90;
let ogr1_matematik2 = 70;
let ogr1_matematik3 = 80;



let ogr2_Ad = "Ali";
let ogr2_Soyad = "Aslan";
let ogr2_dogum = "2013";
let ogr2_matematik = 80;
let ogr2_matematik2 = 20;
let ogr2_matematik3 = 40;

let now = new Date().getFullYear();
let ogr1_yas = now - ogr1_dogum;
console.log(ogr1_yas);

let ogr2_yas = now - ogr2_dogum;
console.log(ogr2_yas);

let ogr1_ort = (ogr1_matematik + ogr1_matematik2 + ogr1_matematik3) /3;
console.log(ogr1_ort);

let ogr1_basarı = (ogr1_ort >= 50);
console.log(ogr1_basarı);
let ogr2_ort = (ogr2_matematik + ogr2_matematik2 + ogr2_matematik3) /3;
console.log(ogr2_ort);

let ogr2_basarı = (ogr2_ort >= 50);
console.log(ogr2_basarı);