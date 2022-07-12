const Sipariş1 = {
    id:22,
    tarih: "12.07.2002",
    ödeme: "Kredi Kartı",
    adres:  {mahalle: "Dere Mahalle",
            ilçe: "Tavas",
            şehir: "Denizli"},
    ürünler: [
        {
            ürün_id:1,
            ürün_adı:"Lenovo K6 Lite",
            ürün_fiyat: 5000
        },
        {
            ürün_id:2,
            ürün_adı:"Iphone 12",
            ürün_fiyat: 15000
        }
    ]
}

const Sipariş2 = {
    id:23,
    tarih: "12.07.2002",
    ödeme: "Banka Kartı",
    adres:  {mahalle: "Demirci Mahalle",
            ilçe: "Tavas",
            şehir: "Denizli"},
    ürünler: [
        {
            ürün_id:4,
            ürün_adı:"Samsung LCD Televizyon",
            ürün_fiyat: 8600
        },
        {
            ürün_id:3,
            ürün_adı:"Iphone 13 Pro",
            ürün_fiyat: 20000
        }
    ]
}

// Siparişlere %9 kdv oranı ekle.
const Sipariş1_kdv = (Sipariş1.ürünler[0].ürün_fiyat + Sipariş1.ürünler[1].ürün_fiyat) *(1.09); 
const Sipariş2_kdv = (Sipariş2.ürünler[0].ürün_fiyat + Sipariş2.ürünler[1].ürün_fiyat) *(1.09);
 
// her sipariş kaç TL oldu ?

console.log("Sipariş 1 tutar:" + Sipariş1_kdv);
console.log("Sipariş 2 tutar:" + (Sipariş2_kdv));

// ödeme yöntemi kredi kartıysa kaç ay taksit seçeneği vardır? tutar 25.000 den yüksekse 36 ay taksit daha az ise 16 ay taksit imkanı var. Her ay kaç TL ödenir?

if (Sipariş1.ödeme == "Kredi Kartı" && Sipariş1_kdv >= 25000){
    console.log("Sipariş 1 için 36 ay taksit imkanı vardır. Aylık ödenecek tutar:" + (Sipariş1_kdv/36)+ " TL");
}
else if (Sipariş1.ödeme == "Kredi Kartı" && Sipariş1_kdv < 25000){
    console.log("Sipariş 1 için 16 ay taksit imkanı vardır. Aylık ödenecek tutar:" + (Sipariş1_kdv/36)+ " TL");
}
else{
    console.log("Sipariş 1 için Taksit imkanı yoktur.");
}

if (Sipariş2.ödeme == "Kredi Kartı" && Sipariş2_kdv >= 25000){
    console.log("Sipariş 2 için 36 ay taksit imkanı vardır. Aylık ödenecek tutar:" + (Sipariş2_kdv/36)+ " TL");
}
else if (Sipariş2.ödeme == "Kredi Kartı" && Sipariş2_kdv < 25000){
    console.log("Sipariş 2 için 16 ay taksit imkanı vardır. Aylık ödenecek tutar:" + (Sipariş2_kdv/36)+ " TL");
}
else{
    console.log("Sipariş 2 için Taksit imkanı yoktur.");
}