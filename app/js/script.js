let products = [
    {
        name: "Iphone 12",
        price: 799,
        incart: 0
    },
    {
        name: "Ipad pro",
        price: 999,
        incart: 0
    },
    {
        name: "Apple Watch",
        price: 399,
        incart: 0
    },
    {
        name: "Macbook Air",
        price: 899,
        incart: 0
    },
    {
        name: "Airpods pro",
        price: 399,
        incart: 0
    },
    {
        name: "Imac",
        price: 1399,
        incart: 0
    }
]

var totalCost = 0;
var noOfItems = 0;
var addToCart = document.querySelectorAll(".addToCart");
var cart = document.querySelectorAll(".cartItem");
var removebt = document.querySelectorAll(".removebtn");


for(let i = 0; i < 6; i++){
    addToCart[i].addEventListener('click', function(){
        noOfItems++;
        totalCost += products[i].price;
        if(noOfItems == 1){
            document.querySelector('.cart').classList.remove('none');
        }
        products[i].incart++;
        if(products[i].incart == 1){
            cart[i].classList.remove('none');
            document.querySelectorAll('.quantity')[i].innerHTML = products[i].incart;
        }else{
            document.querySelectorAll('.quantity')[i].innerHTML = products[i].incart;
        }
        document.querySelector('.totalCost').innerHTML = "$" + totalCost;
    })
    removebt[i].addEventListener('click', function(){
        noOfItems--;
        totalCost -= products[i].price;
        if(noOfItems == 0){
            document.querySelector('.cart').classList.add('none');
        }
        products[i].incart--;
        if(products[i].incart == 0){
            cart[i].classList.add('none');
        }else{
            document.querySelectorAll('.quantity')[i].innerHTML = products[i].incart;
        }
        document.querySelector('.totalCost').innerHTML = "$" + totalCost;
    })
}