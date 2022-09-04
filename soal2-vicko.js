//JAWABN NOMER 2 - TUGAS CODE IMPLEMENTATION - VICKO MARIS SEPTIADI
// Demy membeli makanan menggunakan aplikasi PijarFood. Dimana terdapat 2 buah kode promo
// Promo ‘PIJARFOOD5’ dengan ketentuan pemesanan minimal
// 50rb akan mendapat diskon 50%, dengan maksimal
// potongan sebesar 50rb.
// - Promo ‘DITRAKTIRPIJAR’ dengan ketentuan pemesanan
// minimal 25rb akan mendapatkan diskon 60%, dengan
// maksimal potongan sebesar 30rb.
// - Jika tidak menggunakan kode promo ‘false’
// Untuk pengiriman sejauh 2km pertama akan dikenakan tarif 5rb,
// dan setiap satu kilometer selanjutnya dikenakan penambahan
// 3rb. Untuk beberapa restoran dikenakan pajak yakni 5% dari
// harga makanan yang dipesan (true), jika tidak dikenakan pajak (false)

// kodePromo1 = "PIJARFOOD5";
// kodePromo2 = "DITRAKTIRPIJAR";
let harga = 250000;
let promo = "PIJARFOOD5";
let jarak = 5;
let pajak = true;

let biayaAntar = 5000;
let potongan= 0; 

let pot1 = harga * 50 / 100 ;
    if(pot1 >= 50000){
        pot1=50000;
    };
let pot2 = harga * 60 / 100 ;
    if(pot2 >= 25000){
        pot2=30000;
    };

// promo
    if(promo == "PIJARFOOD5"){
        potongan=pot1;
    }else if(promo == "DITRAKTIRPIJAR"){
        potongan=pot2;
    }else{
        console.log("tidak menggunakan kode promo")
    };
    
//biaya antar
if(jarak <= 2){
    biayaAntar = 5000;
}
//console.log(biayaAntar);
else{
    for(let i = 3; i<=jarak; i++){
        biayaAntar = biayaAntar + 3000;
    }
}

//pajak
//let hitPajak = 0;
if(pajak == true){
    hitPajak = harga * 5 / 100;
}else{
    hitPajak = harga * 0;
}

let subTotal = harga - potongan + biayaAntar + hitPajak;

console.log("Total Harga : ", harga);
console.log("potongan", potongan);
console.log("Biaya Antar :", biayaAntar);
console.log("Pajak :", hitPajak);
console.log("Sub Total : ",subTotal);