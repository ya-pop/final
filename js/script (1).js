jQuery(document).ready(function($) {
  
  // the nav-tabs hide when scroll down show when scroll up

  $("#nav-tabs").headroom({
  "offset": 205,
  "tolerance": 5,
  "classes": {
    "initial": "animated",
    "pinned": "swingInX",
    "unpinned": "swingOutX"
  }});

  // the bottom button that adds new article and book

  var ul=$("#addMenu"),
      li=$("#addMenu li"),  // 
      i=li.length,  // number of items in menu
      n=i-1,      
      r=50;        // the distance between items and button
  ul.click(function(){
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
      for(var a=0;a<i;a++){
        li.eq(a).css({
          'transition-delay':""+(50*a)+"ms",
          '-webkit-transition-delay':""+(50*a)+"ms",
          'left':(r*Math.cos(90/n*a*(Math.PI/180))),
          'top':(-r*Math.sin(90/n*a*(Math.PI/180)))  
        });
      }
    }else{
      li.removeAttr('style');
    }
  });



});