var allProducts = document.querySelectorAll(".Products li");
var btn1 = document.querySelectorAll("#showPrice")
var div1 = document.querySelector(".div1");
var div2 = document.querySelector(".div2");
var totalPrice =0;
allProducts.forEach(function(item){
  
    item.onclick = function(){
        totalPrice += +(item.getAttribute("price"));
        div1.innerHTML += item.textContent + " ";
     if (div1.innerHTML != " ") {
        btn1.forEach(function(x){
            x.style.display ="block"
           })
        
     }

       
    }
})
btn1.forEach(function(y) {
    y.onclick = function(){
        div2.innerHTML = totalPrice;
    }
    
})

/////////////////////

