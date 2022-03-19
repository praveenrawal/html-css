var headone = document.querySelector("#one") ;
headone.addEventListener('mouseover',function(){
    headone.textContent = "Mouse currently over!"
    headone.style.color = "red";
})

headone.addEventListener("mouseout",function(){
    headone.textContent = "Hover over me!";
    headone.style.color = "black";
})

headone.addEventListener('click',function(){
    headone.textContent = "Currently Mouse Click"
    headone.style.color = "green";
})