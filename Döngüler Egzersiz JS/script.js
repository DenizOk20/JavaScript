const sayılar = [1,5,8,13,25];

// Her elemanın karesini hesapla.

for(var i = 0;i<sayılar.length;i++){
    const karesi = sayılar[i] * sayılar[i];
    console.log(sayılar[i] + " karesi: " + karesi);
}

console.log("********************");
// hangi sayılar 5'in katı hesapla.

for(i = 0;i<sayılar.length;i++){
    if(sayılar[i] % 5 == 0){
        console.log(sayılar[i]+ " sayısı 5'in katıdır. ");
    }
}

console.log("********************");

// tek sayıların toplamını bul.
var toplam = 0;
for(i = 0;i<sayılar.length;i++){
    if(sayılar[i] %2 != 0){
        toplam = toplam + sayılar[i];
    }
}
console.log("Tek sayıların toplamı: " + toplam);

console.log("********************");


const meyveler = ["Elma","Kiraz","Erik","Üzüm"];

// meyveleri büyük harfle yazdır.

for(i=0;i<meyveler.length;i++){
    console.log(meyveler[i].toUpperCase());
}

const çalışan =[
    {"ad":"Deniz","soyad":"Ök","maaş_saat":[10000,40]},
    {"ad":"Naim","soyad":"Kabakçı","maaş_saat":[8000,40]},
    {"ad":"Enes","soyad":"Kaya","maaş_saat":[9000,40]}
]

console.log("********************");


// çalışanların isimleri ve maaşlarını gösterin. 

for(let işçi of çalışan){
    console.log("isim: " +işçi.ad + " soyad: " + işçi.soyad + " Maaşı: "+ işçi.maaş_saat[0] );
}

console.log("********************");

// Her çalışanın saat başı aldığı ücreti hesaplayın.

for(let ücret of çalışan){
    console.log("isim: " +ücret.ad + " soyad: " + ücret.soyad + " Saat başı ücreti: "+ (ücret.maaş_saat[0] / ücret.maaş_saat[1]));
}