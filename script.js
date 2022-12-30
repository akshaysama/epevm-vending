const baseURL = 'https://epevm.onrender.com/api'

let itemCount = 1;
function addItemCount() {
    if (itemCount + 1 > 5) {
        alert('Item count cannot exceed 5');
        return;
    }
    let a = 20;
    let b = 20;

    b += itemCount * a;
    itemCount += 1;
    document.getElementById("itemCount").innerHTML = itemCount;
    document.getElementById("items").innerHTML = itemCount;
    document.getElementById("total-amount").innerHTML = `Rs ${b}`;
}

function decItemCount() {
    if (itemCount - 1 < 1) {
        return;
    }

    var a = 20;
    var b = itemCount * a;
    b -= a;
    itemCount -= 1;
    document.getElementById("itemCount").innerHTML = itemCount;
    document.getElementById("items").innerHTML = itemCount;
    document.getElementById("total-amount").innerHTML = `Rs ${b}`;
}


function removeitem() {
    var b = 20;
    document.getElementById("itemCount").innerHTML = 1;
    document.getElementById("items").innerHTML = 1;
    document.getElementById("total-amount").innerHTML = `Rs ${b}`;

}

(async function () {
    const url_string = window.location.href;
    const url = new URL(url_string);
    const itemId = url.searchParams.get("itemId");
    // console.log('selected item', itemId);

    const productDetails = await getProductDetails(itemId);
    let a = productDetails.price;
    document.getElementById("image").src = productDetails.imag;
    document.getElementById("title").innerHTML = productDetails.name;
    document.getElementById("subteitl").innerHTML = productDetails.slug;
    document.getElementById("amount").innerHTML = `Rs ${productDetails.price}`;
    document.getElementById("subte").innerHTML = `${productDetails.quantity}`;

    document.getElementById("deno").innerHTML = `Rs ${productDetails.price}`;
    if(productDetails.quantity===0){
        alert("Out of Stock");
        const press = document.getElementById("button") ;
        press.disabled=true;
        document.getElementById("button").style.background="silver";


    }



})();

async function getProductDetails(productId) {
    const product = await fetch(`${baseURL}/products/${productId}`);
    const productDetails = await (product).json();
    return productDetails;
}
