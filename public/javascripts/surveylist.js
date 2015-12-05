$(document).ready(function() {
  $("#btn_now_survey").click(function() {
    $(".past_survey").hide();
    $(".now_survey").show();
  });
  $("#btn_past_survey").click(function() {
    $(".now_survey").hide();
    $(".past_survey").show();
  });
});
