import "sanitize.css";
import "./styles.css";
import $ from "jquery";

// * Vanilla JS
if (true) {
  var myNoteElement = document.getElementById("my-note");

  myNoteElement.addEventListener("keyup", function(e) {
    var note = e.target.value;
    document.getElementById("viewer--text").innerHTML = note;
  });
}

// * jQuery
if (false) {
  $("#my-note").keyup(function(e) {
    var note = e.target.value;
    $("#viewer--text").html(note);
  });
}
