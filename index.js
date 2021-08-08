let selection_one = "";
let selection_two = "";
let start_time = "";
let end_time = "";
let score = "";
let first_id = "";
let second_id = "";
let old_score = "";
let array = ["front1.10", "front2.10", "front1.11", "front2.11", "front1.12", "front2.12", "front1.13", "front2.13", "front1.14", "front2.14", "front1.15", "front2.15", "front1.16", "front2.16", "front1.17", "front2.17", "front1.18", "front2.18", "front1.19", "front2.19", "front1.20", "front2.20", "front1.21", "front2.21"];




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
    shuffleArray(array);
    var divs = document.getElementsByTagName("div");
    for (var j = 0; j < array.length; j++) {
        for (var i = 0; i < divs.length; i++) {


            let div_class_name = divs[i].className.substr(0, 5);
            if (div_class_name === "front") {

                divs[i].id = array[j];
                j++
            }
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
    for (var i = 0; i < divs.length; i++) {
        /* Added Divs[i] to make it work. Also need === in the if */
        let div_class_name = divs[i].className.substr(0, 4);
        let div_class_name_locked = divs[i].className.substr(0, 6)
        if (div_class_name === "back") {
            divs[i].className = "front";
        }
    }
}


/* thank you to Sean Young from Code Institute for helping solve the query mentioned in the Readme. */
function reset_game() {
    var divs = document.getElementsByTagName("div");
    
        for (var i = 0; i < divs.length; i++) {


            let div_class_name = divs[i].className.substr(0, 13);

                if (div_class_name === "front_number") {
                    divs[i].className = "front";
                }

        }

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




        }
    }
    shuffleArray(array);
    var divs = document.getElementsByTagName("div");
    for (var j = 0; j < array.length; j++) {
        for (var i = 0; i < divs.length; i++) {


            let div_class_name = divs[i].className.substr(0, 5);
            if (div_class_name === "front") {

                divs[i].id = array[j];
                j++
            }
        }
        
    }

}




function if_mapping(e) {
    let selectedElement = e;
    let selection_two = selectedElement.id;
    let score = document.getElementById("correct_score");
    let score_check = score.innerHTML;
    let score_int = parseInt(score_check);
    let max_score = 2;
    let locked_check = e.className.substr(0, 6);
    let numbers_only_check = e.className;

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
                    if (numbers_only_check === "front") {
                    selectedElement.className = "front";

                } else {
                    selectedElement.className = "front_number";
                }

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


                        appear();
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



var parent = document.querySelector(".modal-parent"),
    btn = document.querySelector("button"),
    X = document.querySelector(".X"),
    section = document.querySelector("section");

btn.addEventListener("click", appear);

function appear() {
  parent.style.display = "block";
  section.style.filter = "blur(10px)"
  let final_correct_score = document.getElementById("correct_score").innerHTML
  let final_incorrect_score = document.getElementById("incorrect_score").innerHTML
  /* Leaving it as get element id in case more or less tiles are added. This means only the max score needs changing */
  document.getElementById("congrats_correct").innerHTML = final_correct_score;
  document.getElementById("congrats_incorrect").innerHTML = final_incorrect_score;
}

X.addEventListener("click", disappearX);

function disappearX() {
  parent.style.display = "none";
  section.style.filter = "blur(0px)"
}
parent.addEventListener("click", disappearParent)
function disappearParent(e) {
  if (e.target.className == "modal-parent") {
    parent.style.display = "none";
    section.style.filter = "blur(0px)"
  }
}



function numbers_only() {
    var divs = document.getElementsByTagName("div");
    
    for (var i = 0; i < divs.length; i++) {


        let div_class_name = divs[i].className.substr(0, 6);

            if (div_class_name === "front") {
                divs[i].className = "front_number";
            }

    }


}