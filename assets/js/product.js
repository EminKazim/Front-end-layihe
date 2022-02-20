$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

	$(document).ready(function () {
		$("h6").hover(function () {
		 $(this).addClass("active")
		});  
		$("h6").mouseout(function () {
			$(this).removeClass("active")
		   });  
	  });
	  
	  
})