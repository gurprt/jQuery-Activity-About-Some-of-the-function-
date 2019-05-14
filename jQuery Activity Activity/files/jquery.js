

// for date pick
$( function() {
  $( "#datepicker" ).datepicker();
} );

//for hide and show function
$(document).ready(function(){
$("#hide").click(function(){
  $("dir.textWhichhide").hide();
});
$("#show").click(function(){
  $("dir.textWhichhide").show();
});
});


//for fontSize
$(document).ready(function(){
$("#increaseSize").click(function(){
  $("#fontSize").animate({fontSize: "2em"});
});
$("#restButton").click(function(){
  $("#fontSize").animate({fontSize: "1em"});
});
});

 //animation
$( function() {
  var state = true;
  $( "#button" ).on( "click", function() {
    if ( state ) {
      $( "#effect" ).animate({
        backgroundColor: "#00bfff",
        color: "#fff",
        width: 900
      }, 1000 );
    } else {
      $( "#effect" ).animate({
        backgroundColor: "#fff",
        color: "#000",
        width: 290
      }, 1000 );
    }
    state = !state;
  });
} );

//color code
$(document).ready(function(){
  $("#showButton").click(function(){
    $("#colorBox").fadeIn("slow");
    $("dir.boxEffect1").fadeIn("slow");
  });
});
