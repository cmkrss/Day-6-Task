class uber {
    constructor(DefaultPrice,KM,Price){
        this.DefaultPrice = DefaultPrice;
        this.KM = KM;
        this.Price = Price;
    }
    get Uber(){
        return (this.DefaultPrice + ((this.KM) * this.Price) +" Rs.");
    }
}
var U = new uber(50,3,10);
console.log(U.Uber);



