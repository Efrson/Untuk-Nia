const pages=[...document.querySelectorAll('.page')];
const show=n=>{pages.forEach(p=>p.classList.remove('active'));document.getElementById('page'+n).classList.add('active');}
btn1.onclick = () => {

    document.getElementById("bgm").play();

    show(2);

}
btn2.onclick=()=>show(3);
btn3.onclick=()=>show(4);
btn4.onclick=()=>{show(5);typeQ();}
const text='Maukah Nia menjadi\nPacarku? ❤️';
function typeQ(){let i=0;finalQuestion.textContent='';yesButton.style.display='none';(function t(){if(i<text.length){finalQuestion.textContent+=text[i++];setTimeout(t,70);}else{yesButton.style.display='inline-block';}})();}
yesButton.onclick = () => {

    createPetals();

    confetti({
        particleCount: 180,
        spread: 120,
        origin: { y: 0.6 }
    });

    yesButton.disabled = true;
    yesButton.innerHTML = "❤️";

    setTimeout(() => {

        document.body.innerHTML = `

        <div style="
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            background:#07111f;
            color:white;
            font-family:'Segoe UI';
            text-align:center;
        ">

            <h1 style="font-size:70px;">❤️</h1>

            <h2>Terima kasih Princess sudah menerima aku.</h2>

        </div>

        `;

    },3000);

};
function createPetals(){

    for(let i=0;i<50;i++){

        const petal=document.createElement("div");

        petal.className="petal";

        petal.innerHTML="🌹";

        petal.style.left=Math.random()*100+"vw";

        petal.style.animationDuration=(4+Math.random()*3)+"s";

        petal.style.fontSize=(18+Math.random()*18)+"px";

        document.body.appendChild(petal);

        setTimeout(()=>{

            petal.remove();

        },7000);

    }

}