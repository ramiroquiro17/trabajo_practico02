const product = [
    {
        id: 0,
        img: 'img/bici.jpg',
        title: 'Bicicleta Trek Mtb X-caliber 9 R29 Talle Xl',
        price: 120,
    },
    {
        id: 1,
        img: 'img/bici.jpg',
        title: 'Bicicleta Trek Mtb X-caliber 9 R29 Talle Xl',
        price: 60,
    },
    {
        id: 2,
        img: 'img/bici.jpg',
        title: 'Bicicleta Trek Mtb X-caliber 9 R29 Talle Xl',
        price: 230,
    },
    {
        id: 3,
        img: 'img/bici.jpg',
        title: 'Bicicleta Trek Mtb X-caliber 9 R29 Talle Xl',
        price: 100,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {img, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${img}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Añadir al carro</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Tu carro está vacío";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {img, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${img}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

}