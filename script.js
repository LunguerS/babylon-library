const chars = "abcdefghijklmnopqrstuvwxyz .,!?";
const pageLength = 10000;

const phrases = [
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
function mulberry32(a){
return function(){
a |= 0;
a = a + 0x6D2B79F5 | 0;
let t = Math.imul(a ^ a >>> 15, 1 | a);
t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
return ((t ^ t >>> 14) >>> 0) / 4294967296;
}
}

function generatePage(seed,page){

let text="";

let rand = mulberry32(seed + page*99991);

for(let i=0;i<pageLength;i++){
  
if(i%300===0 && rand()>0.94){

let phrase = phrases[Math.floor(rand()*phrases.length)];

text += phrase+" ";

i += phrase.length;

continue;

}

text += chars[Math.floor(rand()*chars.length)];

}

return text;

}
