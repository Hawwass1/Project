
const likee1 = document.getElementById("like1")
const likee2 = document.getElementById("like2")
const likee3 = document.getElementById("like3")
const likee4 = document.getElementById("like4")
const likee5 = document.getElementById("like5")

const dropdowns = document.getElementById('icon1')
const dropdown2 = document.getElementById('icon2')
const dropdown3 = document.getElementById('icon3')
const dropdown4 = document.getElementById('icon4')
const dropdown5 = document.getElementById('icon5')

 
const d = document.getElementById("it")

function dr(){
    dropdowns.style.display = "none"
    dropdown2.style.display = "none"
    dropdown3.style.display = "none"
    dropdown4.style.display = "none"
    dropdown5.style.display = "none"
} 

function drop(){
    dropdowns.style.display = "block"
    dropdown2.style.display = "none"
    dropdown3.style.display = "none"
    dropdown4.style.display = "none"
    dropdown5.style.display = "none"
}

function drop2(){
    dropdown2.style.display = "block"
    dropdowns.style.display = "none"
    dropdown3.style.display = "none"
    dropdown4.style.display = "none"
    dropdown5.style.display = "none"
}

function drop3(){
    dropdown3.style.display = "block"
    dropdowns.style.display = "none"
    dropdown2.style.display = "none"
    dropdown4.style.display = "none"
    dropdown5.style.display = "none "
}

function drop4(){
    dropdown4.style.display = "block"
    dropdowns.style.display = "none"
    dropdown2.style.display = "none"
    dropdown3.style.display = "none"
    dropdown5.style.display = "none"
}

function drop5(){
    dropdown5.style.display = "block"
    dropdowns.style.display = "none"
    dropdown3.style.display = "none"
    dropdown4.style.display = "none"
    dropdown2.style.display = "none"
}

function likee(){
    likee1.style.color = "red"
}
function likeeii(){
    likee2.style.color = "red"
}
function likeeiii(){
    likee3.style.color = "red"
}
function likeeiv(){
    likee4.style.color = "red"
}
function likeev(){
    likee5.style.color = "red"
}
