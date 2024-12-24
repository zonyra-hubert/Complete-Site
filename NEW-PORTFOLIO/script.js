function hamburg(){
    const navbar = document.querySelector(".dropdown")
navbar.style.transform = "translateY(0px)"

}

function cancel(){
    const navbar = document.querySelector(".dropdown")
navbar.style.transform = "translateY(-500px)"

}

//Typewriter Effect

const texts = [
    "DEVELOPER",
    "DESIGNER",
    "STUDENT",
]

let speed = 100;
const texElements = document.querySelector(".typewriter-text");

let textIndex  = 0;
let characterIndex = 0;
function typewriter(){
    if (characterIndex < texts[textIndex].length){
        texElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typewriter, speed)
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(texElements.innerHTML.length > 0){
        texElements.innerHTML = texElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typewriter, 500)
    }
}


 window.onload = typewriter
