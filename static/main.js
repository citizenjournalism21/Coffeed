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
    var el;
    var uid = 0;
    var accessToken = 0;
    function getStatus()
    {
        FB.getLoginStatus(function(response) 
        {
                if (response.status === 'connected') 
                {
                    uid = response.authResponse.userID;
                    accessToken = response.authResponse.accessToken;
                    $('.logindiv').addClass('hidden');
                    $('.interestdiv').removeClass('hidden');
                } 
                else if (response.status === 'not_authorized') 
                {
                        // the user is logged in to Facebook, 
                        // but has not authenticated your app
                } 
                else
                {
                    FB.login(function(response){
                        uid = response.authResponse.userID;
                        accessToken = response.authResponse.accessToken;
                        $('.logindiv').addClass('hidden');
                        $('.interestdiv').removeClass('hidden');
                        // document.getElementById('manual_close_1').click();
                    });
                }
        },true);
    }
    function fb()
    {
        $.ajaxSetup({ cache: true });
        $.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
           FB.init({
                    appId: '1810040475914387',
                    version: 'v2.7'
                });
           getStatus();
         });
    }

    $('.btn-login').click(function(){
        $('.navbar').css('z-index','-100');
        $('.logindiv').css('z-index','200');
        $('.logindiv').removeClass('hidden');
        $('html').css('overflow-x','hidden');
        $('html').css('overflow-y','hidden');
        $('.btn-login').css('color','#ffffff');
        el = document.getElementById('fb-button1');
        if(el){
            el.addEventListener('click', function(){
                fb();
            });
        }
        var userName = document.getElementById('email1');
        var password = document.getElementById('exampleInputPassword1');

        $('#submitButton').click(function(){
            if(userName.value == '' && password.value == '')
            {
                alert('Please Enter User Name and Password');
            }
            else if(userName.value == '')
            {
                alert('Please Enter userName');
            }
            else if(password.value == '')
            {
                alert('Please Enter password');
            }
            else
            {
                $('.logindiv').addClass('hidden');
                $('.interestdiv').removeClass('hidden');
            }
        });
    });

    

    $('.btn-signup').click(function(){
       $('.navbar').css('z-index','-100');
        $('.signupdiv').css('z-index','200');
        $('.signupdiv').removeClass('hidden');
        
        $('#submitSignUp').click(function(){
            // document.getElementById('genderSelection').selectedIndex != null &&
            if( document.getElementById('signupName').value == ''
                && document.getElementById('passwordSignUp').value == "" && document.getElementById('signUpEmail').value == "")
            {
                alert('Please Fill all fields');
            }
            else if(document.getElementById('signupName').value == '')
            {
                alert('Please Enter userName');
            }
            else if(document.getElementById('passwordSignUp').value == '')
            {
                alert('Please Enter password');
            }
            
            else if(document.getElementById('signUpEmail').value == '')
            {
                alert('Please Enter Email');
            }
            else
            {
                $('.signupdiv').addClass('hidden');
                $('.interestdiv').removeClass('hidden');
            }
        });
        $('.btn-signup').css('color','#ffffff');
        $('html').css('overflow-y','hidden');
        $('html').css('overflow-x','hidden');
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

    $('#fb-button1').click(function(){
        debugger;
        

    });


    // $("button#fb-button1").click(function() {
    //     alert('test hello');
    // });

    // $('document').on('click', '#fb-button1', function(){
    //     // do something here
    //     alert('here I am');
    // });

 });