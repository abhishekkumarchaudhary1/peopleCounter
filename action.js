const inc_btn=document.getElementById('inc_btn');
const dec_btn=document.getElementById('dec_btn');
let counter=document.getElementById('counter');

inc_btn.addEventListener('click',()=>{
    increment();
});

dec_btn.addEventListener('click',()=>{
    decrement();
});

increment=()=>{
    counter.innerHTML++;
    document.getElementById('message').innerHTML='A peaceful program😊';
}
decrement=()=>{
    if(counter.innerHTML=='0'){
        document.getElementById('message').innerHTML='People cannot be negative you dumbo😠';
    }
    else{
        counter.innerHTML--;
    }
}




