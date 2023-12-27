var a = document.querySelectorAll(".drum");

for(var i=0;i<a.length;i++)
{
  a[i].addEventListener("click", abc);

}


function abc()
{
  var b = new Audio("sounds/crash.mp3");
  b.play();
}

document.getElementsByClassName("drum")[0].style.backgroundImage="url('images/tom1.png')";
document.getElementsByClassName("drum")[1].style.backgroundImage="url('images/tom2.png')";
document.getElementsByClassName("drum")[2].style.backgroundImage="url('images/tom3.png')";
document.getElementsByClassName("drum")[3].style.backgroundImage="url('images/tom4.png')";
document.getElementsByClassName("drum")[4].style.backgroundImage="url('images/snare.png')";
document.getElementsByClassName("drum")[5].style.backgroundImage="url('images/crash.png')";
document.getElementsByClassName("drum")[6].style.backgroundImage="url('images/kick.png')";