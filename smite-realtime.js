
(function() {
	var names = ['FreakDevil', 'incon', 'Grandom', 'Weak3n', 'Other'];
	var BUTTON_ID = 'SRTPPU';
	var BUTTON2_ID = 'SRTPPU2';
	var OTHER_ID = 'SRTPPUO';
	var FORM_ID = 'SRTTPF';
	var STYLE_ID = BUTTON_ID + '2';
	var CONTAINER_ID = BUTTON_ID + '3';
	var doc = document, create = doc.createElement.bind(doc), query = doc.querySelector.bind(doc);
		cleanup();

	var div = create('div')
	div.id = CONTAINER_ID;
	var form = create('form');
	form.id = FORM_ID;
	var text = create('input');
	text.type = 'text';
	text.id = OTHER_ID;
	text.disabled = true;
	function onInputChange(event) {
		text.disabled = event.target.value !== names[names.length - 1];
		if (!text.disabled) {
			text.focus();
		}
	}
	names.forEach(function(name, index) {
		var input = create('input');
		input.type = 'radio';
		input.value = name;
		input.name = 'name';
		input.id = 'name' + index;
		var span = create('span');
		span.innerHTML = '<label for="name'+index+'">' + name + '</label>';
		span.appendChild(input);
		form.appendChild(span);

		input.onchange = onInputChange;
	});

	form.appendChild(text);

	var buttonDiv = create('div');
	var button = create('button');
	button.id = BUTTON_ID;
	button.type = 'submit';
	button.innerHTML = 'Go';
	var button2 = create('button');
	button2.id = BUTTON2_ID;
	button2.type = 'button';
	button2.innerHTML = 'Cancel';
	buttonDiv.appendChild(button2);
	buttonDiv.appendChild(button);
	form.appendChild(buttonDiv);
	div.appendChild(form);
	var body = query('body');
	body.appendChild(div)

// Create a new style tag
var style = document.createElement("style");
style.id = STYLE_ID;
	// Append the style tag to head
	document.head.appendChild(style);
	// Grab the stylesheet object
	sheet = style.sheet

	sheet.addRule('#'+BUTTON_ID+', #'+BUTTON2_ID,				 	'background: gray; border: none; color: white; padding: 5px; margin: 0; margin-bottom: 5px; cursor: pointer;font-family: \'Open Sans\', sans-serif;font-weight: 300;font-size: 15px;');
	sheet.addRule('#'+BUTTON_ID+':hover, #'+BUTTON2_ID+':hover',	'background: #313131 !important');
	sheet.addRule('#' + FORM_ID, 'position: fixed;z-index: 2147483647;left: 50%;top: 0px;border-radius: 20px;display: flex;flex-direction: column;justify-content: flex-start;align-items: stretch;color: rgb(255, 255, 255);width: 200px;height: auto;background: rgb(51, 51, 51);padding-left: 20px;padding-right: 20px;font-family: \'Open Sans\', sans-serif;font-weight: 300;font-size: 15px;');
	sheet.addRule('#' + FORM_ID + ' span', 'text-align: left;display: flex;flex-direction: row-reverse;justify-content: flex-end;align-items: center;font-family: \'Open Sans\', sans-serif;font-weight: 300;font-size: 15px;');
	sheet.addRule('#' + FORM_ID + ' input', 'margin-top: 5px;margin-left: 5px;text-rendering: auto;color: initial;letter-spacing: normal;word-spacing: normal;text-transform: none;text-indent: 0px;text-shadow: none;display: inline-block;text-align: start;margin: 0em 0em 0em 0em;font-family: \'Open Sans\', sans-serif;font-weight: 300;font-size: 15px;');
	sheet.addRule('#' + FORM_ID + ' div', 'display: flex; flex-direction: row; justify-content: space-around; align-items: center; margin-top: 10px;font-family: \'Open Sans\', sans-serif;font-weight: 300;font-size: 15px;');
	query('#'+BUTTON2_ID).onclick = cleanup;
	query('#'+BUTTON_ID).onclick = function(){
		var value = query('input[name="name"]:checked').value;
		value = value === 'Other' ? query('input#'+OTHER_ID).value : value;
		cleanup();
		window.open('http://smite.guru/realtime/s/'+value);
	}
	function cleanup() {
		var style = query('#'+STYLE_ID);
		var div = query('#' + CONTAINER_ID);

		if (style !== null) {
			doc.head.removeChild(style);
		}
		if (div !== null) {
			doc.body.removeChild(div);
		}
		if (div !== null) {
			console.log('found things, cleanup up');
			return true;
		}
		return false;
	}
})();

