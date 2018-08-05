$(document).ready(function() {
  $("#add-new-todo-button").click(function(){
    var description = $("#new-todo-description")
   var pomodoroEstimate = $("#new-pomodoro-estimate")
    $("ul").append(' <li><a href="show.html">' + description.val() + '</a><span class="pomodoro-estimate">4 pomodoros</span> <input type="checkbox"></li>');
    description.val('');
  });
});