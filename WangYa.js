const submit = document.querySelector('.g1a2')
let ff = Array.from(document.querySelectorAll('body div'))
let checked =  Array.from(document.querySelectorAll('.seleciton li .checkBox'))
let count =  Array.from(document.querySelectorAll('.seleciton li .count'))
let hidden_icon = document.querySelector('.hidden')
let cart = document.querySelector('.cart')
let cart_count = 0
let cart_ltem = []
const item_data = ['S','M','L','XL','2XL','3XL']


let cartPageClose = document.querySelector('.cartPage .close')


function newCart(){ //購物車頁面 
    if (cart_count <= 0 ){ //判斷是否已經有物品進入
        document.querySelector('.cartPage ul').innerHTML = '<h1> 目前還沒有任何商品 </h1>'
    } else {
        //如果大於 0 就會呼叫資料庫顯示商品內容
        
    }
}

newCart()

submit.addEventListener('click',function(){
    console.log(checked,count)
    for(i=0;i<checked.length;i++){
        //檢查每項是否有被勾選
        if (checked[i].checked == true){
            cart_count ++
            console.log(cart_count)
            cart.innerHTML = '<h2>' + cart_count +'</h2> ' 
            cart_ltem.push([item_data[i],count[i].value]) //將品項和數量以陣列方式儲存
            addCartList()
            checked[i].checked = false;
        } else {}
    }
    
})

function addCartList(){//在購物車內列出品項
    
    let cartItem = document.createElement('li')
    for(i=0;i<cart_ltem.length;i++){
        cartItem.textContent = '尺碼'+cart_ltem[i][0] +"    共"+ cart_ltem[i][1] +'件' 
        document.querySelector('.cartPage ul').appendChild(cartItem)
    }
}

cart.addEventListener('click',function(){ //主頁上打開購物車
    ff[3].classList.remove('hidden')
    newCart()
})

cartPageClose.addEventListener('click',function(){ //購物車頁面關閉
    ff[3].classList.add('hidden')
})