$('document').ready(function() {
  $.ajaxSetup({ cache: true });
  $.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '1810040475914387',
      version: 'v2.7'
    });
    FB.login(function(response){
	  // Handle the response object, like in statusChangeCallback() in our demo
	  // code.
	});
    // alert('here it is');
  });
})

