// Kendisine gelen kelimeyi istenilen sayıda ekrana yazdıran fonksiyon.

function Yazdır(kelime,n){
    for(var i = 0; i<n;i++){
        console.log(kelime);
    }
}

Yazdır("Deniz",5);
console.log("***************");

// Dikdörtgen ve karenin alanını ve çevresini hesaplayan fonksiyonu giriniz.

function Alan(kenar1,kenar2){

    console.log(kenar1*kenar2);
}
Alan(5,6);
console.log("***************");

function Çevre(kenar1,kenar2){
    console.log((kenar1 + kenar2)*2);
}
Çevre(3,5);

console.log("***************");

// yazı tura uygulamasını fonksiyonla yapınız.
function YazıTura(){

    let random = Math.random(); // 0-1 arası sasyı üretir.
    if(random > 0.5){
        console.log("Yazı");
    }
    else{
        console.log("Tura");
    }
}
YazıTura();

console.log("***************");

// gelen sayıyın tam bölenlerini dizi elemanı yapan fonksiyon.

function TamBölen(x){
    const Sayılar = [x];
    a = 0;
    for(i=1;i<=x;i++){
        if(x%i == 0){
            Sayılar[a] = i;
            a++;
        }
    }
    console.log(Sayılar);
}
TamBölen(145);

console.log("***************");


// Değişken sayıda parametre alan toplam isminde fonksiyon yazınız.

function Toplam(){
    let toplam = 0;
    for(i = 0;i<arguments.length;i++){
        toplam+= arguments[i];
    }
    console.log(toplam);
}

Toplam(2,4,5,2);