$(document).ready(function(){
  $("toDo-1").click(function(){ 
    $("text-1").toggle();
    $("toDo-1").toggle();
  });
  $("text-1").click(function(){
     $("toDo-1").toggle();
     $("text-1").toggle();
  
  });
  $("toDo-2").click(function(){
    $("text-2").toggle();
    $("toDo-2").toggle();
  });
  $("text-2").click(function(){
    $("toDo-2").toggle();
    $("text-2").toggle();
  });
  $("toDo-3").click(function(){
    $("text-3").toggle();
    $("toDo-3").toggle();
  });
  $("text-3").click(function(){
    $("toDo-3").toggle();
    $("text-3").toggle();
  });
});
$(document).ready(function(){
  $("work-4").click(function(){
    $("work-4").hover(function(){
      $("des-4").show();
    });
  });
});


