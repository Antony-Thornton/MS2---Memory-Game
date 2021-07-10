let selection_one = "";
let selection_two = "";
let start_time = "";
let end_time = "";
let score = "";



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







function reset_tiles() {
  var divs = document.getElementsByTagName("div");
  for(var i = 0; i < divs.length; i++){
    let div_class_name = divs.className.substr(1,4);
    if (div_class_name = "back") {
      console.log("true")
      divs[i].className = "front";
     }
  }
}







function if_mapping(e) {
    let selectedElement = e;
    let selection_two = selectedElement.id;
    let score = document.getElementById("correct_score");
    let score_check = score.innerHTML;
    let score_int = parseInt(score_check);
    let max_score = 20;
    let first_id = "front1";
    let second_id = "front1";


    if (score_int === max_score) {
        console.log("Game Complete")
        /* 
          Exit script - Game Complete 
          Show Popup message
          */
    } else {
        if (selection_one === "") {
            selection_one = e.id;
            console.log("Selection one = nothing selection_one updated")
            /*
            Add code to flip tile
            update selection_one value
            Exit Script
            */
        } else {
            if (selection_one === selection_two) {
                console.log("matched tiles")
                selection_one = "";
                selection_two = "";
                /* insert code to handle matched tiles
                Update Incorrect clsss with + 1
                Flip both tiles back to back            
                */
            }
            if (score === 20) {
                /* 
                Exit script - Game Complete 
                Show Popup message
                */
            } else {

                if (selection_one !== selection_two && first_id === second_id) {
                    console.log("Selection one and two DO NOT match")

                    /* 
                    If selection_one  does not equal selected Element insert code to handle tile flips 
                    Update score class with +1
                    Change both tiles to Locked              
                    */
                    selection_one = "";
                    selection_two = "";



                }
            }
        }
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




function change_class(e) {
var selectedElement = e;
if (selection_one !== selectedElement) {

  /* *******https://www.bitdegree.org/learn/javascript-classname*******
  if (selection_one === "") {

        

    /* Help with lengths - https://www.w3schools.com/howto/howto_js_string_length.asp

    let len = e.id.length;
    let len_num = e.id.substr(7, len);
    console.log(len_num)

    if (selectedElement.className === "front") {
        selectedElement.className = "back" + len_num;

        let selection_one = e.id;
        console.log(selection_one)
    } else {
        selectedElement.className = "front";
    }
    selection_one = e.id
} else {

  /* add IF here for matching tiles error
    let len = e.id.length;
    let len_num = e.id.substr(7, len);
    console.log(len_num)
    
    if (selectedElement.className === "front") {
      selectedElement.className = "back" + len_num;

      let selection_two = e.id;
      console.log(selection_two)
  } else {
      selectedElement.className = "front";
  }
  selection_two = e.id

}
console.log("matched tile")
}
}
*/