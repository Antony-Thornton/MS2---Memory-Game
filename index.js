let selection_one = "";
let selection_two = "";
let start_time = "";
let end_time = "";
let score = "";
let first_id = "";
let second_id = "";
let old_score = "";
let array = ["front1.10", "front2.10", "front1.11", "front2.11", "front1.12", "front2.12", "front1.13", "front2.13", "front1.14", "front2.14", "front1.15", "front2.15", "front1.16", "front2.16"];




/* Helped with the hide_unide element function. Worked as is so no changes needed
https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp */
/* Hide/Unhide the instructions */
function hide_unhide() {
    var x = document.getElementById("hide_unhide");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function show_hero() {
    var hero = document.getElementById("header_format");
    hero.style.display = "block";
    alert("Successfully submitted");
    var x = document.getElementById("hide_unhide");
    x.style.display = "none";
}



/* 
https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/
Helped with the divs[i].id array randomiser
*/
window.onload = function random_array() {
    shuffleArray(array);
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
        let div_class_name = divs[i].className.substr(0, 5);
        if (div_class_name === "front") {
                divs[i].id = array[i];
        }
    }
}


/* https://www.youtube.com/watch?v=5sNGqsMpW1E */
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array
};



/* thank you to Sean Young from Code Institute for helping solve the query mentioned in the Readme. */
function reset_tiles() {
    var divs = document.getElementsByTagName("div");
    console.log(divs)
    for (var i = 0; i < divs.length; i++) {
        /* Added Divs[i] to make it work. Also need === in the if */
        let div_class_name = divs[i].className.substr(0, 4);
        let div_class_name_locked = divs[i].className.substr(0, 6)
        console.log(div_class_name_locked)
        if (div_class_name === "back") {
            console.log("true")
            divs[i].className = "front";
        }
    }
}


/* thank you to Sean Young from Code Institute for helping solve the query mentioned in the Readme. */
function reset_game() {
    var divs = document.getElementsByTagName("div");
    console.log(divs)
    for (var i = 0; i < divs.length; i++) {
        /* Added Divs[i] to make it work. Also need === in the if */
        let div_class_name = divs[i].className.substr(0, 4);
        let div_class_name_locked = divs[i].className.substr(0, 6)
        console.log(div_class_name_locked)
        if (div_class_name === "back" || div_class_name_locked === "locked") {
            console.log("true")
            divs[i].className = "front";
            /* below scoring adapted from the code instutute course */
            old_score = parseInt(document.getElementById("correct_score").innerText);
            document.getElementById("correct_score").innerText = 0;
            /* End */

            old_score = parseInt(document.getElementById("incorrect_score").innerText);
            document.getElementById("incorrect_score").innerText = 0;
            /* End */
            start_time = "";
            end_time = "";
        }
    }
}




function if_mapping(e) {
    let selectedElement = e;
    let selection_two = selectedElement.id;
    let score = document.getElementById("correct_score");
    let score_check = score.innerHTML;
    let score_int = parseInt(score_check);
    let max_score = 7;
    let locked_check = e.className.substr(0, 6)

    if (locked_check = "locked") {

        if (score_int === max_score) {
            console.log("Game Complete")
            /* 
              Exit script - Game Complete 
              Show Popup message
              */
        } else {
            if (selection_one === "") {
                selection_one = e.id;
                first_id = e.id.slice(-2);
                console.log("Selection one = nothing so selection_one becomes e.id")
                selectedElement.className = "back" + first_id;

            } else {
                if (selection_one === selection_two) {
                    console.log("Same tile selected")
                    /* below scoring adapted from the code instutute course */
                    old_score = parseInt(document.getElementById("incorrect_score").innerText);
                    document.getElementById("incorrect_score").innerText = ++old_score;
                    /* End */
                    selectedElement.className = "front";

                    selection_one = "";
                    selection_two = "";
                    first_id = "";
                    second_id = "";
                } else {
                    second_id = e.id.slice(-2);
                    if (selection_one !== selection_two && first_id === second_id) {

                        console.log("Selection one and two DO NOT match")
                        /* below scoring adapted from the code instutute course */
                        old_score = parseInt(document.getElementById("correct_score").innerText);
                        document.getElementById("correct_score").innerText = ++old_score;
                        /* End */

                        selectedElement.className = "locked" + first_id;
                        console.log(selection_one.className)
                        let first_selection = document.getElementById(selection_one);
                        first_selection.className = "locked" + first_id;

                        selection_one = "";
                        selection_two = "";
                        first_id = "";
                        second_id = "";

                        score = document.getElementById("correct_score");
                        score_check = score.innerHTML;
                        score_int = parseInt(score_check);
                        console.log(score_int)
                        if (score_int === max_score) {
                            console.log("Max score but mid function")

                            /* 
                            Show Popup message
                            */
                        }

                    } else {
                        if (selection_one !== selection_two && first_id !== second_id)
                            selectedElement.className = "back" + second_id;
                        /* below scoring adapted from the code instutute course */
                        old_score = parseInt(document.getElementById("incorrect_score").innerText);
                        document.getElementById("incorrect_score").innerText = ++old_score;
                        /* End */
                        setTimeout(function() {
                            selectedElement.className = "front"
                            selection_one = "";
                            selection_two = "";
                            first_id = "";
                            second_id = "";
                            reset_tiles()
                        }, 1000);
                    }
                }
            }
        }
    }
}




/*



/*

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
    var end_time = currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();
    console.log(end_time)

}

function incrementScore() {

	// Gets the current score from the DOM and increments it

	oldScore = parseInt(document.getElementById("correct_score").innerText);
	document.getElementById("correct_score").innerText = ++oldScore;

}

function incrementWrongAnswer() {

	// Gets the current tally of incorrect answers from the DOM and increments it

	oldScore = parseInt(document.getElementById("incorrect_score").innerText);
	document.getElementById("incorrect_score").innerText = ++oldScore;

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