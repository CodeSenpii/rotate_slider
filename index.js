window.addEventListener("load", activateReader);

function activateReader(){
  var counter = 0;
  var page = 0;
  // var gold = "rgba(218,165,32,0.5)";
  var gold = "gainsboro";
  var d = document.querySelectorAll('p');

  var label_id = {p1:'s2', p2:'s3', p3:'s4', p4:'s5', p5:'s6'};


  var span = document.querySelectorAll('span');
  d[0].style.opacity = 1;
  d[0].style.color = "black";
  d[0].style.backgroundColor = gold;
  d[0].classList.add("prefix", "postfix");
  document.addEventListener("keydown", function(e){
    if(d[page].id && page < d.length - 1){
      var index = Number(page);
      document.getElementById(label_id[d[page].id]).checked = true;
      // console.log(label_id[d[page].id]);
    }

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
      page ++;


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
        page --;
      }
    }// end elif

  });
}
