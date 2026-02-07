function newPrice(currentPrice,discount){
    if((typeof currentPrice !== "number") || (typeof discount !== "number")){
        return "Invalid";
    }
    if(discount < 0 || discount > 100){
        return "Invalid";
    }
    let discountAmount = 0;
    discountAmount = (currentPrice * discount);
    let  finalAmount= discountAmount / 100;

    let finalPrice = currentPrice - finalAmount;

    return finalPrice.toFixed(3);
}
