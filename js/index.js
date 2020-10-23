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



function calculateAll(event) {
  let products = document.querySelectorAll('.product')

  let grandTotal = 0
  for (let product of products) {
    let price = Number(product.querySelector(".price span").innerText);
    let quantity = Number(product.querySelector(".quantity input").value);
    let subtotal = price * quantity;
    product.querySelector(".subtotal span").innerHTML = subtotal;
    grandTotal += subtotal
  }
  console.log('grandTotal', grandTotal)
  document.querySelector("#total-value span").innerHTML = grandTotal
}
// document.querySelector('.btn-remove').onclick = removeProduct;

let removeBtns = document.querySelectorAll('.btn-remove')
for (let removeBtn of removeBtns) {
  removeBtn.onclick = removeProduct;
}
function removeProduct(event) {
  console.log(event.target, this);
  this.parentNode.parentNode.remove()
  console.log('removeProduct');
  calculateAll()
}

