var $win = $(window);
  var $img = $('.fadeInScroll'); // Change this to affect your desired element.
  $win.on('scroll', function() {
    var scrollTop = $win.scrollTop();
    $img.each(function() {
      var $self = $(this);
      var prev = $self.offset();
      if (prev) {
        var pt = 0;
        pt = prev.top - $win.height();
        $self.css({
          opacity: (scrollTop - pt) / ($self.offset().top - pt)
        });
      } else {
        $self.css({
          opacity: 1
        });
      }
    });
  }).scroll();


$(document).ready(function(){
   
    $(window).scroll( function(){
    
       $(".fadeInBlockLeft, .fadeInBlockRight").each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
    
            bottom_of_window = bottom_of_window + 50;  
          
            if( bottom_of_window > bottom_of_object ){
               
                $(this).animate({'opacity':'1'},1000);
              $('.fadeInBlockLeft').addClass("animate-inLeft");
         $('.fadeInBlockRight').addClass("animate-inRight");
            }
         }); 
       });
     });
  