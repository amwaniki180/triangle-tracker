var code = document.getElementById('button');

function tracker() {
  var sideOne = parseInt(document.getElementById("sideOne").value);

  var sideTwo = parseInt(document.getElementById("sideTwo").value);

  var sideThree = parseInt(document.getElementById("sideThree").value);
  console.log(sideTwo)
  console.log(sideOne)
  console.log(sideThree)

  if (sideOne <= (sideTwo + sideThree) && sideTwo <= (sideThree + sideOne) && sideThree <= (sideOne + sideTwo)) {
    if (sideOne === sideTwo && sideTwo === sideThree) {
      var triangle = "equilateral";
      return document.getElementById("result").innerHTML = triangle;
    } else if (sideOne === sideTwo || sideOne === sideThree || sideThree === sideTwo) {
      var triangle = "isosceles";
      return document.getElementById("result").innerHTML = triangle;
    } else if (sideOne !== sideTwo || sideOne !== sideThree || sideThree !== sideTwo) {
      var triangle = "scalene";
      return document.getElementById("result").innerHTML = triangle;
    } else {
      var triangle = "These sides do not a triangle make.";
      return document.getElementById("result").innerHTML = triangle;
    }
  }
  else {
   var triangle = "These sides do not a triangle make.";
   return document.getElementById("result").innerHTML = triangle;}


}
if (code) {
  code.addEventListener("click", tracker)
}
