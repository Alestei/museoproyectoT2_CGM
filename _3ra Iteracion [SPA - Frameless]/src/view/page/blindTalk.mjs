//export function BTK(){

let voiceButton = document.querySelectorAll('.a_hear')
for (let i = 0; i < voiceButton.length; i++) {
    voiceButton[i].innerHTML = `
    <center>
    <button name="Hear" id="buttonH_${i}" class="MButton2"><img src="../style/img/hearing.png"></button>
    <button name="Pause" id="buttonH_P" class="MButton2" style="background-color:white"><img src="../style/img/play-pause.png"></button>
    <button name="Cancel" id="buttonH_C" class="MButton2" style="background-color:white"><img src="../style/img/hearing-off.png"></button>
    </center>
    `
  
  }


let talk = document.getElementsByName('Hear') 
let pause = document.getElementsByName('Pause')
let cancel = document.getElementsByName('Cancel')
let content = document.getElementsByClassName('imgbox')
let speech = new SpeechSynthesisUtterance();


for(let x in talk){

    talk[x].onclick = function(){
      
      speech.lang = ''
      speech.text = content[x].innerText
      //alert(speech.text)
      window.speechSynthesis.speak(speech);
      
    }
    pause[x].onclick = function(){
      if(window.speechSynthesis.paused){
        window.speechSynthesis.resume(); 
      }else{
        window.speechSynthesis.pause(); 
      }
    }

    cancel[x].onclick = function(){
      window.speechSynthesis.cancel();
    }
}




 // return 'BTK Loaded';
//}

