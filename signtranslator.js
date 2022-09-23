

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const button = document.querySelector('#button');
const container = document.querySelector('#container');
const textbox = document.querySelector('#textbox');
recognition.interimResults = true;

let p = document.createElement("p");
console.log("running");
//on recognition start
recognition.addEventListener("result", (e) => {
    console.log("listneing")
  textbox.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");
  p.innerText =text;
   }
);

//on button click
button.addEventListener('click', function(){
    console.log("clickity clack");
    button.style.display = "none";
    recognition.start();
})



