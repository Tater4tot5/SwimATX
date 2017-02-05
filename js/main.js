var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

$('#cmd').click(function () {
    doc.fromHTML($('.workoutmain').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('workout-file.pdf');
});


  function EasyPeasyParallax() {
  	scrollPos = $(this).scrollTop();
  	$('#banner').css({
  		'background-position' : '50% ' + (-scrollPos/4)+"px"
  	});
  	$('#bannertext').css({
  		'margin-top': (scrollPos/4)+"px",
  		'opacity': 1.1-(scrollPos/230)
  	});
  }
  $(document).ready(function(){
  	$(window).scroll(function() {
  		EasyPeasyParallax();
  	});
  });
// bxslider
  $(document).ready(function(){
  $('.bxslider').bxSlider();
});
