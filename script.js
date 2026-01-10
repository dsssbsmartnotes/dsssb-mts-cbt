let questions = [
 {
  q: "DSSSB stands for?",
  o: ["Delhi Subordinate Services Selection Board","Delhi State Service Board","Delhi Staff Selection Board","None"],
  a: 0
 },
 {
  q: "MTS means?",
  o: ["Multi Tasking Staff","Main Technical Staff","Multi Test System","None"],
  a: 0
 }
];

let index = 0;
let score = 0;
let time = 1800; // 30 minutes

function loadQuestion(){
 document.getElementById("qtext").innerText = questions[index].q;
 let opt = "";
 questions[index].o.forEach((x,i)=>{
  opt += `<button onclick="check(${i})">${x}</button>`;
 });
 document.getElementById("options").innerHTML = opt;
}

function check(i){
 if(i == questions[index].a) score++;
 index++;
 if(index < questions.length) loadQuestion();
 else submit();
}

function submit(){
 alert("Test Completed!\nScore: "+score+"/"+questions.length);
}

setInterval(()=>{
 time--;
 let m = Math.floor(time/60);
 let s = time % 60;
 document.getElementById("timer").innerText = m+":"+(s<10?"0":"")+s;
 if(time==0) submit();
},1000);

loadQuestion();
