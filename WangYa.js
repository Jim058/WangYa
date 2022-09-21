const submit = document.querySelector('.g1a2')
let count =  Array.from(document.querySelectorAll('.seleciton li input'))
let hidden_icon = document.querySelector('.hidden')
let cart = document.querySelector('.cart')


submit.addEventListener('click',function(){
    console.log(count)
    for(i=0;i<=count.length;i++){
        //檢查每項是否有被勾選
        if (count[i].checked == true){
            console.log(i + "is true")
        } else { return 0}
    }
})