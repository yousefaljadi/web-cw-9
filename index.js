let products = [
    {name: "Brulee", price: 500},
    {name: "Orea", price: 750},
    {name: "Dates", price: 1000}
]

let productAddin = []

function addProduct(index){
    productAddin.push(products[index])
 


    document.getElementById("myCart").innerHTML = ``

    var total =0;

    for(i=0; i<productAddin.length ; i++){
        console.log(productAddin[i].name);
        document.getElementById("myCart").innerHTML += `<li>${productAddin[i].name}  ${productAddin[i].price/1000} kd </li>`
        total = total + (productAddin[i].price/1000)
        document.getElementById("total").innerText= `${total} kd`
    }
   
}