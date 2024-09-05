let Nobtn = document.querySelector(".no");
Nobtn.style.backgroundColor="red";

Nobtn.addEventListener("mousemove",function(details){
    // alert("Button clicked");
    r=Math.floor(Math.random()*200);
    l=Math.floor(Math.random()*300);
    Nobtn.style.position = 'absolute';
    // r=300;
    // l=600;
    Nobtn.style.marginLeft=r+"px"
    Nobtn.style.marginTop=l+"px"
})
let i =document.querySelector(".img");
let Yesbtn = document.querySelector(".yes");
Yesbtn.style.backgroundColor="green";
Yesbtn.addEventListener("click",function(){
document.querySelector("h2").innerText="Thanks babyyyy";
document.querySelector("h3").innerText="Love you too chotuu...";
i.innerHTML=`<img src="bear-kiss-bear-kisses.gif" alt="" />`;
// let newImg=document.querySelector(".images");
// newImg.innerHTML=` <img class="im" src="WhatsApp Image 2024-05-08 at 11.17.05 PM (1).jpeg" alt="">  <img class="im" src="WhatsApp Image 2024-05-08 at 11.17.05 PM.jpeg" alt="">
//      `
})