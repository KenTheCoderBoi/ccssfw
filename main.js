var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

//var john = new Human()

function start()
{
    document.getElementById("textbox").innerHTML = ""; 

    //john.speak()
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;

    console.log(Content);


   
  //Part 1 -
     if (Content=="take my selfie") {
         console.log("taking selfie");
         speak();
        }
}


function speak(){
    var synth = window.speechSynthesis;
//Part 2-
    speak_data = "Taking your selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);



 

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");}
