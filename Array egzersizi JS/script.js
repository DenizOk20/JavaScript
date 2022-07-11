const araba = ["Volvo","Mercedes","BMW"]; 
console.log(araba);

// 1- Dizi eleman sayısı

console.log(araba.length);

// 2- dizini ilk ve son elemanı

console.log(araba[0]); // ilk
console.log(araba[araba.length -1]); // son


// 3- Volvo araba dizisinde var mı ?

console.log(araba.includes("Volvo"));

// 4- liste sonuna Renault ekle.

    araba.push("Renault");
    console.log(araba);

// 5- Son 3 elemanı sil.

    araba.splice(araba.length -3);
    console.log(araba);

// 6- araba1 = ["Ferrari","Toyota","Honda"]; dizisi ile araba dizisini birleştir.
    araba1 = ["Ferrari","Toyota","Honda"];
    console.log(araba.concat(araba1));

// 7- aşağıdaki diziden her öğrencinin yaşını hesaplayın. 
    

    const öğrenci1 = [isim1 = 'Deniz Ök', doğum1 = 2002, not1 =[80,90] ];
    const Öğrenci2 = [isim2 = 'Naim Kabakçı', doğum2 = 2002, not2 =[70,80] ];
    const Öğrenci3 = [isim3 = 'Ali Doğan', doğum3 = 2004, not3 =[65,50] ];

    const öğrenciler = [öğrenci1,Öğrenci2,Öğrenci3];
   
    const now = new Date().getFullYear();
   
    const yaş1 = now - öğrenciler[0][1];
    console.log(yaş1);
   
    const yaş2 = now - öğrenciler[1][1];
    console.log(yaş2);
   
    const yaş3 = now - öğrenciler[2][1];
    console.log(yaş3);

    // not ortalamasını hesapla.

    console.log((ort1 = öğrenciler[0][2][0] + öğrenciler[0][2][1]) /2);
    console.log((ort1 = öğrenciler[1][2][0] + öğrenciler[1][2][1]) /2);
    console.log((ort1 = öğrenciler[2][2][0] + öğrenciler[2][2][1]) /2);





    

    

    
    



