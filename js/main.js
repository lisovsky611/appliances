function init() {
    $.getJSON("goods.json", goodsOut);
}

function goodsOut(data) {
    console.log(data);
    var out='';
    for (var key in data) {
        // out +='<div class="cart">';
        // out +='<p class="name">'+data[key].name+'</p>';
        // out += '<img src="images/'+data[key].img+'" alt="">';
        // out +='<div class="cost">'+data[key].cost+'</div>';
        // out +='<button class="add-to-cart">Купить</button>';
        // out +='</div>';
        //---------
        out +='<div class="cart">';
        out +=`<p class="name">${data[key].name}</p>`;
        out +=`<img src="images/${data[key].img}" alt="">`;
        out +=`<div class="cost">${data[key].cost}</div>`;
        out +='<button class="add-to-cart">Купить</button>';
        out +='</div>';
    }
    $('.goods-out').html(out);
}

$(document).ready(function () {
    init();
});
