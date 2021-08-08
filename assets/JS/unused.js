/*
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