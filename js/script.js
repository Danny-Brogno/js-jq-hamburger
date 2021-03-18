// // TAG SELECTION + fadeIn & fadeOut (in function).
//
// function paragraph(){
//
//   $('header p').fadeOut(2000, function(){
//   $('header p').fadeIn(2000);
//   });
// }
// paragraph();
//
// // CLASS SELECTION + fadeIn & fadeOut (in function).
//
// function title(){
//
//   $('.lol').fadeOut(2000, function(){
//   $('.lol').fadeIn(2000);
//   });
// }
// title();
//
// // CLICK & DOUBLE CLICK
//
// $(".one").click(function(){
//   $(".one").hide();
// });
//
// $(".two").dblclick(function(){
//   $(".two").hide();
// });
//
// // MOUSE ENTER & MOUSE LEAVER
//
// // 1)
//
// $(".three").mouseenter(function(){
//   $(".three").fadeOut(2000);
// });
//
// // 2)
//
// $(".three").mouseleave(function(){
//   $(".three").fadeIn(2000);
// });
//
// // 3) ALTERNATING EFFECTS
//
// $(document).ready(function(){
//   $(".four").on({
//     mouseenter: function(){
//       $(".four").css("color", "red");
//     },
//     mouseleave: function(){
//       $(".four").css("color", "blue");
//     },
//     click: function(){
//       $(".four").css("color", "purple");
//     }
//   });
// });
//
// // HOVER + TOGGLE
//
// $(".five").hover(function(){
//   $(".five").css("background-color", "brown");
//   $(".five").toggle();// TOGGLE MAKES IT ALTERNATE
// });
//
// // FADE IN/FADE OUT + ID SELECTION
//
// // $("main button").click(function(){
// //   $("#six").fadeIn(3000);
// //   $("#seven").fadeIn(4000);
// //   $("#eight").fadeIn(5000);
// //   $("#six").fadeOut(3000);
// //   $("#seven").fadeOut(4000);
// //   $("#eight").fadeOut(5000);
// // });
//
//
// // FADE toggle
//
// $(document).ready(function(){
//   $("main button").click(function(){
//     $("#six").fadeToggle();
//     $("#seven").fadeToggle("slow");
//     $("#eight").fadeToggle(2000);
//   });
// });



function hamburgerOff(){

  $(".fa-bars").click(function(){
    $(".fa-bars").hide();
    $(".hamburger-menu").show();
  });
}
hamburgerOff();

function hamburgerOn(){

  $(".fa-times").click(function(){
    $(".hamburger-menu").hide();
    $(".fa-bars").show();
  });
}
hamburgerOn();
