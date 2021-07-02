
/* Helped with the hide_unide element function. Worked as is so no changes needed - https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp */

function hide_unhide() {
  var x = document.getElementById("hide_unhide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/* Helped with my test. I wanted to change the "col" format. I didnt have the For (var). - https://stackoverflow.com/questions/14307163/changing-background-color-of-all-elements-with-the-same-class */
function test() {
    elements = document.getElementsByClassName("col");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="blue";
    }
}


function start() {
    var hero = document.getElementById("header_format");
    hero.style.display = "none";
    var x = document.getElementById("hide_unhide");
    x.style.display = "none";
}

function show_hero() {
    var hero = document.getElementById("header_format");
    hero.style.display = "block";
    alert("Successfully submitted");
      var x = document.getElementById("hide_unhide");
      x.style.display = "none";
}



