
(function() {
	var names = ['FreakDevil', 'incon', 'Grandom', 'Weak3n', 'Other'];
	var BUTTON_ID = 'SRTPPU';
	var BUTTON2_ID = 'SRTPPU2';
	var OTHER_ID = 'SRTPPUO';
	var doc = document, create = doc.createElement.bind(doc), query = doc.querySelector.bind(doc);
	var div = create('div')
	div.id = 'SRTPPUB';
	var form = create('form');
	form.style.position = 'fixed';
	form.style.zIndex = 2147483647;
	form.style.left = '50%';
	form.style.top = '0';
	form.style.background =  '#333';
	form.style.borderRadius = '20px';
	form.style.display = 'flex';
	form.style.flexDirection = 'column';
	form.style.justifyContent = 'flex-start';
	form.style.alignItems = 'flex-start';
	form.style.color = '#fff'
	form.style.width = '200px';
	form.style.height = '200px';
	names.forEach(function(name) {
		var input = create('input');
		input.type = 'radio';
		input.value = name;
		input.name = 'name';
		var span = create('span');
		span.innerHTML = name;
		span.appendChild(input);
		span.style.alignSelf = 'stretch';
		span.style.textAlign = 'left';
		span.style.paddingLeft =  '20px';
		form.appendChild(span);
	});
	function setButtonStyle(button) {
		button.style.background = 'gray';
		button.style.border = 'none';
		button.style.color = 'white';
		button.style.padding = '5px';
			button.style.cursor = 'pointer';

	}
	var text = create('input');
	text.type = 'text';
	text.id = OTHER_ID;
	form.appendChild(text);
	var button = create('button');
	button.id = BUTTON_ID;
	button.type = 'button';
	button.innerHTML = 'Go';
	setButtonStyle(button);
	var button2 = create('button');
	button2.id = BUTTON2_ID;
	button2.type = 'button';
	button2.innerHTML = 'Cancel';
	setButtonStyle(button2);
	form.appendChild(button2);
	form.appendChild(button);
	div.appendChild(form);
	var body = query('body');
	body.appendChild(div)

// Create a new style tag
	var style = document.createElement("style");
	// Append the style tag to head
	document.head.appendChild(style);
	// Grab the stylesheet object
	sheet = style.sheet
	// Use addRule or insertRule to inject styles
	sheet.addRule('#'+BUTTON_ID+':hover','background: #313131 !important');
	sheet.insertRule('#'+BUTTON2_ID+':hover { background: #313131  !important }', 0);

	query('#'+BUTTON2_ID).onclick = function(){
		body.removeChild(div);
		document.head.removeChild(style);
	}
	query('#'+BUTTON_ID).onclick = function(){
		var value = query('input[name="name"]:checked').value;
		value = value === 'Other' ? query('input#'+OTHER_ID).value : value;
		body.removeChild(div);
		document.head.removeChild(style);
		window.open('http://smite.guru/realtime/s/'+value);
	}
})();
