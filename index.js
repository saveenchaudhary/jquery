// jQuery('selector').action();
// $('selector').action();

$(document).ready(function () {
  //~ Your jQuery Code here
  /*
  $("p").click(); //Click on p tag
  
  $("p").click(function () {
      console.log("You clicked on P");
    });
    
    let para = $("p");
    
    para.click(function () {
        console.log("You clicked", this);
        $(this).hide(); //Hide the specific clicked item
    });
    */

  //* Element Selector
  // $('p').click()

  //* Id Selector
  $("#first").click(function () {
    console.log("You clicked on First Id's container");
  });

  //* Class Selector
  $(".container").click(function () {
    console.log("You clicked on Class container");
  });

  //   ^------------Events---------------------

  //   Double Click Event
  $("#first").dblclick(function () {
    console.log("You Double clicked on First Id's container");
  });

  //   Double Click Event
  $("#first").mouseenter(function () {
    console.log("You mouseenter on First Id's container");
  });

  //^  hover Event - mutliple functions
  $(".container").hover(
    function () {
      console.log("You hover on container Id's container");
    },
    function () {
      console.log("Thanks for Comming");
    }
  );

  //* Demoing the on method - Multiple event handler
  $("p").on({
    click: function () {
      console.log("you clicked on", this);
    },
    mouseleave: function () {
      console.log("Mouseleave on ", this);
    },
  });

  // &Fade Function in jQuery
  /*
  $('#wiki').hide(2000,function(){
    console.log('Hidden');
  })
  $('#wiki').show(2000,function(){
    console.log('Show');
  })
  */
 
 $("#btn").click(function () {
   // $('#wiki').fadeToggle(700);
   // $('#wiki').toggle(2000);
   // $('#wiki').fadeOut(2000);
   // $('#wiki').fadeTo("slow", 0.4); //Speed,opacity
  });
  // fadeOut(), fadeToggle(),fadeTo()
  
  // ~Slide Method
  $("#btn").click(function () {
    // $('#wiki').slideToggle(1000);
    // $('#wiki').slideUp(2000);
    // $('#wiki').slideDown(2000);
  });

  //*Animate Function

  /*
  $("#wiki").animate(
    {
      opacity: 0.3,
      height: "150px",
      width: "300px",
    },
    2000
  ); //slow ,fast
  */

  //^__________DOM Manipulation___________________

  //& Text, HTML
  wikiText = $('#wiki').text();
  console.log(wikiText);

  html = $('html').html();
  console.log(html);

  //&Setting the value
  // $('#wiki').text("We are Setting into wiki Id Tag");
  
  //& Getting, setting value into FORM
  // console.log($('#ta').val()); //getting
  // $('#ta').val("We just put the value");  //settting
  
  //&Empty the Content of Element
  // $('#wiki').empty();  //Clear Text
  // $('#wiki').remove(); //Remove the Element

  //^ _____________CSS______________________

  //* Adding Class 
  $('#wiki').addClass('myClass2');

  //*Removing Class
  $('#wiki').removeClass('myClass2');

  //* Setting the CSS
  $('#wiki').css('background-color', 'rgb(175, 233, 204)');
  $('#wiki').css('font-size', '20px');

});
/*
Short hand of document.ready
$(function(){
    Your Code here
})

There are 3 Types of jQuery Selector
1. Element Selector
2. Id Selector
3. Class Selector

Events in jQuery
MouseEvent : click, dblclick, mouseenter, mouseleave
Keyboard : keypress, keydown, keyup,
Form : submit, change, focus, blur
Document/Window: load, resize, scroll, unload


*/
