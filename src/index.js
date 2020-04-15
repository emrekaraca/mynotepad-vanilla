import "sanitize.css";
import "./styles.css";
import $ from "jquery";

// * Vanilla JS
var myNoteElement = document.getElementById("my-note");
var counterButton = document.getElementById("counter--button");
var note = "";
var noteLength = note.length;
var counter = 0;
document.getElementById("viewer--length").innerHTML = noteLength;
document.getElementById("counter--number").innerHTML = counter;

var storedNote = localStorage.getItem("note");
if (storedNote) {
  note = storedNote;
  myNoteElement.value = note;
  document.getElementById("viewer--text").innerHTML = note;
  noteLength = note.length;
  document.getElementById("viewer--length").innerHTML = noteLength;
}

myNoteElement.addEventListener("keyup", function(e) {
  note = e.target.value;
  document.getElementById("viewer--text").innerHTML = note;
  localStorage.setItem("note", note);
  noteLength = note.length;
  document.getElementById("viewer--length").innerHTML = noteLength;
});

counterButton.addEventListener("click", function() {
  counter++;
  document.getElementById("counter--number").innerHTML = counter;
});

// * jQuery
/* var note2 = "";
var noteLength2 = note2.length;
var counter2 = 0;
document.getElementById("viewer--length").innerHTML = noteLength2;
document.getElementById("counter--number").innerHTML = counter2;

var storedNote2 = localStorage.getItem("note");
if (storedNote2) {
  note2 = storedNote2;
  $("#my-note").val(note2);
  $("#viewer--text").html(note2);
  noteLength2 = note2.length;
  document.getElementById("viewer--length").innerHTML = noteLength2;
}

$("#my-note").keyup(function(e) {
  note2 = e.target.value;
  $("#viewer--text").html(note2);
  noteLength2 = note2.length;
  document.getElementById("viewer--length").innerHTML = noteLength2;
});

$("#counter--button").click(function() {
  counter2++;
  $("#counter--number").html(counter2);
}); */
