$(document).ready(function () {
  $("#toDo-1").click(function () {
    $("#text-1").toggle();
    $("#toDo-1").toggle();
  });
  $("#text-1").click(function () {
    $("#toDo-1").toggle();
    $("#text-1").toggle();

  });
  $("#toDo-2").click(function () {
    $("#text-2").toggle();
    $("#toDo-2").toggle();
  });
  $("#text-2").click(function () {
    $("#toDo-2").toggle();
    $("#text-2").toggle();
  });
  $("#toDo-3").click(function () {
    $("#text-3").toggle();
    $("#toDo-3").toggle();
  });
  $("#text-3").click(function () {
    $("#toDo-3").toggle();
    $("#text-3").toggle();
  });


  $("#wk8").mouseover(function(){
    $(".pres8").css("background-color","rgba(255,255,255,0.4)");
      $(".pres8").fadeIn();
  });
  $("#wk8").mouseleave(function(){
      $(".pres8").hide();
  });  
  $("#wk7").mouseover(function(){ 
    $(".pres7").css("background-color","rgba(255,255,255,0.4)");
    $(".pres7").fadeIn();
  });
  $("#wk7").mouseleave(function(){
    $(".pres7").hide();
  });
  $("#wk6").mouseover(function(){
    $(".pres6").css("background-color","rgba(255,255,255,0.4)");
    $(".pres6").fadeIn();
  });
  $("#wk6").mouseleave(function(){
    $(".pres6").hide();
  });
  $("#wk5").mouseover(function(){
    $(".pres5").css("background-color","rgba(255,255,255,0.4)");
    $(".pres5").fadeIn();
  });
  $("#wk5").mouseleave(function(){
    $(".pres5").hide();
  });
  $("#wk4").mouseover(function(){
    $(".pres4").css("background-color","rgba(255,255,255,0.4)");
    $(".pres4").fadeIn();
  });
  $("#wk4").mouseleave(function(){
    $(".pres4").hide();
  });
  $("#wk3").mouseover(function(){
    $(".pres3").css("background-color","rgba(255,255,255,0.4)");
    $(".pres3").fadeIn();
  });
  $("#wk3").mouseleave(function(){
    $(".pres3").hide();
  });
  $("#wk2").mouseover(function(){
    $(".pres2").css("background-color","rgba(255,255,255,0.4)");
    $(".pres2").fadeIn();
  });
  $("#wk2").mouseleave(function(){
    $(".pres2").hide();
  });
  $("#wk1").mouseover(function(){
    $(".pres1").css("background-color","rgba(255,255,255,0.4)");
    $(".pres1").fadeIn();
  });
  $("#wk1").mouseleave(function(){
    $(".pres1").hide();
  });
  
  $("#valid").click(function () {
    var input1=$("#names").val();
    var input2=$("#emails").val();
    var input3=$("#textarea").val();

    if ((input1==="")||(input2==="") || (input3==="")){
      alert("Please ,fill the blank spaces for names emails and messages !!");
    }
    else {
      alert(input1 + " , we have received your message. Thank you fro reaching out to us.");
    }

  })

});


