import $ from "jquery";
$(function() {
	$(".btn").click(function() {
		$(".form-signin").toggleClass("form-signin-left");
    $(".form-signup").toggleClass("form-signup-left");
    $(".frame").toggleClass("frame-long");
    $(".signup-inactive").toggleClass("signup-active");
    $(".signin-active").toggleClass("signin-inactive");
    $(".forgot").toggleClass("forgot-left");   
    $(this).removeClass("idle").addClass("active");
	});
});

$(function() {
	$(".btn-signup").click(function() {
    var fullname = $("#fullnameSignUp").val();
    var email = $("#emailSignUp").val();
    var nameofgroup = $("#nameofgroupSignUp").val();
    var password = $("#passwordSignUp").val();
    if(fullname == '' || email == '' || nameofgroup == '' || password == ''){
      $(".alertSignUpError").show();
    }else{
      $(".alertSignUpError").hide();
      $(".nav").toggleClass("nav-up");
      $(".form-signup-left").toggleClass("form-signup-down");
      $(".success").toggleClass("success-left"); 
      $(".frame").toggleClass("frame-short");
    }
	});
});

$(function() {
	$(".btn-signin").click(function() {
    var username = $("#usernameSignin").val();
    var password = $("#passwordSignin").val();
    if(username == '' || password == ''){
      $(".alertSignInError").show();
    }else{
      $(".alertSignInError").hide();
      $(".btn-animate").toggleClass("btn-animate-grow");
      $(".welcome").toggleClass("welcome-left");
      $(".cover-photo").toggleClass("cover-photo-down");
      $(".frame").toggleClass("frame-short");
      $(".profile-photo").toggleClass("profile-photo-down");
      $(".btn-goback").toggleClass("btn-goback-up");
      $(".forgot").toggleClass("forgot-fade");
    }
	});
});