(function() {
	var names = ['FreakDevil', 'incon', 'Grandom', 'Weak3n', 'Tyderion', 'Other'];
	var BUTTON_ID = 'SRTPPU';
	var BUTTON2_ID = 'SRTPPU2';
	var BUTTON_CLASS = 'SRTPPU_class';
	var OTHER_ID = 'SRTPPUO';
	var FORM_ID = 'SRTTPF';
	var HIDDEN_INPUT_ID = 'SRTTPF22';
	var STYLE_ID = BUTTON2_ID + '2';
	var CONTAINER_ID = BUTTON2_ID + '3';
	var CONTROLS_CONTAINER_ID = BUTTON2_ID + '4';
	var doc = document,
	create = doc.createElement.bind(doc),
	query = doc.querySelector.bind(doc);
	cleanup();

	var div = create('div')
	div.id = CONTAINER_ID;
	div.addEventListener('keydown', function(e) {
		console.log('keydown: ', e.keyCode);
		 if (e.keyCode == 27) {
        	cleanup();
        }
	});
	var form = create('form');
	form.id = FORM_ID;
	var text = create('input');
	text.type = 'text';
	text.id = OTHER_ID;
	text.disabled = true;
	text.setAttribute('autocomplete', 'off')
	text.addEventListener("keydown", function(e) {
        // Enter is pressed
        if (e.keyCode == 13) {
        	e.preventDefault();
        	go('Other');
        }
    }, false);
	function go(name) {
		name = name === 'Other' ? query('input#' + OTHER_ID).value : name;
		window.open('http://smite.guru/realtime/s/' + name);
		cleanup();
	}
	function onInputChange(name) {
		return function(event) {
			text.disabled = name !== names[names.length - 1];
			if (!text.disabled) {
				text.focus();
			} else {
				go(name)
			}
		}
	}
	names.forEach(function(name, index) {
		var input = create('button');
		input.type = 'button';
		input.value = name;
		input.name = 'name';
		input.id = 'name' + index;
		input.innerHTML = name;
		input.setAttribute('class', BUTTON_CLASS);
		if (name === 'Other') {
			input.style.marginBottom = '6px';
		}
        form.appendChild(input);
        input.onclick = onInputChange(name);
    });

    var hidden = create('input');
    hidden.type = 'hidden';
    hidden.id = HIDDEN_INPUT_ID;
    form.appendChild(hidden);

	form.appendChild(text);

	var buttonDiv = create('div');
	buttonDiv.id = CONTROLS_CONTAINER_ID;

	var button = create('button');
	button.id = BUTTON_ID;
	button.type = 'button';
	button.innerHTML = 'Go';
	button.style.flexBasis = '45%';
	button.onclick = function(e) {
		go('Other')
	}
	button.setAttribute('class', BUTTON_CLASS);
	var button2 = create('button');
	button2.id = BUTTON2_ID;
	button2.type = 'button';
	button2.innerHTML = 'Cancel';
	button2.onclick = cleanup
	button2.setAttribute('class', BUTTON_CLASS);
	button2.style.flexBasis = '45%';
	buttonDiv.appendChild(button2);
    buttonDiv.appendChild(button);
    form.appendChild(buttonDiv);
    div.appendChild(form);
    // Create a new style tag
    var style = document.createElement("style");
    style.id = STYLE_ID;
    // Append the style tag to head
    document.head.appendChild(style);
    // Grab the stylesheet object
    sheet = style.sheet

    sheet.addRule('.' + BUTTON_CLASS, 'background: gray; border: none; color: white; padding: 5px; margin: 0; margin-bottom: 3px;margin-top: 3px; cursor: pointer;font-family: \'Open Sans\', sans-serif;font-weight: 300;font-size: 15px;');
    sheet.addRule('.' + BUTTON_CLASS + ':hover', 'background: #313131 !important');
    sheet.addRule('.' + CONTROLS_CONTAINER_ID, 'margin-top: 0px;display: flex;flex-grow: 1;justify-content: space-between;');
    // sheet.addRule('#' + BUTTON_ID + ', #' + BUTTON2_ID, 'width: 48%;');
    sheet.addRule('#' + FORM_ID, 'position: fixed;z-index: 2147483647;left: 50%;top: 0px;border-radius: 20px;display: flex;flex-direction: column;justify-content: flex-start;align-items: stretch;color: rgb(255, 255, 255);width: 200px;height: auto;background: rgb(51, 51, 51);padding-left: 20px;padding-right: 20px;font-family: \'Open Sans\', sans-serif;font-weight: 300;font-size: 15px;padding: 20px;');
    sheet.addRule('#' + FORM_ID + ' span', 'text-align: left;display: flex;flex-direction: row-reverse;justify-content: flex-end;align-items: center;font-family: \'Open Sans\', sans-serif;font-weight: 300;font-size: 15px;');
    sheet.addRule('#' + FORM_ID + ' input', 'text-rendering: auto;color: initial;letter-spacing: normal;word-spacing: normal;text-transform: none;text-indent: 0px;text-shadow: none;display: inline-block;text-align: start;margin: 0em 0em 0em 0em;font-family: \'Open Sans\', sans-serif;font-weight: 300;font-size: 15px;');
    sheet.addRule('#' + FORM_ID + ' div', 'display: flex; flex-direction: row; justify-content: space-around; align-items: center; margin-top: 10px;font-family: \'Open Sans\', sans-serif;font-weight: 300;font-size: 15px;');
    //margin-top: 6px;margin-left: 5px;margin-bottom: 3px;

    var body = query('body');
    body.appendChild(div)
    setTimeout(function() {
    	text.focus();
    }, 300)

    function cleanup() {
    	var style = query('#' + STYLE_ID);
    	var div = query('#' + CONTAINER_ID);

    	if (style !== null) {
    		doc.head.removeChild(style);
    	}
    	if (div !== null) {
    		doc.body.removeChild(div);
    	}
    }
})();


