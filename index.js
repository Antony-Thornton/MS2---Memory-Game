
/* Helped with the hide_unide element function. Worked as is so no changes needed - https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp */

function hide_unhide() {
  var x = document.getElementById("hide_unhide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function test() {
    var columns = document.getElementsByClassName("col");
    columns.style.backgroundColor = "#00FF00";
}

function hide_hero() {
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