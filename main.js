let plus = document.querySelectorAll('.left span:nth-child(1)');
let minus = document.querySelectorAll('.left span:nth-child(3)');
let numSpan1 = document.querySelector('.num1');
let numSpan2 = document.querySelector('.num2');
let numSpan3 = document.querySelector('.num3');
let numSpan4 = document.querySelector('.num4');

let num1 = 12;
let num2 = 5;
let num3 = 4;
let num4 = 2;

plus[0].onclick=()=>{
    num1++;
    numSpan1.innerHTML= num1;
}
plus[1].addEventListener('click',()=>{
    num2++;
    numSpan2.innerHTML = num2;
})
plus[2].onclick = ()=>{
num3++;
numSpan3.innerHTML = num3;
}
plus[3].onclick = ()=>{
num4++;
numSpan4.innerHTML = num4;
}
minus[0].onclick =()=>{
if(num1 > 0){
num1--;
}
numSpan1.innerHTML= num1; 
}
minus[1].onclick = ()=>{
if(num2 > 0){
num2--;
}
numSpan2.innerHTML= num2; 
}
minus[2].onclick = ()=>{
if(num3 > 0){
num3--;
}
numSpan3.innerHTML= num3; 
}
minus[3].onclick = ()=>{
if(num4 > 0){
num4--;
}
numSpan4.innerHTML= num4; 
}


