var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
console.log(color1.value);
var body=document.getElementById("body");

color1.addEventListener("input",function(){
	body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
	css.innerText=("color1 "+color1.value+" color2 "+color2.value);
});

color2.addEventListener("input",function(){
	body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
	css.innerText=("color1 "+color1.value+" color2 "+color2.value);
});

export const add=(a,b)=>a+b;
const multiply=(a,b)=>a*b;
