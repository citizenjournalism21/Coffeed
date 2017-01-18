$("document").ready(function($){
    
    var nav = $('.navbar-original');
    $('.navbar.navbar-fixed-top .navbar-nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 400,
        filter: ':not(.btn)'
    });
    var navbar_limit = $('#navbar-items').offset().top;
    $(window).scroll(function () {
        if($(window).scrollTop() >= navbar_limit - 100) {
            $('#navbar-items').addClass('hiding-navbar');
        }
        else if($(window).scrollTop() < navbar_limit){
            $('#navbar-items').removeClass('hiding-navbar');
        }
        if ($(window).scrollTop() > 5) {

            $('.navbar-original').addClass('navbar-fixed-top').css('position','fixed').css('top','0').css('margin-top','0');
            $('.nav-original').css('opacity', '0');
            $('nav.navbar-fixed-top').css('opacity', '1').css('background', 'white');
        } else {
            // $('#navbar-items').css('z-index','9500');
            $('nav.navbar-fixed-top').css('background', 'none');
            $('.navbar-original').css('opacity', '1');
        }
    });

    $('.btn-login').click(function(){
        $('.navbar').css('z-index','-100');
        $('.logindiv').css('z-index','200');
        $('.logindiv').html(login_Html);
        $('.btn-login').css('color','#ffffff');
        $('html').css('overflow-y','hidden');
    });

    $('.btn-signup').click(function(){
        $('.navbar').css('z-index','-100');
        $('.signupdiv').css('z-index','200');
        $('.signupdiv').html(Registration_HTML);
        $('.btn-signup').css('color','#ffffff');
        $('html').css('overflow-y','hidden');
    });
 

    $('#manual_close_1').click(function() {
        window.location.reload();
        $('.logindiv').css('z-index','-200');
        $('.signupdiv').css('z-index','-200');
        $('.logindiv').empty();
        $('.signupdiv').empty();
        $('.navbar').css('z-index','9500');
        $('html').css('overflow-y','auto');
        $('html').css('overflow-x','hidden');
    });
 });