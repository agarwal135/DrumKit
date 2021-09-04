function playSound(a)
{
  switch(a){
    case "w":
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case "a":
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case "s":
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case "d":
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
    console.log(this);
  }
}

function handleDrum(){
  console.log(this.innerHTML);
  var a = this.innerHTML;
  playSound(a);
  buttonAnimation(a);
}

var drumlist = document.querySelectorAll("button.drum");
for(var i=0;i<drumlist.length;i++)
{
  drumlist[i].addEventListener("click",handleDrum);
}


document.addEventListener("keydown",function(event){
  console.log(event);
  console.log(event.key);
  playSound(event.key);
  buttonAnimation(event.key);
})


function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){ activeButton.classList.remove("pressed")}, 100);
}
