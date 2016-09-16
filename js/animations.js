 $(document).ready(function() {

///////////////////////////////////////////////////////////
					// IMELDA ALONSO
//// ////  IMELDA ALONSO ////
	$('#fullname').addClass('animated fadeInDown')

//// ////  FRONT-END DEVELOPER  ////
	$('#title').addClass('animated fadeInDown')

////////   LINKS  ////
	$('#rotated-text-right').addClass('animated fadeInDown')
	$('#rotated-text-left').addClass('animated fadeInUp')

///////////////// LINK ABOUT / HOME  /////////////////////

$('#link_about').on('click',function(){

					$('#wrapper_third').removeClass('animated fadeOutUpBig')
					$('#wrapper_first').addClass('animated fadeOut')		
					$('#wrapper_third').addClass('animated fadeInDownBig')
								   .css('visibility','visible')
					})

$('#link_ia').on('click',function(){
					$('#wrapper_first').removeClass('animated fadeOut')	
					$('#wrapper_first').addClass('animated fadeIn')	
					$('#wrapper_third').addClass('animated fadeOutUpBig')

				})



///////////////////////////////////////////////////////////
					// ABOUT
///////////////////////////////////////////////////////////

//------i have to  fixing the timing in css

	// $('#hello').addClass('animated fadeInDown')
	// $('p').addClass('animated fadeInDown')

///////////////////////////////////////////////////////////
					// PROJECTS


///////////////// POEKU /////////////////////

$('#img_project').mouseover(function(){	
							$('#project_title').removeClass('fadeOutLeft')
							$('#project_title').addClass('animated fadeInLeft')
											   .css('display','unset')						
							})


 $('#img_project').mouseout(function(){	
							$('#project_title').removeClass('fadeInLeft')
							$('#project_title').addClass('animated fadeOutLeft')
											   .css('display','unset')
							})

$('#img_project').mouseover(function(){	
							$('#project_info').removeClass('fadeOutRight')
							$('#project_info').addClass('animated fadeInRight')
											   .css('display','unset')						
							})


$('#img_project').mouseout(function(){	
							$('#project_info').removeClass('fadeInRight')
							$('#project_info').addClass('animated fadeOutRight')
											   .css('display','unset')						
							})










///////////////// IDREAMEDME /////////////////////

$('#img_project_one').mouseover(function(){	
							$('#project_title_one').removeClass('fadeOutLeft')
							$('#project_title_one').addClass('animated fadeInLeft')
											   .css('display','unset')						
							})


 $('#img_project_one').mouseout(function(){	
							$('#project_title_one').removeClass('fadeInLeft')
							$('#project_title_one').addClass('animated fadeOutLeft')
											   .css('display','unset')
							})


/////////////////  I - PROJECTS /////////////////////

$('#img_project_one').mouseover(function(){	
							$('#project_info_one').removeClass('fadeOutRight')
							$('#project_info_one').addClass('animated fadeInRight')
											   .css('display','unset')						
							})


$('#img_project_one').mouseout(function(){	
							$('#project_info_one').removeClass('fadeInRight')
							$('#project_info_one').addClass('animated fadeOutRight')
											   .css('display','unset')						
							})



///////////////// IDREAMEDME /////////////////////

$('#img_project_two').mouseover(function(){	
							$('#project_title_two').removeClass('fadeOutLeft')
							$('#project_title_two').addClass('animated fadeInLeft')
											   .css('display','unset')						
							})


 $('#img_project_two').mouseout(function(){	
							$('#project_title_two').removeClass('fadeInLeft')
							$('#project_title_two').addClass('animated fadeOutLeft')
											   .css('display','unset')
							})


/////////////////  I - PROJECTS /////////////////////

$('#img_project_two').mouseover(function(){	
							$('#project_info_two').removeClass('fadeOutRight')
							$('#project_info_two').addClass('animated fadeInRight')
											   .css('display','unset')						
							})


$('#img_project_two').mouseout(function(){	
							$('#project_info_two').removeClass('fadeInRight')
							$('#project_info_two').addClass('animated fadeOutRight')
											   .css('display','unset')						
							})










})/////END 



