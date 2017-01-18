(function() {
	var triggerBttnLogin = document.getElementById( 'trigger-overlay' ),
		overlay = document.querySelector( 'div.overlay' ),
		closeBttn = overlay.querySelector( 'button.overlay-close' );

	var triggerBttnSignUp = document.getElementById( 'trigger-overlay1' );

		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
		}
	}
	 
		// triggerBttnLogin.addEventListener( 'click', toggleOverlay );
		// triggerBttnSignUp.addEventListener('click', toggleOverlay);
		// closeBttn.addEventListener('click', toggleOverlay);
		$(".btn-login").click(function(){
			toggleOverlay();
		});
		$(".btn-signup").click(function(){
			toggleOverlay();
		});
		$("#manual_close_1").click(function(){
			toggleOverlay();
		});
	 
})();