window.addEventListener("load", activateReader);

function activateReader(){
  var counter = 0;
  // var gold = "rgba(218,165,32,0.5)";
  var gold = "gainsboro";
  var d = document.querySelectorAll('p');
  var span = document.querySelectorAll('span');
  d[0].style.opacity = 1;
  d[0].style.color = "black";
  d[0].style.backgroundColor = gold;
  d[0].classList.add("prefix", "postfix");

  document.addEventListener("keydown", function(e){
    if (e.code === "Space"){
      if(counter < d.length - 1) {
      // remove pagination from line
      d[counter].classList.remove("prefix", "postfix");
      d[counter].style.background = "none";
      // add pagination to lines
      d[counter+1].classList.add("prefix", "postfix");
      d[counter+1].style.color = "black";
      d[counter+1].style.opacity = 1;
      d[counter+1].style.backgroundColor = gold;
      counter ++;
    }
  } else if(e.code === 'KeyU'){

      if(counter != 0){
        // remove pagination from line
        d[counter].classList.remove("prefix", "postfix");
        d[counter].style.background = "none";
        // add pagination to lines
        d[counter-1].classList.add("prefix", "postfix");
        // d[counter+1].style.color = "black";
        d[counter-1].style.backgroundColor = gold;
        counter --;
      }
    }// end elif

  });
}
