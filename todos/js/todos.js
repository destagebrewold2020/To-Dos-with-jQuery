$(function () {
  $("#container").draggable();
});
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//Delete Todos
$("ul").on("click", "span", function (e) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  e.stopPropagation(); //to stope call other classes
});

$("input[type='text'").keypress(function (e) {
  if (event.which === 13) {
    //grabing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append(
      "<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>"
    );
  }
});
$(".fa-tasks").click(function () {
  $("input[type='text'").fadeToggle("slow");
  $("ul").fadeToggle("slow");
});
