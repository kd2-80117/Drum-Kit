debugger;
for (let i = 0; i< document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        
        drumSound(this.innerHTML);
        activeButton(this.innerHTML);
    });
    
}

document.addEventListener("keydown",function (event) {
    drumSound(event.key);
    activeButton(event.key.toLowerCase());    
});

function drumSound(key){
    switch (key.toLowerCase()) {
        case "a":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play(); 
        break;
        case "s":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play(); 
        break;
        case "d":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play(); 
        break;
        case "f":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play(); 
        break;
        case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play(); 
        break;
        case "k":
        var audio = new Audio("sounds/crash.mp3");
        audio.play(); 
        break;
        case "l":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play(); 
        break;
        default:
        break;
    }
}

 function activeButton(keyPressed) {
     debugger;
      var buttonSelected=document.querySelector("."+keyPressed);
      buttonSelected.classList.add("pressed"); 
      setTimeout(function() {
          buttonSelected.classList.remove("pressed");
      },100);   
 }
 


