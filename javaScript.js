var togglebtn = document.getElementById( 'checkbox');

let count = 0;

togglebtn.addEventListener("click", function(){
    if(count % 2==0){
        count++;
        document.body.style.backgroundColor="black";
    }else {
        count--;
        document.body.style.backgroundColor="white";
    }
})




