function taxCalculator(){
    var productName=(prompt("Enter Product Name:"));
    var quantity=(prompt("Enter How Many:"));
    var price=(prompt("Enter the Price (no $)"));

    document.getElementById("results").innerHTML=
        `<p>${quantity}  ${productName} will cost $${quantity*price*1.08} with Tax (Round up to .00).</p>`; //sorry I tried to find a way to round it in the result
       
}