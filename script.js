const messages = [
"Suamiku...",
"Aku tau aku udah bikin kamu kecewa.",
"Aku benar-benar minta maaf atas semuanya.",
"Aku ga pernah ada niatan bikin kamu ngerasa kaya gini.",
"Kamu itu sangat berarti buat aku.",
"Aku gamau kehilangan kamu 🥺",
"Aku sayang kamu, sayang banget ❤️",
"Kasih aku kesempatan yaa. Please trust me, Aku akan berusaha memperbaiki semuanya. Aku mau buktiin kamu layak dicintai dan dihargai. I WILL🥺"
]

let msgIndex = 0
let charIndex = 0

const text = document.getElementById("text")

function startLove(){

document.getElementById("intro").style.display="none"
document.getElementById("main").classList.remove("hidden")

document.getElementById("music").play()

typeText()

}

/* animasi ketik */

function typeText(){

if(charIndex < messages[msgIndex].length){

text.innerHTML += messages[msgIndex].charAt(charIndex)

charIndex++

setTimeout(typeText,60)

}else{

setTimeout(()=>{

text.innerHTML=""

msgIndex++
charIndex=0

if(msgIndex < messages.length){

typeText()

}else{

document.getElementById("tombol").classList.remove("hidden")

}

},2500)

}

}


/* tombol maaf */

function maafin(){

document.getElementById("main").classList.add("hidden")

document.getElementById("ending").classList.remove("hidden")

}


/* tombol kabur */

const tombolKabur = document.getElementById("kabur")

if(tombolKabur){

tombolKabur.addEventListener("mouseover",()=>{

const x = Math.random()*200-100
const y = Math.random()*200-100

tombolKabur.style.transform = `translate(${x}px,${y}px)`

})

}


/* animasi hati */

function createHeart(){

const heart=document.createElement("div")

heart.classList.add("heart")
heart.innerHTML="❤️"

heart.style.left=Math.random()*100+"vw"
heart.style.fontSize=Math.random()*20+10+"px"
heart.style.animationDuration=Math.random()*3+3+"s"

document.querySelector(".hearts").appendChild(heart)

setTimeout(()=>{

heart.remove()

},5000)

}

setInterval(createHeart,300)