
/* Helped with the hide_unide element function. Worked as is so no changes needed - https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp */

function hide_unhide() {
  var x = document.getElementById("hide_unhide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
