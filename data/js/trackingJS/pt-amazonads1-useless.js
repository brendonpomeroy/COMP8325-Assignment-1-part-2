!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://s3.amazonaws.com/subscription-cdn/0.2/widget.min.js";fjs.parentNode.insertBefore(js,fjs);
                        (function replacePlaceholder(){ var inputs = document.getElementsByTagName('input'), timer = setInterval(function(){ for (var x = 0, l = inputs.length; x < l; x += 1){if (inputs[x].getAttribute('placeholder') === 'you@example.com') {inputs[x].setAttribute('placeholder', 'Your email here');clearInterval(timer);}}}, 100); }());
                        }}(document, "script", "sendgrid-subscription-widget-js");
                