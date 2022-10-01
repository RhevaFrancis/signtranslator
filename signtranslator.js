

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
    how.style.display="none";
    how.src="";
})

//when a recording finishes, the record button comes back up and u can overwrite if needed
recognition.addEventListener('end',()=>{
  button.style.display = "inline";
})


go.addEventListener('click',(event)=>{
  console.log("weeooo")
  if(input.value.toLowerCase()=="hello"){
    console.log("hi")
    how.src="https://giphy.com/embed/3o7TKNKOfKlIhbD3gY";
    how.style.display="inline";
  }else if(input.value.toLowerCase()=="how are you doing"){
    console.log("how")
    how.src="https://giphy.com/embed/26FLgm33ve3iUexZC"
    how.style.display="inline";
  }else if(input.value.toLowerCase()=="i like it"){
    console.log("lolololo")
    how.src="https://giphy.com/embed/26FLetDV4MHaixWHm"
    how.style.display="inline";
  }else if(input.value.toLowerCase()=="i dont like this"){
    console.log("lolololo")
    how.src="https://giphy.com/embed/l4Jzdp8TJ2DDxeVna"
    how.style.display="inline";
  }else if(input.value.toLowerCase()=="i dont know"){
    console.log("lolololo")
    how.src="https://giphy.com/embed/26FLfRk8VOFZOem9G"
    how.style.display="inline"; 
   }else if(input.value.toLowerCase()=="i know"){
    console.log("lolololo")
    how.src="https://giphy.com/embed/l4JzhcsNiEKmhekhO"
    how.style.display="inline"; 
   }else if(input.value.toLowerCase()=="i dont understand"){
    console.log("lolololo")
    how.src="https://giphy.com/embed/26FL0X4d3Epuecpj2"
    how.style.display="inline"; 
   }else if(input.value.toLowerCase()=="im fine"){
    console.log("lolololo")
    how.src="https://giphy.com/embed/l4Jzd71ci3msO66ac"
    how.style.display="inline"; 
   }else if(input.value.toLowerCase()=="yes"){
    console.log("lolololo")
    how.src="https://giphy.com/embed/26FLfRk8VOFZOem9G"
    how.style.display="inline";   
    }else if(input.value.toLowerCase()=="maybe"){
    console.log("lolololo")
    how.src="https://giphy.com/embed/l4Jzdw22eZ8QEKCKQ"
    how.style.display="inline";
  }else if(input.value.toLowerCase()=="no"){
    console.log("lolololo")
    how.src="https://giphy.com/embed/l4Jz4faxuS1FiSEV2"
    how.style.display="inline";
  }else if(input.value.toLowerCase()=="are you okay"){
    console.log("lolololo")
    how.src="https://giphy.com/embed/26FL0kXeJG1UShgje"
    how.style.display="inline";
  }else if(input.value.toLowerCase()=="what are you doing"){
    console.log("lolololo")
    how.src="https://giphy.com/embed/26FLcXu6TYYAc39vO"
    how.style.display="inline"; 
   }else if(input.value.toLowerCase()=="good morning"){
    console.log("lolololo")
    how.src="https://giphy.com/embed/26FLchGgqamznV64E"
    how.style.display="inline"; 
   }else if(input.value.toLowerCase()=="good afternoon"){
    console.log("lolololo")
    how.src="https://giphy.com/embed/l4JzaRsX52k8glIFa"
    how.style.display="inline"; 
   }else if(input.value.toLowerCase()=="good evening"){
    console.log("lolololo")
    how.src="https://giphy.com/embed/l4JzdrbDeU2lMMrde"
    how.style.display="inline"; 
   }else if(input.value.toLowerCase()=="good night"){
    console.log("lolololo")
    how.src="https://giphy.com/embed/l4Jz5WK4Uddr8KsSc"
    how.style.display="inline";  
     }else if(input.value.toLowerCase()=="cool"){
    console.log("lolololo")
    how.src="https://giphy.com/embed/l4Jz9e2dMN38YXYc0"
    how.style.display="inline";
  }else if(input.value.toLowerCase()=="today"){
    console.log("lolololo")
    how.src="https://giphy.com/embed/l0HlMjs6qD8oPdFS0"
    how.style.display="inline"; 
   }else if(input.value.toLowerCase()=="tommorow"){
    console.log("lolololo")
    how.src="https://giphy.com/embed/l0HlVIYwcKAplTzsQ"
    how.style.display="inline"; 
   }else if(input.value.toLowerCase()=="morning"){
    console.log("lolololo")
    how.src="https://giphy.com/embed/3o6ZtrcJ9GCXGGw0ww"
    how.style.display="inline"; 
   }else if(input.value.toLowerCase()=="afternoon"){
    console.log("lolololo")
    how.src="https://giphy.com/embed/3o6Ztf9STnFqeMPrZC"
    how.style.display="inline"; 
   }else if(input.value.toLowerCase()=="evening"){
    console.log("lolololo")
    how.src="https://giphy.com/embed/l0HlMsC7b9AdKviZG"
    how.style.display="inline";    
      
      
})

