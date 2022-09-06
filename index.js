// Adding .textContent to the "header" element
var newH1 = document.createElement("h1")
newH1.textContent = "JavaScript Made This!!"
var myHeader = document.getElementById("header")
myHeader.prepend(newH1)


var subtitle = document.createElement("h3")
subtitle.innerHTML = '<h3><span  class = "name">Michael Gaynor</span> wrote the JavaScript</h3>';
document.getElementById("header").appendChild(subtitle);

//Get all elements that have a class of 'message', and chainging the .textContent:
const textLeftOne = document.getElementsByClassName("message left")[0]
textLeftOne.textContent = 'Let me tell you about this awesome coding bootcamp V School!!'

const textRightOne = document.getElementsByClassName("message right")[0]
textRightOne.textContent = "Coding bootcamp? That sounds intersting tell me more."

const textLeftTwo = document.getElementsByClassName("message left")[1]
textLeftTwo.textContent = "well it is very intense, and perpares you for real world web developnment experience. "

const textRightTwo = document.getElementsByClassName("message right")[1]
textRightTwo.textContent = "Wow !!! send me the website link I want to sign up now !!!"


// Removing all the text when you click the clear button

let btnClear = document.getElementById("clear-button")
let inputs = document.querySelector('.messages')
console.log(inputs)
btnClear.addEventListener('click',function(){
    inputs.textContent=""
})
