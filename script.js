const chars="abcdefghijklmnopqrstuvwxyz .,!?";
const pageLength=10000;

let currentSeed=1;
let currentPage=0;
let direction=0;

const phrases=[
"knowledge is power",
"time reveals truth",
"the universe is vast",
"silence speaks loudly",
"every book has a reader",
"the stars remember",
"dreams guide the mind",
"truth hides in chaos",
"the world is a story",
"language builds reality"
];

function hashCode(str){

let hash=0;

for(let i=0;i<str.length;i++){

hash=((hash<<5)-hash)+str.charCodeAt(i);

hash|=0;

}

return Math.abs(hash);

}

function randomChar(seed){

let index=Math.floor(Math.abs(Math.sin(seed))*chars.length);

return chars[index];

}

function generatePage(seed,page){

let text="";

let start=pageLength*page;

for(let i=start;i<start+pageLength;i++){

if(i%250===0){

let r=Math.abs(Math.sin(seed+i));

if(r>0.92){

let phrase=phrases[Math.floor(r*phrases.length)];

text+=phrase+" ";

i+=phrase.length;

continue;

}

}

text+=randomChar(seed+i);

}

return text;

}

function showPage(anim=false){

const book=document.getElementById("bookContent");

let text=generatePage(currentSeed,currentPage);

if(anim){

book.style.transform=`translateX(${direction*100}%)`;

setTimeout(()=>{

book.innerText=text;

book.style.transition="none";

book.style.transform=`translateX(${-direction*100}%)`;

setTimeout(()=>{

book.style.transition="transform .4s";

book.style.transform="translateX(0)";

},10);

},200);

}else{

book.innerText=text;

}

document.getElementById("pageNumber").innerText="Page "+(currentPage+1);

}

document.getElementById("searchBtn").onclick=()=>{

let q=document.getElementById("query").value.trim();

if(q){

currentSeed=hashCode(q);

currentPage=0;

showPage();

}

};

document.getElementById("randomBtn").onclick=()=>{

currentSeed=Math.floor(Math.random()*1000000);

currentPage=0;

showPage();

};

document.getElementById("nextBtn").onclick=()=>{

direction=1;

currentPage++;

showPage(true);

};

document.getElementById("prevBtn").onclick=()=>{

if(currentPage>0){

direction=-1;

currentPage--;

showPage(true);

}

};

document.getElementById("themeToggle").onclick=()=>{

document.body.classList.toggle("light");

document.body.classList.toggle("dark");

};

showPage();
