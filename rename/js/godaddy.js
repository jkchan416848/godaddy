var div2 = document.getElementById("div_2")
var num = document.getElementById("num")

num.addEventListener("click",()=>{
    if(div2.style.display == "none"){
        div2.style.display = "block"
        div3.style.display = "none"
    }
    else{
        div2.style.display = "none"
       
    }
})
var sign = document.getElementById("Sign")
var div3 = document.getElementById("div_3")
sign.addEventListener("click",()=>{
    if(div3.style.display == "none"){
        div3.style.display = "block"
        div3.style.display = "fixed"
        div2.style.display = "none"
    }
    else{
        div3.style.display = "none"
        
    }
})
var button5 = document.getElementsByClassName("button5")
var but5 = document.getElementById("but5")
function func(){
    if(but5.style.display == "none"){
        but5.style.display = "inline-block"
    }
    else{
        but5.style.display = "none"
    }
}