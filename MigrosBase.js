class MigrosBase{
    indirimOrani = 5;
    constructor(isim,soyisim,kartVarmi,urunler){
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;
    }
    hesapla(){
        let odenecekTutar=0;
        if(this.urunleriKontrolEt(this.urunler)){
            //sepetim dolu
            if(this.kartVarmi){
                //kartı vardır
                this.urunler.forEach((urun)=>{
                    odenecekTutar += (urun.fiyat*(100-this.indirimOrani))/100;
                })
            }else{
                //yoktur
                this.urunler.forEach((urun)=>{
                    odenecekTutar += urun.fiyat;
                })
            }
    }else{
        alert("Urunler bos olamaz");
    }
    return odenecekTutar;
    }

    urunleriKontrolEt(urunler){
        if(urunler!=null && urunler.length>0){
            return true;
        }
        return false;
    }
}