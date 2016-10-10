$(document).ready( function() {

	if ($(window).width() > 768) {
		$('ul.nav li.dropdown').hover(function() {
			$(this).find('.dropdown-menu').stop(true, true).fadeIn(100);
		}, function() {
			$(this).find('.dropdown-menu').stop(true, true).fadeOut(100);
		});
	}

  /******************************
   * Popover functionality for Nav font icons
   ******************************/

	$("i.fa-phone, i.fa-search").popover({
			trigger: "manual",    
			placement: "bottom",    
			html: true,
			content: function(){
				if( $(this).hasClass('fa-phone') === true ) {
					return '<div class="text-center"><h4>1.866.GO.XACTLY (469.2285)</h4></div>';
					} else {
					return '<form class="form" role="form" style="width:200px"><label class="sr-only" for="email">Email</label><input type="text" class="form-control" placeholder="Seach..."><a class="btn btn-primary"><i class="fa fa-search" aria-hidden="true"></i></a></form>';
				}
			} 
		}).on("mouseenter", function () {        
			var _this = this;        
			$(this).popover("show");        
			$(this).siblings(".popover").on("mouseleave", function () {            
				$(_this).popover('hide');        
			});    
		}).on("mouseleave", function () {        
			var _this = this;        
			setTimeout(function () {            
				if (!$(".popover:hover").length) {                
					$(_this).popover("hide");            
				}        
			}, 100
			);  
		});


  /******************************
   * Masthead Functionality
   ******************************/

  /* Add Shadow to Header when Scrolled */

	if ( $("nav").length ) {

	    $(window).scroll( function() {

			if ( $(document).scrollTop() > 0 ) {
			$("nav").addClass("shadow");
			} else {
			$("nav").removeClass("shadow");
			}

	    });
	}

  /******************************
   * Customer Company image hover
   ******************************/


   $('.customer-bg').hover( function() {
   			$(this).children('.customer-bg-hover').fadeIn(300);
   		}, function() {
			$(this).children('.customer-bg-hover').fadeOut(300);
   		}
  	);

  /******************************
   * Homepage logo carousel
   ******************************/

	// Instantiate the Bootstrap carousel
	$('.multi-item-carousel').carousel({
		interval: 5000
	});


	// To make four logos appear and rotate one to left every 5 seconds
	$('.multi-item-carousel .item').each(function(){
		var next = $(this).next();

		if (!next.length) {
			next = $(this).siblings(':first');
		}

		next.children(':first-child').clone().appendTo($(this));

		for (var i=0;i<2;i++) {
			next=next.next();

			if (!next.length) {
				next = $(this).siblings(':first');
			}

			next.children(':first-child').clone().appendTo($(this));
		}

	});

	// Modal video start/stop/pause on click and close

    var youtubeFunc ='';

    var outerDiv = document.getElementById("modalVideo");

    var youtubeIframe = outerDiv.getElementsByTagName("iframe")[0].contentWindow;

    $('#modalVideo').on('hidden.bs.modal', function (e) {
    	youtubeFunc = 'pauseVideo';
    	youtubeIframe.postMessage('{"event":"command","func":"' + youtubeFunc + '","args":""}', '*');
    });

    $('#modalVideo').on('shown.bs.modal', function (e) {
        youtubeFunc = 'playVideo';
      	youtubeIframe.postMessage('{"event":"command","func":"' + youtubeFunc + '","args":""}', '*');
    });


});



