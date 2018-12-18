$('.detail.first .counters').addClass("post-hidden").viewportChecker({
      classToAdd: 'post-visible', // Class to add to the elements when they are visible
      offset: 200,
       callbackFunction: function(elem, action){
       	$('.count').each(function () {
		    $(this).prop('Counter',0).animate({
		        Counter: $(this).text()
		    }, {
		        duration: 3000,
		        easing: 'swing',
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    });
		});
       }  
    });

function getName(activeSection){
	$('.otp-screen').hide()	
	$('.login-screen').show()
	$('body').removeClass('sidenav-open');
	var sectionText =  activeSection === '#tab2info' ? 'LOGIN' : 'SIGN UP'
	$('.login h1').text(sectionText)
}

$(document).ready(function(){
	$('.center').slick({
	  centerPadding: '60px',
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  dots: true,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  infinite:false,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerPadding: '40px',
	         slidesToScroll: 1,
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerPadding: '40px',
	         slidesToScroll: 1,
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	$('.partner').slick({
	  centerPadding: '60px',
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  dots: false,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  infinite:true,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerPadding: '40px',
	         slidesToScroll: 3,
	        slidesToShow: 3,
	        centerMode: true
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerPadding: '40px',
	         slidesToScroll: 1,
	        slidesToShow: 1,
	        centerMode: true
	      }
	    }
	  ]
	});
	$('.why-oasis-slider').slick({
	  centerPadding: '60px',
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  infinite:false,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerPadding: '40px',
	         slidesToScroll: 1,
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerPadding: '40px',
	         slidesToScroll: 1,
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	$('.offer').slick({
	  centerPadding: '60px',
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  infinite:false,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerPadding: '40px',
	         slidesToScroll: 1,
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerPadding: '40px',
	         slidesToScroll: 1,
	        slidesToShow: 1
	      }
	    }
	  ]
	});


	$('#mySidenav').append($('#navbar').html())
	$('#mySidenav').append($('.top-nav .container').html())

	$('[data-target="#modal-with-tab"]').on('click',function(){
		var activeSection = $(this).attr('show-sec');
		$('[href="'+activeSection+'"]').click();		
	})
	$('.with-nav-tabs .nav li a').click(function(){
		var activeSection = $(this).attr('show-sec');
		getName(activeSection)
	})

	$('#otp-login').click(function () {
		 $('.login-screen').hide()
		 $('.otp-screen').show()	
	})

// profile page
	$('.myprofile-edit img').click(function(){
			$('#profile-pic').click();	
	})

	$('#profile-pic').change(function() {
	  readURL(this);
	})

	if($(window).width()>767){
		var navWidth = $('#navbar').width();
		var brandWidth = $('.navbar-brand').width();
		var dropdownWidth = (navWidth - brandWidth)+'px'
		$('ul.dropdown-menu').css('width',dropdownWidth)
	}

	resizeDivHeight()
	

			$('.preview').each(function(){
				var divId = $(this).attr('id')
			      var galley = document.getElementById(divId)  
			      var viewer = new Viewer(galley, {
			        url: 'data-original',
			        toolbar: {
			          oneToOne: true,
			          prev: function() {
			            viewer.prev(true);
			          },
			          play: true,
			          next: function() {
			            viewer.next(true);
			          },
			          reset: true
			        },
			      });
			  })
	$('embed').css('width',($(window).width()-50)) 
	$('embed').css('height',$(window).height())
	var docHTML = $('#pdfviewer').html()
	$('.pdf-content').click(function(){
		var pdfUrl = $(this).attr('data-original-url');
		var dataUrl = 'https://docs.google.com/gview?embedded=true&url='+pdfUrl
		$('#pdfviewer').html(docHTML)
		$('#pdfviewer object').attr('data',dataUrl)
		$('#pdfviewer').modal('show')
	})
	$('.pdf-dload').click(function(){
		var purl = $(this).attr('data-original-url');
		//window.location.href="https://docs.google.com/gview?embedded=true&url="+purl;
		window.open(
		  'https://docs.google.com/gview?embedded=true&url='+purl,'_blank' // <- This is what makes it open in a new window.
		);
	});
	$('.location').click(function(){
		$('#mapviewer').modal('show')
	})	

	var counter = 2;
	var myInterval = setInterval(function () {
	 $('.easy h1').text(counter+'%')
	 ++counter;
	if(counter==101){
		counter = 1
	}
	}, 625);




$("article ul" ).on( "click", "li", function() {
  var pos = $(this).index()+2;
  $("tr").find('td:not(:eq(0))').hide();
  $('td:nth-child('+pos+')').css('display','table-cell');
  $("tr").find('th:not(:eq(0))').hide();
  $('li').removeClass('active');
  $(this).addClass('active');
});

// Initialize the media query
  var mediaQuery = window.matchMedia('(min-width: 640px)');
  
  // Add a listen event
  mediaQuery.addListener(doSomething);
  
  // Function to do something with the media query
  function doSomething(mediaQuery) {    
    if (mediaQuery.matches) {
      $('.sep').attr('colspan',5);
    } else {
      $('.sep').attr('colspan',2);
    }
  }
  
  // On load
  doSomething(mediaQuery);



// .report-claim
  $('.report-claim select#ploicyNumber').change(function(){
  	if($(this).val()!=''){
  		$('.agency').show()
  	}else{
  		$('.agency').hide()
  	}
  })

  $('.report-claim [name="accident"]').change(function(){
  	$('.upload-details').show()
  	var val = $(this).val()
  	if(val==='other'){
  		$('.othersec').show()
  	}else{
  		$('.othersec').hide()
  	}
  })


  // .report-claim
  $('.cancel-policy select#ploicyNumber').change(function(){
  	if($(this).val()!=''){
  		$('.cancelation').show()
  	}else{
  		$('.cancelation').hide()
  	}
  })

  $('.cancelation select#cancellationtype').change(function(){
  	
  	   if($(this).val()!=''){
	  		$('.upload-details,.refund').show()
	  	}else{
	  		$('.upload-details,.refund').hide()
	  	}	
  
  })

  $('[name="refund"]').change(function(){
  	$('.accountDetails').show()
  	// var val = $(this).val()
  	// if(val==='other'){
  	// 	$('.othersec').show()
  	// }else{
  	// 	$('.othersec').hide()
  	// }
  })

  //dashboard
  $('#lobtype').change(function(){
  	
  	   if($(this).val()!=''){
	  		$('#modal-with-step').modal('show');
	  	}else{
	  		$('#modal-with-step').modal('hide');
	  	}	
  
  })
  $('[name="policy-nominee"]').change(function(){
  	  if($(this).is(':checked')){
  		if($(this).val()=='self'){
	  		$('.buypolicy').show()
	  	}else{
	  		$('.buypolicy').hide();
	  		$('.selfpolicy').hide();
	  		$('.othersdetails').show();
	  	}	
 	 }
  })
  $('.newpolicy,.scannupload').click(function(){
  	$('#modal-with-step .login h1').text('Upload Document')
  		$('.form-detail').hide();
  		$('.uploaddocs').show();
  		$('.buy-options').hide();
  })

  $('.chassis').click(function(){
     	$('.form-detail').hide();
     	$('.buy-options').hide();
  		$('.chassis-options').show();		
  })

  $('.renewpolicy').click(function(){
   		$('.form-detail').hide();
  		$('.buy-options').show();
  })
  $('.otherspolicy').click(function(){
  		$('.othersdetails').hide()
  		$('.selfpolicy').show();
  		$('.buypolicy').show();
  })
  $('#modal-with-step .backButton').click(function(){
  	$('#modal-with-step .login h1').text('Buy policy')
  		$('.form-detail').show();
  		$('.uploaddocs').hide();
  		$('.buy-options').hide();
  		$('.chassis-options').hide();
  		
  })


$('#nextButton').click(function(){
	$('.login h1').text('Verify Details');
	$('.uploaddocs').hide();
	$('.doc_details').show();
})  
$('#verify_dtls,.manual').click(function(){
	$('#modal-with-step').modal('hide')
	setTimeout(function(){
		$('#modal-with-step3').modal('show')
	},1000)	
})  

$('#modal-with-step3 .backbutton').click(function(){
	$('#modal-with-step3').modal('hide')
	setTimeout(function(){
		$('#modal-with-step').modal('show')
	},100)	
})  

})



function resizeDivHeight(){
	 // Dashboard page
 	$('.Dashboard .row').each(function(){
		var divHeight = 0;
		$(this).find('.borderd').each(function(){
			if($(this).height()> divHeight){
				divHeight = $(this).height()
			}
		})
		//$(this).find('.borderd').not('.small').css('height',divHeight)
		if($(this).find('.borderd').hasClass('small')){
			divHeight = divHeight+50
		}
		var heightfield = ''
		$(window).width()> 991 ? heightfield = 'height' : heightfield = 'min-height'
		$(this).find('.borderd').not('.small,.myquotes').css(heightfield,divHeight)

	})
}

function readURL(input) {

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('#user-profile').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}

function openNav() {
    $('body').addClass('sidenav-open');
}

function closeNav() {
    $('body').removeClass('sidenav-open');
}
