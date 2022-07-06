let car1 = "BMW";
let car2 = "Mercedes";

let car1_enginePower = 250;
let car1_price = 450.000;
let car1_fast = 180;
let car1_point = 0;

let car2_enginePower = 220;
let car2_price = 400.000;
let car2_fast = 210;
let car2_point = 0;

if(car1_enginePower > car2_enginePower){
    car1_point++;
}
else{
    car2_point++;
}

if(car1_price > car2_price ){
    car2_point++;
}
else{
    car1_point++;
}

if(car1_fast > car2_fast ){
    car1_point++;
}
else {
    car2_point++
}

console.log( "car1 puanı: " + car1_point);
console.log("car2 puanı: " + car2_point);

if (car1_point > car2_point){
    console.log("car1 daha uygun.");
}
else if(car1_point == car2_point){
    console.log("iki arabanın da avantajlı yönleri var.")
}
else{
    console.log("car2 daha uygun.");
}


