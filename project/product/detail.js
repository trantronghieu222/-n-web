const filter_button = document.querySelectorAll('.btn');

Array.from(filter_button).forEach(function(button){      
    button.addEventListener('click',function(event){

        for(let i=0;i<filter_button.length;i++){
            filter_button[i].classList.remove('active');
        }
        this.classList.add('active');
    })
})


const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");
let a = 1;
plus.addEventListener("click", ()=>{
    a++;
    a = (a < 10) ? + a : a;
    num.innerText = a;
});
     
minus.addEventListener("click", ()=>{
    if(a > 1){
        a--;
        a = (a < 10) ? + a : a;
        num.innerText = a;
    }
});


//
function addproduct(){
    alert("Đã thêm sản phẩm vào giỏ hàng!")
}
     
