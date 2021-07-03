
/* Helped with the hide_unide element function. Worked as is so no changes needed - https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp */

function hide_unhide() {
  var x = document.getElementById("hide_unhide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function start() {
    var hero = document.getElementById("header_format");
    hero.style.display = "none";
    var x = document.getElementById("hide_unhide");
    x.style.display = "none";

    
    

    var currentdate = new Date(); 
    var start_time = currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    console.log(start_time)



    var currentdate = new Date(); 
    var end_time = currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    console.log(end_time)

    var total_time = end_time - start_time

    console.log(total_time)
}

function show_hero() {
    var hero = document.getElementById("header_format");
    hero.style.display = "block";
    alert("Successfully submitted");
      var x = document.getElementById("hide_unhide");
      x.style.display = "none";
}



function changeClassIf(e) {

  var selectedElement = e;
  console.log(e.id) /* Logs the word "front" */


  /* Help with lengths - https://www.w3schools.com/howto/howto_js_string_length.asp */
  var len = e.id.length;
 
  var lenNum = e.id.substr(5, len);
  
  console.log(len)
  console.log(lenNum)
  
  

  if (selectedElement.className === "front" && selectedElement.id === "front1") {
    selectedElement.className = "back1";
    console.log("back1")
  } else {
    if (selectedElement.className === "front" && selectedElement.id === "front2") {
      selectedElement.className = "back2";
      console.log("back2")
    }
    else {
      selectedElement.className = "back2";
      console.log("back3")
    }
    selectedElement.className = "front";
  }
}





/* ***** Useful code that helped with learning concepts ******



/* Helped with my test. I wanted to change the "col" format. I didnt have the For (var). - https://stackoverflow.com/questions/14307163/changing-background-color-of-all-elements-with-the-same-class
function test() {
    elements = document.getElementsByClassName("col");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="blue";
    }
}

 


function changeClass() {

  *******https://www.bitdegree.org/learn/javascript-classname*******


  var sampleElem = document.getElementById("front");
  if (sampleElem.className === "front") {
    sampleElem.className = "back";
  } else {
    sampleElem.className = "front";
  }
}
*/