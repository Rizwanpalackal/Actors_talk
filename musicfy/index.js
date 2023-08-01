let buttonAll = document.querySelectorAll(".button").length;

for (let i = 0; i < buttonAll; i++) {
  document.querySelectorAll(".button")[i].addEventListener("click", handleclick);
}

// var audio = new Audio

function handleclick() {
  var buttoninnerHTML = this.innerHTML;
  this.style.color="white"
  makeSound(buttoninnerHTML);
  buttonAnimation(buttoninnerHTML)
}



function makeSound(key) {
  switch (key) {
    case "m":
      var sound1 = new Audio("mammooty dialoge.mp3");
      sound1.play();
      break;

    case "l":
      var sound2 = new Audio("Dineshaaa.mp3");
      sound2.play();

      break;

    case "d":
      var sound3 = new Audio("Kurup Dialogue.mp3");
      sound3.play();
      break;

    case "n":
      var sound4 = new Audio("nivin OVS.mp3");
      sound4.play();
      break;

    case "t":
      var sound5 = new Audio("Thilakan sufi.mp3");
      sound5.play();
      break;

    case "s":
      var sound6 = new Audio("Commissioner Dialogue.mp3");
      sound6.play();
      break;
      case "r":
        var sound6 = new Audio("Rajini Dialogue.mp3");
        sound6.play();
        break;
        case "k":
          var sound6 = new Audio("Kamal Hassan Dialogue.mp3");
          sound6.play();
          break;
          case "v":
            var sound6 = new Audio("Pokkiri ! Thalapathy Vijay Dialogue.mp3");
            sound6.play();
            break;
            case "u":
              var sound6 = new Audio("Singam Dialogue.mp3");
              sound6.play();
              break;
              case "h":
                var sound6 = new Audio("Dhanush - Mass Dialogue Tamil.mp3");
                sound6.play();
                break;
                case "a":
                  var sound6 = new Audio("Ajith Mass Dialogue.mp3");
                  sound6.play();
                  break;

    default:
      break;
  }
}

document.addEventListener("keypress",function(event){
    console.log(event)
    makeSound(event.key)
    buttonAnimation(event.key)
})




function buttonAnimation(currentkey){
    var activekey = document.querySelector("."+currentkey)
    activekey.classList.add("pressed");

    setTimeout(function(){
        activekey.classList.remove("pressed");
    }, 400);
}