var N = prompt('Indiquez le nombre de case en largeur (entre 1 et 12)');
//localStorage.setItem('largeur', N);
var nbr = N*N;


function new_div() {
$(document).ready(function() {
  var test = {
    id: "div",
    class: "divclass",
    }

  var $div = $("<div>", test);
  $("#bigdiv").append($div);

  });
  }

var x = 0;
var br = $("<br>");
function repet(){
  var largeur = 100*N/12;
  $("#bigdiv").css("width",largeur + "%");
  $("#bigdiv").css("width-max","100%");
  $("#bigdiv").css("margin-top","10px");
  while (x<nbr) {
    new_div();
    x = x+1;
}
}
repet();

$(".divclass").on('click', function(){
  $(this).css("background-color", "black");
});
