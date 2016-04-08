function scrollToElement(elementSelector){
  var scrolloffset = 10;
  var scrollspeed = 500;
  
  var $target = $(elementSelector);
  var scrollTargetBot = $target.offset().top - $(window).height() + $target.height() + scrolloffset;
  var scrollTargetTop = $target.offset().top - scrolloffset;
  
  var winHeight = $(window).height();
  var winScrollTop = $(window).scrollTop();
   
  if(winScrollTop > scrollTargetTop){
    // scroll up if element is not on screen
    $('html, body').animate({
      scrollTop: scrollTargetTop
    }, scrollspeed);  
  }
  else if((winScrollTop + winHeight) < scrollTargetBot){
    // scroll down if element is not on screen
    $('html, body').animate({
      scrollTop: scrollTargetBot
    }, scrollspeed);  
  }
}