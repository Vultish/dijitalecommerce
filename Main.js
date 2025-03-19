//ilk main sayfasında mesaj verildi
let mesaj = 
`
    Migros'a hoşgeldiniz.
    Money Kartınız varmı ?
    1-Evet
    2-Hayır

`;

const urunler =[
    {
        urunIsmi :"süt",
        fiyat :40
    },
    {
        urunIsmi :"bebek bezi",
        fiyat :500
    },
    {
        urunIsmi :"Kuşbaşı",
        fiyat :600
    },
]


let sonuc = confirm(mesaj);
let odenecekTutar

if(sonuc){
    let isim = prompt("adınızı giriniz");
    let soyisim =prompt("soyisiminiziz giriniz");

    const musteri= new Musteri(isim,soyisim,sonuc,urunler);
     odenecekTutar = musteri.hesapla();

    alert(`müşteri bilgileri: ${isim} ${soyisim}
        Ödenecek Tutar : ${odenecekTutar}`);
}else{
    const musteri = new Musteri(null,null,sonuc,urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödencek Tutar :  ${odenecekTutar}`);
}