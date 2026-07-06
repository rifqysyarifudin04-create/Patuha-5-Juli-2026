// ===============================
// Pendakian Gunung Patuha
// script.js
// ===============================

// Tombol Mulai
const startBtn = document.getElementById("startBtn");
const story = document.getElementById("story");

startBtn.addEventListener("click", () => {

    story.scrollIntoView({
        behavior: "smooth"
    });

    // Putar musik jika ada
    const music = document.getElementById("music");
    if (music) {
        music.play().catch(() => {});
    }

});

// ===============================
// Slideshow
// ===============================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

setInterval(()=>{

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

},3000);

// ===============================
// Reveal saat Scroll
// ===============================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.15
});

hiddenElements.forEach(el=>{
    observer.observe(el);
});

// ===============================
// Tombol Terima Kasih
// ===============================

const loveBtn = document.getElementById("loveBtn");

loveBtn.addEventListener("click",()=>{

createConfetti();

document.getElementById("popup").classList.add("show");

});

function closePopup(){

document.getElementById("popup").classList.remove("show");

}

// ===============================
// Confetti
// ===============================

function createConfetti(){

    for(let i=0;i<120;i++){

        const confetti=document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.animationDuration=
        (Math.random()*3+2)+"s";

        confetti.style.background=
        `hsl(${Math.random()*360},80%,60%)`;

        confetti.style.width=
        Math.random()*8+6+"px";

        confetti.style.height=
        Math.random()*14+8+"px";

        document.body.appendChild(confetti);

        setTimeout(()=>{
            confetti.remove();
        },5000);

    }

}

// ===============================
// Tambah Style Confetti
// ===============================

const style=document.createElement("style");

style.innerHTML=`

.confetti{

position:fixed;

top:-20px;

border-radius:3px;

pointer-events:none;

animation:fall linear forwards;

z-index:9999;

}

@keyframes fall{

0%{

transform:
translateY(-20px)
rotate(0deg);

opacity:1;

}

100%{

transform:
translateY(110vh)
rotate(720deg);

opacity:0;

}

}

`;

document.head.appendChild(style);

// ===============================
// Efek Ketik
// ===============================

const typing = document.querySelector(".typing");

if(typing){

const text = typing.textContent;

typing.textContent="";

let i=0;

function typeEffect(){

    if(i<text.length){

        typing.textContent += text.charAt(i);

        i++;

        setTimeout(typeEffect,40);

    }

}

setTimeout(typeEffect,800);

}

// ===============================
// MUSIC BUTTON
// ===============================

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        musicBtn.innerHTML="🎶";

        musicBtn.classList.add("playing");

    }else{

        music.pause();

        musicBtn.innerHTML="🎵";

        musicBtn.classList.remove("playing");

    }

});