let selection_one = "";
let selection_two = "";
let start_time = "";
let end_time = "";




/* Helped with the hide_unide element function. Worked as is so no changes needed - https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp */
/* Hide/Unhide the instructions */
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
    start_time = currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();
      console.log(start_time)

}

function end() {
        var currentdate = new Date(); 
        var end_time = currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
        console.log(end_time)

}

function show_hero() {
    var hero = document.getElementById("header_format");
    hero.style.display = "block";
    alert("Successfully submitted");
    var x = document.getElementById("hide_unhide");
    x.style.display = "none";
}



function change_class(e) {

  /* *******https://www.bitdegree.org/learn/javascript-classname******* */
  console.log(typeof(selection_one))
    if (selection_one === "") {

        var selectedElement = e;
        console.log(e.id) /* Logs the word "front" */

        /* Help with lengths - https://www.w3schools.com/howto/howto_js_string_length.asp */

        var len = e.id.length;
        var lenNum = e.id.substr(5, len);

        if (selectedElement.className === "front") {
            selectedElement.className = "back" + lenNum;

            let selection_one = e.id;
            console.log(selection_one)
        } else {
            selectedElement.className = "front";
        }
        selection_one = e.id
    } else {
      console.log(selection_one + "jkndfdksdjfhn")
    }
}








function reset_tiles() {
  let elements = document.body.getElementsByTagName('div');
  let element_id = elements.substr(1,4)

  console.log(element_id)
  for (var i = 0; i < elements.length; i++) {
      element_id[i].className = "back";
  }​

}





/*
document.addEventListener("click", function(changeClassIf){ 

  if (typeof selection_one === 'undefined') {
    changeClassIf.call()
    
    console.log ("True")
  } else {
    console.log ("False")
  }


});

*/




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