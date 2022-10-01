

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const button = document.querySelector('#button');
const container = document.querySelector('#container');
const textbox = document.querySelector('#textbox');
const input = document.querySelector('input');
const result = document.querySelector('#result');
const img = document.createElement("img");
const go = document.querySelector('#go');
const how = document.querySelector('#how.giphy-embed');
img.src="hello.webp"
recognition.interimResults = true;
how.style.display="none";

console.log("running");
//on recognition start
recognition.addEventListener("result", (e) => {
    console.log("listneing")
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");
  console.log(input.value)
  input.value =text;
   }
);

//on button click
button.addEventListener('click', function(){
    console.log("clickity clack");
    button.style.display = "none";
    recognition.start();
    result.removeChild(result.lastChild)
})

//when a recording finishes, the record button comes back up and u can overwrite if needed
recognition.addEventListener('end',()=>{
  button.style.display = "inline";
})


go.addEventListener('click',(event)=>{
  console.log("weeooo")
  if(input.value.toLowerCase()=="hello"){
    console.log("hi")
    result.append(img)
  }else if(input.value.toLowerCase()=="how are you doing"){
    console.log("how")
    how.style.display="inline";
  }

})

