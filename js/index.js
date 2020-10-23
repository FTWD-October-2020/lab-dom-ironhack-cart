document.querySelector("#calculate").onclick = function(event){
  let price = Number(document.querySelector(".price span").innerText)
  let quantity =  Number(document.querySelector(".quantity input").value)
  let subtotal = price * quantity;
  document.querySelector(".subtotal span").innerHTML = subtotal
}