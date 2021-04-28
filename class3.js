function addToList() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(product + " ($" + price + ")"));
    if(productForm.productName.value.toUpperCase() ==="strawberries".toUpperCase()){
        li.style.color = "red";
    }
    document.getElementById("userList").appendChild(li);
    // alert(productForm.productName.value);
    productForm.productName.value = "";
}