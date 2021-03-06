"use strict";

jQuery(document).ready(function($){

	/************** Menu Content Opening *********************/
	$(".main_menu a, .responsive_menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$("#menu-container .content").hide();
		$("#menu-container #menu-"+id[1]).addClass("animated fadeInDown").show();
		$("#menu-container .homepage").hide();
		$(".support").hide();
		$(".testimonials").hide();
		return false;
	});

	$( window ).load(function() {
	  $("#menu-container .products").hide();
	});

	$(".main_menu a.templatemo_home").addClass('active');

	$(".main_menu a.templatemo_home").click(function(){
		$("#menu-container .homepage").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.templatemo_page1").removeClass('active');
		$(".main_menu a.templatemo_page2").removeClass('active');
		$(".main_menu a.templatemo_page3").removeClass('active');
		$(".main_menu a.templatemo_page4").removeClass('active');
		return false;
	});

	$(".main_menu a.templatemo_page1").click(function(){
		$("#menu-container .navi").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.templatemo_home").removeClass('active');
		$(".main_menu a.templatemo_page2").removeClass('active');
		$(".main_menu a.templatemo_page3").removeClass('active');
		$(".main_menu a.templatemo_page4").removeClass('active');
		//$("#navi_profile").show();
		//$("#navi_location").hide();
		//$("#navi_concept").hide();
		//$("#navi_history").hide();
		return false;
	});

	$(".main_menu a.templatemo_page2").click(function(){
		$("#menu-container .gallery").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.templatemo_home").removeClass('active');
		$(".main_menu a.templatemo_page1").removeClass('active');
		$(".main_menu a.templatemo_page3").removeClass('active');
		$(".main_menu a.templatemo_page4").removeClass('active');
		//$("#navi_content").show();
		//$("#navi_service").hide();
		//$("#navi_skill").hide();
		//$("#navi_product").hide();
		return false;
	});

	$(".main_menu a.templatemo_page3").click(function(){
		$("#menu-container .about").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.templatemo_page1").removeClass('active');
		$(".main_menu a.templatemo_page2").removeClass('active');
		$(".main_menu a.templatemo_home").removeClass('active');
		$(".main_menu a.templatemo_page4").removeClass('active');
		return false;
	});


	$(".main_menu a.templatemo_page4").click(function(){
		$("#menu-container .privacy").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.templatemo_page1").removeClass('active');
		$(".main_menu a.templatemo_page2").removeClass('active');
		$(".main_menu a.templatemo_page3").removeClass('active');
		$(".main_menu a.templatemo_home").removeClass('active');
		return false;
	});


	$("#templatemo_navi_profile").click(function(){
		$("#navi_profile").show();
	    $("#navi_location").hide();
		$("#navi_concept").hide();
		//$("#navi_history").hide();
		return false;
	});

	$("#templatemo_navi_location").click(function(){
		$("#navi_location").show();
		$("#navi_profile").hide();
		$("#navi_concept").hide();
		//$("#navi_history").hide();
		return false;
	});

	$("#templatemo_navi_concept").click(function () {
	    $("#navi_concept").show();
	    $("#navi_profile").hide();
	    $("#navi_location").hide();
	    //$("#navi_history").hide();
	    return false;
	});

    //	$("#templatemo_navi_history").click(function () {
    //	    $("#navi_history").show();
    //	    $("#navi_profile").hide();
    //	    $("#navi_location").hide();
    //	    $("#navi_concept").hide();
    //	    return false;
    //	});

	$("#templatemo_navi_content").click(function () {
	    $("#navi_content").show();
	    $("#navi_service").hide();
	    $("#navi_skill").hide();
	    $("#navi_product").hide();
	    return false;
	});

	$("#templatemo_navi_service").click(function () {
	    $("#navi_service").show();
	    $("#navi_content").hide();
	    $("#navi_skill").hide();
	    $("#navi_product").hide();
	    return false;
	});

	$("#templatemo_navi_skill").click(function () {
	    $("#navi_skill").show();
	    $("#navi_service").hide();
	    $("#navi_content").hide();
	    $("#navi_product").hide();
	    return false;
	});

	$("#templatemo_navi_product").click(function () {
	    $("#navi_product").show();
	    $("#navi_service").hide();
	    $("#navi_skill").hide();
	    $("#navi_content").hide();
	    return false;
	});
	//$("#templatemo_navi_history").click(function(){
		//$("#navi_history").show();
		//$("#navi_profile").hide();
	    //$("#navi_location").hide();
		//$("#navi_concept").hide();
		//return false;
	//});

	/************** Gallery Hover Effect *********************/
	$(".overlay").hide();

	$('.gallery-item').hover(
	  function() {
	    $(this).find('.overlay').fadeIn(1000);
	  },
	  function() {
	    $(this).find('.overlay').fadeOut(1000);
	  }
	);

	/*********** Menu Top ****************/
	 var num = 50;
	$(window).bind('scroll', function () {
		if ($(window).scrollTop() > num) {
			$('.menu').addClass('fixed');
		} else {
			$('.menu').removeClass('fixed');
		}
	});


	/************** LightBox *********************/
	$(function(){
		$('[data-rel="lightbox"]').lightbox();
	});


	$("a.menu-toggle-btn").click(function() {
	  $(".responsive_menu").stop(true,true).slideToggle();
	  return false;
	});

    $(".responsive_menu a").click(function(){
		$('.responsive_menu').hide();
	});

});

/********* Map  ************/


