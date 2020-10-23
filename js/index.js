// document.querySelector("#calculate").onclick = function(event){
//   // let price = Number(document.querySelector(".price span").innerText)
//   // let quantity =  Number(document.querySelector(".quantity input").value)
//   // let subtotal = price * quantity;
//   // document.querySelector(".subtotal span").innerHTML = subtotal
//   let products = document.querySelectorAll('.product')


//   for(let product of products){
//     let price = Number(product.querySelector(".price span").innerText);
//     let quantity =  Number(product.querySelector(".quantity input").value);
//     let subtotal = price * quantity;
//     product.querySelector(".subtotal span").innerHTML = subtotal;
    
//   }
// }
document.querySelector("#calculate").onclick = calculateAll;



function calculateAll(event){
  let products = document.querySelectorAll('.product')


  for(let product of products){
    let price = Number(product.querySelector(".price span").innerText);
    let quantity =  Number(product.querySelector(".quantity input").value);
    let subtotal = price * quantity;
    product.querySelector(".subtotal span").innerHTML = subtotal;
    
  }
}
