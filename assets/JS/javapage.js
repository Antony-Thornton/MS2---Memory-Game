/* ****** JavaScript Page Specific Java ****** */

document.getElementById("random_color").addEventListener("click", function(){
    console.log("Its working")
    
    var colors = [
        '#198754', '#ff0000', '#00ff00',
        '#0000ff', '#ff00ff', '#ffff00'
    ];
      
    // selecting random color
    var random_color = colors[Math.floor(
            Math.random() * colors.length)];
      
    var x = document.getElementById('random_color_box');
    x.style.backgroundColor = random_color;


    setTimeout(() => {
        
    }, 500);
});

var deadline = new Date("dec 31, 2025 15:37:25").getTime();
  
var x = setInterval(function() {
  
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("day").innerHTML =days ;
document.getElementById("hour").innerHTML =hours;
document.getElementById("minute").innerHTML = minutes; 
document.getElementById("second").innerHTML =seconds; 
if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME UP";
        document.getElementById("day").innerHTML ='0';
        document.getElementById("hour").innerHTML ='0';
        document.getElementById("minute").innerHTML ='0' ; 
        document.getElementById("second").innerHTML = '0'; }
}, 1000);


document.getElementById("random_color").addEventListener("click", function(){
    console.log("Its working")
    
    var colors = [
        '#198754', '#ff0000', '#00ff00',
        '#0000ff', '#ff00ff', '#ffff00'
    ];
      
    // selecting random color
    var random_color = colors[Math.floor(
            Math.random() * colors.length)];
      
    var x = document.getElementById('random_color_box');
    x.style.backgroundColor = random_color;


    setTimeout(() => {
        
    }, 500);
});


var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);
}


document.getElementById('add_to_page').addEventListener("click", function(){
    document.getElementById('add_here').innerHTML += `
    <div class="col">
        <div class="java-page-gif">
            <div class="">
                You summoned me?
            </div>
        </div>
    </div>
`;
});


