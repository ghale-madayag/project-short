$(document).ready(function() {
	$('select').material_select();
	//initialize the main canvas
	var canvas = new fabric.Canvas('mainCanvas');
	//initialize color box
	$('.text-color-box').colpick({
		colorScheme:'dark',
		layout:'rgbhex',
		color:'ff8800',
		onSubmit:function(hsb,hex,rgb,el) {
			$(el).css('background-color', '#'+hex);
			$(el).colpickHide();
			$("#textColor").val('#'+hex);
		}
	}).css('background-color', '#000000');

	$('.border-color-box').colpick({
		colorScheme:'dark',
		layout:'rgbhex',
		color:'ff8800',
		onSubmit:function(hsb,hex,rgb,el) {
			$(el).css('background-color', '#'+hex);
			$(el).colpickHide();
			$("#textBorderColor").val('#'+hex);
		}
	}).css('background-color', '#000000');

	$("#style-bold").on('click', function(){
		$(this).toggleClass("act-style");
		var checked = !$(this).data('checked');
	  	$('#on-bold').prop('checked', checked);
	  	$(this).data('checked', checked);
	});

	$("#style-italic").on('click', function(){
		$(this).toggleClass("act-style");
		var checked = !$(this).data('checked');
	  	$('#on-italic').prop('checked', checked);
	  	$(this).data('checked', checked);
	});

	$("#translate").on('click', function(){
		$(this).toggleClass("act-translate");
		var checked = !$(this).data('checked');
		$('#on-translate').prop('checked', checked);
		$(this).data('checked', checked);
	})

	/*--------- fabric js ------------------*/

	fabric.loadSVGFromURL('img/based-back.svg', function(objects, options){
  	  	var group = fabric.util.groupSVGElements(objects, options);

  	  	group
	    .set({ left: 10, top: 20})
	    .scaleToWidth(350)
	    .setCoords();

	    canvas.add(group);
	    group.center();
	  	group.selectable = false;

	  	/*------------- initialize color --------------------*/
	  	var bLeg = canvas.item(0).getObjects().filter(function(obj) {
		  	return obj.id === 'bLeg';
	  	})[0];

	  	var fLeg = canvas.item(0).getObjects().filter(function(obj) {
		  	return obj.id === 'fLeg';
	  	})[0];

	  	var bLefTop = canvas.item(0).getObjects().filter(function(obj) {
		  	return obj.id === 'bLefTop';
	  	})[0];

	  	var bRigTop = canvas.item(0).getObjects().filter(function(obj) {
		  	return obj.id === 'bRigTop';
	  	})[0];

	  	var bLefBot = canvas.item(0).getObjects().filter(function(obj) {
		  	return obj.id === 'bLefBot';
	  	})[0];

	  	var bRigBot = canvas.item(0).getObjects().filter(function(obj) {
		  	return obj.id === 'bRigBot';
	  	})[0];

	  	var bLineBot = canvas.item(0).getObjects().filter(function(obj) {
		  	return obj.id === 'bLineBot';
	  	})[0];

	  	var bLineTop = canvas.item(0).getObjects().filter(function(obj) {
		  	return obj.id === 'bLineTop';
	  	})[0];

	  	//waist
	  	var fWaist = canvas.item(0).getObjects().filter(function(obj) {
		  	return obj.id === 'fWaist';
	  	})[0];

	  	var bWaist = canvas.item(0).getObjects().filter(function(obj) {
		  	return obj.id === 'bWaist';
	  	})[0];

	  	var bWaistC = canvas.item(0).getObjects().filter(function(obj) {
		  	return obj.id === 'bWaistC';
	  	})[0];

	  	var bTop = canvas.item(0).getObjects().filter(function(obj) {
		  	return obj.id === 'bTop';
	  	})[0];

	  	//front id
	  	var fTop = canvas.item(0).getObjects().filter(function(obj) {
		  	return obj.id === 'fTop';
	  	})[0];

	  	var fLefTop = canvas.item(0).getObjects().filter(function(obj) {
		  	return obj.id === 'fLefTop';
	  	})[0];

	  	var fRigTop = canvas.item(0).getObjects().filter(function(obj) {
		  	return obj.id === 'fRigTop';
	  	})[0];

	  	var fLefBot = canvas.item(0).getObjects().filter(function(obj) {
		  	return obj.id === 'fLefBot';
	  	})[0];

	  	var fRigBot = canvas.item(0).getObjects().filter(function(obj) {
		  	return obj.id === 'fRigBot';
	  	})[0];

/*---------------- color function --------------------*/

  	$('.color-tool li').on('click', function(){
	var legColor = $(this).data('lcolor');
	var wstColor = $(this).data('wcolor');

		if (legColor!=null) {
			bLeg.fill = legColor;
			fLeg.fill = legColor;

			if(legColor!='#000000'){
				bLefTop.fill = '#000';
				bLefTop.opacity = '0.2'

				bRigTop.fill = '#000';
				bRigTop.opacity = '0.2'

				bLefBot.fill = '#000';
				bLefBot.opacity = '0.2'

				bRigBot.fill = '#000';
				bRigBot.opacity = '0.2'

				bLineBot.fill = '#000';
				bLineBot.opacity = '0.2'

				bLineTop.fill = '#000';
				bLineTop.opacity = '0.2'

				//front
				fLefTop.fill = '#000';
				fLefTop.opacity = '0.2'

				fRigTop.fill = '#000';
				fRigTop.opacity = '0.2'

				fLefBot.fill = '#000';
				fLefBot.opacity = '0.2'

				fRigBot.fill = '#000';
				fRigBot.opacity = '0.2'

			}else{

				bLefTop.fill = '#5C5B60';
				bRigTop.fill = '#5C5B60';
				bLefBot.fill = '#5C5B60';
				bRigBot.fill = '#5C5B60';

				fLefTop.fill = '#5C5B60';
				fRigTop.fill = '#5C5B60';
				fLefBot.fill = '#5C5B60';
				fRigBot.fill = '#5C5B60';

				bLineBot.fill = '#5C5B60';
				bLineTop.fill = '#5C5B60';

				bLefTop.opacity = '1';
				bRigTop.opacity = '1';
				bLefBot.opacity = '1';
				bRigBot.opacity = '1';

				fLefTop.opacity = '1';
				fRigTop.opacity = '1';
				fLefBot.opacity = '1';
				fRigBot.opacity = '1';

				bLineBot.opacity = '1';
				bLineTop.opacity = '1';
			}

		}else if(wstColor!=null){
			fWaist.fill = wstColor;
			bWaist.fill = wstColor;
			bWaistC.fill = wstColor;


			if(wstColor!='#000000'){
				bTop.fill = '#000';
				bTop.opacity = '0.2';

				fTop.fill = '#000';
				fTop.opacity = '0.2';
			}else{
				bTop.fill = '#5C5B60';
				bTop.opacity = '1';

				fTop.fill = '#5C5B60';
				fTop.opacity = '1';
			}
			
		}
		canvas.renderAll();
  });

}, reviver);


	/*----------- add text ---------------*/
	$('#btnAddText').on('click', function(){
		var txtArea = $("#txt-area").val();
		var fontSize = $("#font-size-selector").val();
		var fontBold = $("#on-bold").is(':checked');
		var fontItalic = $("#on-italic").is(':checked');
		var fontTrans = $("#on-translate").is(':checked');
		var textColor = $('#textColor').val();
		var txtBorder = $('#txt-border').is(':checked');
		var textBorderColor = $('#textBorderColor').val();
		var txtRange = $("#borderRng").val();

		if(txtBorder == true){
			var txtBorderColor = textBorderColor
			stroke = txtRange;
		}else{
			var stroke = 0;
		}

		if(fontTrans == true){
			var fontFamily = "thai7bangkokssk";
		}else{
			var fontFamily = $("#font-family-selector").val();
		}

		//font 
		if (fontBold == true) {
			fontBold = 'bold';
		}else{
			fontBold = 'normal';
		}

		if (fontItalic == true) {
			fontItalic = 'italic';
		}else{
			fontItalic = 'normal';
		}

		var text = new fabric.IText(txtArea, { 
			left: 250, 
			top: 200,
			fontFamily: fontFamily,
			fontSize: fontSize,
			fontWeight: fontBold,
			fontStyle: fontItalic,
			lockScalingX: true,
  			lockScalingY: true,
  			cornerSize: 3,
  			stroke: txtBorderColor,
  			strokeWidth: stroke
		});


		if (txtArea != "") {

			text.set({fill: textColor});
			canvas.add(text);
			canvas.renderAll();
			$("#txt-area").val('');
			
		}else{
			$('#modal1').openModal();
		}

	});
	

	/*---------- toggle --------*/
	$("#txt-border").on('click',function(){
		$("#togView").slideToggle("brdView");
	});

	/*---------- select text --------------*/
	canvas.on('object:selected', onObjectSelected);
	canvas.on('object:modified', onMove);
	canvas.on('selection:cleared', offObjectSelected);
	
	function onMove(e){
		activeObject = e.target.get('type');
		console.log(activeObject);

		if (activeObject==='i-text'){
			var textUp = e.target;

			$("#txtTop").val(textUp.get('top'));
			$("#txtLeft").val(textUp.get('left'));

		}else{
			console.log('not text');
		}
	}

	/*---------- object modification -----------------*/
	function offObjectSelected(e) {
		$("#txt-area").val('');
		$(".btnDisplay").css('display','none');
		$("#btnAddText").css('display','block');
	}


	function onObjectSelected(e) {
		activeObject = e.target.get('type'); 

		if (activeObject==='i-text'){
			var textUp = e.target;

			$("#txt-area").val(textUp.getText('type'));
			$("#txtTop").val(textUp.get('top'));
			$("#txtLeft").val(textUp.get('left'));
			$(".btnDisplay").css('display','block');
			$("#btnAddText").css('display','none');
			//canvas.on('after:render', onMove(textUp.get('top'),textUp.get('left')));

		}else{
			console.log('not text');
		}
	}

	function reviver(element, object) {
	  object.id = element.getAttribute('id');
	}

	function classHandler(element, object) {
	  object.id = element.getAttribute('id');
	}
	/*--------------- update text ----------------------*/
	$('#btnUpText').on('click', function(){
		var obj = canvas.getActiveObject();
		var txtArea = $("#txt-area").val();
		var fontSize = $("#font-size-selector").val();
		var fontBold = $("#on-bold").is(':checked');
		var fontItalic = $("#on-italic").is(':checked');
		var fontTrans = $("#on-translate").is(':checked');
		var textColor = $('#textColor').val();
		var txtBorder = $('#txt-border').is(':checked');
		var textBorderColor = $('#textBorderColor').val();
		var txtRange = $("#borderRng").val();
		var txtTop = parseFloat($("#txtTop").val());
		var txtLeft = parseFloat($("#txtLeft").val());

		if(txtBorder == true){
			var txtBorderColor = textBorderColor
			stroke = txtRange;
		}else{
			var stroke = 0;
		}

		if(fontTrans == true){
			var fontFamily = "thai7bangkokssk";
		}else{
			var fontFamily = $("#font-family-selector").val();
		}

		//font 
		if (fontBold == true) {
			fontBold = 'bold';
		}else{
			fontBold = 'normal';
		}

		if (fontItalic == true) {
			fontItalic = 'italic';
		}else{
			fontItalic = 'normal';
		}

		var text = new fabric.IText(txtArea, { 
			left: txtLeft, 
			top: txtTop,
			fontFamily: fontFamily,
			fontSize: fontSize,
			fontWeight: fontBold,
			fontStyle: fontItalic,
			lockScalingX: true,
  			lockScalingY: true,
  			cornerSize: 3,
  			stroke: txtBorderColor,
  			strokeWidth: stroke
		});

		text.set({fill: textColor});
		canvas.remove(obj);
		canvas.add(text);
		canvas.renderAll();
		$("#txt-area").val('');
	});

	$('#btnDelText').on('click', function(){
		var obj = canvas.getActiveObject();
		canvas.remove(obj);
	});

/* -------------- brand type -------------------*/
	var brandElem1 = document.getElementById('brandImg1');
	var brandElem0 = document.getElementById('brandImg0');

	var brandIns0 = new fabric.Image(brandElem0, {
	  left: 272,
	  top:39,
	  scaleY: 0.7,
	  scaleX:0.7
	});

	var brandIns1 = new fabric.Image(brandElem1, {
	  left: 272,
	  top:39,
	  scaleY: 0.7,
	  scaleX:0.7
	});

	$('#brandType').on('change', function(){
		var brand = $(this).val();
		
		switch(brand){
			case "0":
				canvas.add(brandIns0);
				canvas.remove(brandIns1);
				break;
			case "1":
				canvas.add(brandIns1);
				canvas.remove(brandIns0);
				break;
			case "2":
				canvas.remove(brandIns0, brandIns1);
				break;
		}
	});

	/*----------- themes -------------------*/

	var theme1 = document.getElementById('theme-1');
	var themeIns1 = new fabric.Image(theme1, {
	  left: 128,
	  top: 2,
	  scaleY: 0.95,
	  scaleX:0.95
	});

	var theme2 = document.getElementById('theme-2');
	var themeIns2 = new fabric.Image(theme2, {
	  left: 120,
	  top: -6,
	  scaleY: 0.99,
	 scaleX:0.99
	});

	var theme3 = document.getElementById('theme-3');
	var themeIns3 = new fabric.Image(theme3, {
	  left: 120,
	  top: -6,
	  scaleY: 0.99,
	 scaleX:0.99
	});

	var theme4 = document.getElementById('theme-4');
	var themeIns4 = new fabric.Image(theme4, {
	  left: 120,
	  top: -6,
	  scaleY: 0.99,
	 scaleX:0.99
	});

	var theme5 = document.getElementById('theme-5');
	var themeIns5 = new fabric.Image(theme5, {
	  left: 120,
	  top: -6,
	  scaleY: 0.99,
	 scaleX:0.99
	});

	var theme6 = document.getElementById('theme-6');
	var themeIns6 = new fabric.Image(theme6, {
	  left: 128,
	  top: -3,
	  scaleY: 0.95,
	 scaleX:0.95
	});

	var theme7 = document.getElementById('theme-7');
	var themeIns7 = new fabric.Image(theme7, {
	  left: 128,
	  top: -3,
	  scaleY: 0.95,
	 scaleX:0.95
	});

	var theme8 = document.getElementById('theme-8');
	var themeIns8 = new fabric.Image(theme8, {
	  left: 128,
	  top: -3,
	  scaleY: 0.95,
	 scaleX:0.95
	});

	var theme9 = document.getElementById('theme-9');
	var themeIns9 = new fabric.Image(theme9, {
	  left: 128,
	  top: -3,
	  scaleY: 0.95,
	 scaleX:0.95
	});

	var theme10 = document.getElementById('theme-10');
	var themeIns10 = new fabric.Image(theme10, {
	  left: 128,
	  top: -3,
	  scaleY: 0.95,
	 scaleX:0.95
	});

	var theme11 = document.getElementById('theme-11');
	var themeIns11 = new fabric.Image(theme11, {
	  left: 128,
	  top: -3,
	  scaleY: 0.95,
	 scaleX:0.95
	});

	var theme12 = document.getElementById('theme-12');
	var themeIns12 = new fabric.Image(theme12, {
	  left: 128,
	  top: -3,
	  scaleY: 0.95,
	 scaleX:0.95
	});

	var theme13 = document.getElementById('theme-13');
	var themeIns13 = new fabric.Image(theme13, {
	  left: 128,
	  top: -3,
	  scaleY: 0.95,
	 scaleX:0.95
	});

	var theme14 = document.getElementById('theme-14');
	var themeIns14 = new fabric.Image(theme14, {
	  left: 128,
	  top: -3,
	  scaleY: 0.95,
	 scaleX:0.95
	});

	var theme15 = document.getElementById('theme-15');
	var themeIns15 = new fabric.Image(theme15, {
	  left: 128,
	  top: -3,
	  scaleY: 0.95,
	 scaleX:0.95
	});

	var theme16 = document.getElementById('theme-16');
	var themeIns16 = new fabric.Image(theme16, {
	  left: 128,
	  top: -3,
	  scaleY: 0.95,
	 scaleX:0.95
	});

	var theme17 = document.getElementById('theme-17');
	var themeIns17 = new fabric.Image(theme17, {
	  left: 128,
	  top: -3,
	  scaleY: 0.95,
	 scaleX:0.95
	});

	var theme18 = document.getElementById('theme-18');
	var themeIns18 = new fabric.Image(theme18, {
	  left: 128,
	  top: -3,
	  scaleY: 0.95,
	 scaleX:0.95
	});

	var theme19 = document.getElementById('theme-19');
	var themeIns19 = new fabric.Image(theme19, {
	  left: 128,
	  top: 1,
	  scaleY: 0.95,
	 scaleX:0.95
	});

	var theme20 = document.getElementById('theme-20');
	var themeIns20 = new fabric.Image(theme20, {
	  left: 128,
	  top: -3,
	  scaleY: 0.95,
	 scaleX:0.95
	});

	$('.themes a').on('click', function(){
		
		var theme = $(this).data('themes');
		themeIns1.selectable = false;
		themeIns2.selectable = false;
		themeIns3.selectable = false;
		themeIns4.selectable = false;
		themeIns5.selectable = false;
		themeIns6.selectable = false;
		themeIns7.selectable = false;
		themeIns8.selectable = false;
		themeIns9.selectable = false;
		themeIns10.selectable = false;
		themeIns11.selectable = false;
		themeIns12.selectable = false;
		themeIns13.selectable = false;
		themeIns14.selectable = false;
		themeIns15.selectable = false;
		themeIns16.selectable = false;
		themeIns17.selectable = false;
		themeIns18.selectable = false;
		themeIns19.selectable = false;
		themeIns20.selectable = false;
		
		switch(theme){
			case 1:
				canvas.remove(themeIns1);
				canvas.add(themeIns1);
				//remove
				
				canvas.remove(themeIns2);
				canvas.remove(themeIns3);
				canvas.remove(themeIns4);
				canvas.remove(themeIns5);
				canvas.remove(themeIns6);
				canvas.remove(themeIns7);
				canvas.remove(themeIns8);
				canvas.remove(themeIns9);
				canvas.remove(themeIns10);
				canvas.remove(themeIns11);
				canvas.remove(themeIns12);
				canvas.remove(themeIns13);
				canvas.remove(themeIns14);
				canvas.remove(themeIns15);
				canvas.remove(themeIns16);
				canvas.remove(themeIns17);
				canvas.remove(themeIns18);
				canvas.remove(themeIns19);
				canvas.remove(themeIns20);
				break;
			case 2:
				
				canvas.remove(themeIns2);
				canvas.add(themeIns2);

				//remove
				canvas.remove(themeIns1);
				canvas.remove(themeIns3);
				canvas.remove(themeIns4);
				canvas.remove(themeIns5);
				canvas.remove(themeIns6);
				canvas.remove(themeIns7);
				canvas.remove(themeIns8);
				canvas.remove(themeIns9);
				canvas.remove(themeIns10);
				canvas.remove(themeIns11);
				canvas.remove(themeIns12);
				canvas.remove(themeIns13);
				canvas.remove(themeIns14);
				canvas.remove(themeIns15);
				canvas.remove(themeIns16);
				canvas.remove(themeIns17);
				canvas.remove(themeIns18);
				canvas.remove(themeIns19);
				canvas.remove(themeIns20);
				
				break;
			case 3:
				canvas.remove(themeIns3);
				canvas.add(themeIns3);

				//remove
				canvas.remove(themeIns1);
				canvas.remove(themeIns2);
				canvas.remove(themeIns4);
				canvas.remove(themeIns5);
				canvas.remove(themeIns6);
				canvas.remove(themeIns7);
				canvas.remove(themeIns8);
				canvas.remove(themeIns9);
				canvas.remove(themeIns10);
				canvas.remove(themeIns11);
				canvas.remove(themeIns12);
				canvas.remove(themeIns13);
				canvas.remove(themeIns14);
				canvas.remove(themeIns15);
				canvas.remove(themeIns16);
				canvas.remove(themeIns17);
				canvas.remove(themeIns18);
				canvas.remove(themeIns19);
				canvas.remove(themeIns20);
				break;
			case 4:
				canvas.remove(themeIns4);
				canvas.add(themeIns4);

				//remove
				canvas.remove(themeIns1);
				canvas.remove(themeIns2);
				canvas.remove(themeIns3);
				canvas.remove(themeIns5);
				canvas.remove(themeIns6);
				canvas.remove(themeIns7);
				canvas.remove(themeIns8);
				canvas.remove(themeIns9);
				canvas.remove(themeIns10);
				canvas.remove(themeIns11);
				canvas.remove(themeIns12);
				canvas.remove(themeIns13);
				canvas.remove(themeIns14);
				canvas.remove(themeIns15);
				canvas.remove(themeIns16);
				canvas.remove(themeIns17);
				canvas.remove(themeIns18);
				canvas.remove(themeIns19);
				canvas.remove(themeIns20);
				break;
			case 5:
				canvas.remove(themeIns5);
				canvas.add(themeIns5);

				//remove
				canvas.remove(themeIns1);
				canvas.remove(themeIns2);
				canvas.remove(themeIns3);
				canvas.remove(themeIns4);
				canvas.remove(themeIns6);
				canvas.remove(themeIns7);
				canvas.remove(themeIns8);
				canvas.remove(themeIns9);
				canvas.remove(themeIns10);
				canvas.remove(themeIns11);
				canvas.remove(themeIns12);
				canvas.remove(themeIns13);
				canvas.remove(themeIns14);
				canvas.remove(themeIns15);
				canvas.remove(themeIns16);
				canvas.remove(themeIns17);
				canvas.remove(themeIns18);
				canvas.remove(themeIns19);
				canvas.remove(themeIns20);
				break;
			case 6:
				canvas.remove(themeIns6);
				canvas.add(themeIns6);

				canvas.remove(themeIns1);
				canvas.remove(themeIns2);
				canvas.remove(themeIns3);
				canvas.remove(themeIns4);
				canvas.remove(themeIns5);
				canvas.remove(themeIns7);
				canvas.remove(themeIns8);
				canvas.remove(themeIns9);
				canvas.remove(themeIns10);
				canvas.remove(themeIns11);
				canvas.remove(themeIns12);
				canvas.remove(themeIns13);
				canvas.remove(themeIns14);
				canvas.remove(themeIns15);
				canvas.remove(themeIns16);
				canvas.remove(themeIns17);
				canvas.remove(themeIns18);
				canvas.remove(themeIns19);
				canvas.remove(themeIns20);
				break;
			case 7:
				canvas.remove(themeIns7)
				canvas.add(themeIns7);

				canvas.remove(themeIns1);
				canvas.remove(themeIns2);
				canvas.remove(themeIns3);
				canvas.remove(themeIns4);
				canvas.remove(themeIns5);
				canvas.remove(themeIns6);
				canvas.remove(themeIns8);
				canvas.remove(themeIns9);
				canvas.remove(themeIns10);
				canvas.remove(themeIns11);
				canvas.remove(themeIns12);
				canvas.remove(themeIns13);
				canvas.remove(themeIns14);
				canvas.remove(themeIns15);
				canvas.remove(themeIns16);
				canvas.remove(themeIns17);
				canvas.remove(themeIns18);
				canvas.remove(themeIns19);
				canvas.remove(themeIns20);
				break;
			case 8:
				canvas.remove(themeIns8);
				canvas.add(themeIns8);

				canvas.remove(themeIns1);
				canvas.remove(themeIns2);
				canvas.remove(themeIns3);
				canvas.remove(themeIns4);
				canvas.remove(themeIns5);
				canvas.remove(themeIns6);
				canvas.remove(themeIns7);
				canvas.remove(themeIns9);
				canvas.remove(themeIns10);
				canvas.remove(themeIns11);
				canvas.remove(themeIns12);
				canvas.remove(themeIns13);
				canvas.remove(themeIns14);
				canvas.remove(themeIns15);
				canvas.remove(themeIns16);
				canvas.remove(themeIns17);
				canvas.remove(themeIns18);
				canvas.remove(themeIns19);
				canvas.remove(themeIns20);
				break;
			case 9:
				canvas.remove(themeIns9);
				canvas.add(themeIns9);

				canvas.remove(themeIns1);
				canvas.remove(themeIns2);
				canvas.remove(themeIns3);
				canvas.remove(themeIns4);
				canvas.remove(themeIns5);
				canvas.remove(themeIns6);
				canvas.remove(themeIns7);
				canvas.remove(themeIns8);
				canvas.remove(themeIns10);
				canvas.remove(themeIns11);
				canvas.remove(themeIns12);
				canvas.remove(themeIns13);
				canvas.remove(themeIns14);
				canvas.remove(themeIns15);
				canvas.remove(themeIns16);
				canvas.remove(themeIns17);
				canvas.remove(themeIns18);
				canvas.remove(themeIns19);
				canvas.remove(themeIns20);
				break;
			case 10:
				canvas.remove(themeIns10);
				canvas.add(themeIns10);

				canvas.remove(themeIns1);
				canvas.remove(themeIns2);
				canvas.remove(themeIns3);
				canvas.remove(themeIns4);
				canvas.remove(themeIns5);
				canvas.remove(themeIns6);
				canvas.remove(themeIns7);
				canvas.remove(themeIns8);
				canvas.remove(themeIns9);
				canvas.remove(themeIns11);
				canvas.remove(themeIns12);
				canvas.remove(themeIns13);
				canvas.remove(themeIns14);
				canvas.remove(themeIns15);
				canvas.remove(themeIns16);
				canvas.remove(themeIns17);
				canvas.remove(themeIns18);
				canvas.remove(themeIns19);
				canvas.remove(themeIns20);
				break;
			case 11:
				canvas.remove(themeIns11);
				canvas.add(themeIns11);

				canvas.remove(themeIns1);
				canvas.remove(themeIns2);
				canvas.remove(themeIns3);
				canvas.remove(themeIns4);
				canvas.remove(themeIns5);
				canvas.remove(themeIns6);
				canvas.remove(themeIns7);
				canvas.remove(themeIns8);
				canvas.remove(themeIns9);
				canvas.remove(themeIns10);
				canvas.remove(themeIns12);
				canvas.remove(themeIns13);
				canvas.remove(themeIns14);
				canvas.remove(themeIns15);
				canvas.remove(themeIns16);
				canvas.remove(themeIns17);
				canvas.remove(themeIns18);
				canvas.remove(themeIns19);
				canvas.remove(themeIns20);
				break;
			case 12:
				canvas.remove(themeIns12);
				canvas.add(themeIns12);

				canvas.remove(themeIns1);
				canvas.remove(themeIns2);
				canvas.remove(themeIns3);
				canvas.remove(themeIns4);
				canvas.remove(themeIns5);
				canvas.remove(themeIns6);
				canvas.remove(themeIns7);
				canvas.remove(themeIns8);
				canvas.remove(themeIns9);
				canvas.remove(themeIns10);
				canvas.remove(themeIns11);
				canvas.remove(themeIns13);
				canvas.remove(themeIns14);
				canvas.remove(themeIns15);
				canvas.remove(themeIns16);
				canvas.remove(themeIns17);
				canvas.remove(themeIns18);
				canvas.remove(themeIns19);
				canvas.remove(themeIns20);
				break;
			case 13:
				canvas.remove(themeIns13);
				canvas.add(themeIns13);

				canvas.remove(themeIns1);
				canvas.remove(themeIns2);
				canvas.remove(themeIns3);
				canvas.remove(themeIns4);
				canvas.remove(themeIns5);
				canvas.remove(themeIns6);
				canvas.remove(themeIns7);
				canvas.remove(themeIns8);
				canvas.remove(themeIns9);
				canvas.remove(themeIns10);
				canvas.remove(themeIns11);
				canvas.remove(themeIns12);
				canvas.remove(themeIns14);
				canvas.remove(themeIns15);
				canvas.remove(themeIns16);
				canvas.remove(themeIns17);
				canvas.remove(themeIns18);
				canvas.remove(themeIns19);
				canvas.remove(themeIns20);
				break;
			case 14:
				canvas.remove(themeIns14);
				canvas.add(themeIns14);

				canvas.remove(themeIns1);
				canvas.remove(themeIns2);
				canvas.remove(themeIns3);
				canvas.remove(themeIns4);
				canvas.remove(themeIns5);
				canvas.remove(themeIns6);
				canvas.remove(themeIns7);
				canvas.remove(themeIns8);
				canvas.remove(themeIns9);
				canvas.remove(themeIns10);
				canvas.remove(themeIns11);
				canvas.remove(themeIns12);
				canvas.remove(themeIns13);
				canvas.remove(themeIns15);
				canvas.remove(themeIns16);
				canvas.remove(themeIns17);
				canvas.remove(themeIns18);
				canvas.remove(themeIns19);
				canvas.remove(themeIns20);
				break;
			case 15:
				canvas.remove(themeIns15);
				canvas.add(themeIns15);

				canvas.remove(themeIns1);
				canvas.remove(themeIns2);
				canvas.remove(themeIns3);
				canvas.remove(themeIns4);
				canvas.remove(themeIns5);
				canvas.remove(themeIns6);
				canvas.remove(themeIns7);
				canvas.remove(themeIns8);
				canvas.remove(themeIns9);
				canvas.remove(themeIns10);
				canvas.remove(themeIns11);
				canvas.remove(themeIns12);
				canvas.remove(themeIns13);
				canvas.remove(themeIns14);
				canvas.remove(themeIns16);
				canvas.remove(themeIns17);
				canvas.remove(themeIns18);
				canvas.remove(themeIns19);
				canvas.remove(themeIns20);
				break;
			case 16:
				canvas.remove(themeIns16);
				canvas.add(themeIns16);

				canvas.remove(themeIns1);
				canvas.remove(themeIns2);
				canvas.remove(themeIns3);
				canvas.remove(themeIns4);
				canvas.remove(themeIns5);
				canvas.remove(themeIns6);
				canvas.remove(themeIns7);
				canvas.remove(themeIns8);
				canvas.remove(themeIns9);
				canvas.remove(themeIns10);
				canvas.remove(themeIns11);
				canvas.remove(themeIns12);
				canvas.remove(themeIns13);
				canvas.remove(themeIns14);
				canvas.remove(themeIns15);
				canvas.remove(themeIns17);
				canvas.remove(themeIns18);
				canvas.remove(themeIns19);
				canvas.remove(themeIns20);
				break;
			case 17:
				canvas.remove(themeIns17);
				canvas.add(themeIns17);

				canvas.remove(themeIns1);
				canvas.remove(themeIns2);
				canvas.remove(themeIns3);
				canvas.remove(themeIns4);
				canvas.remove(themeIns5);
				canvas.remove(themeIns6);
				canvas.remove(themeIns7);
				canvas.remove(themeIns8);
				canvas.remove(themeIns9);
				canvas.remove(themeIns10);
				canvas.remove(themeIns11);
				canvas.remove(themeIns12);
				canvas.remove(themeIns13);
				canvas.remove(themeIns14);
				canvas.remove(themeIns15);
				canvas.remove(themeIns16);
				canvas.remove(themeIns18);
				canvas.remove(themeIns19);
				canvas.remove(themeIns20);
				break;
			case 18:
				canvas.remove(themeIns18);
				canvas.add(themeIns18);

				canvas.remove(themeIns1);
				canvas.remove(themeIns2);
				canvas.remove(themeIns3);
				canvas.remove(themeIns4);
				canvas.remove(themeIns5);
				canvas.remove(themeIns6);
				canvas.remove(themeIns7);
				canvas.remove(themeIns8);
				canvas.remove(themeIns9);
				canvas.remove(themeIns10);
				canvas.remove(themeIns11);
				canvas.remove(themeIns12);
				canvas.remove(themeIns13);
				canvas.remove(themeIns14);
				canvas.remove(themeIns15);
				canvas.remove(themeIns16);
				canvas.remove(themeIns17);
				canvas.remove(themeIns19);
				canvas.remove(themeIns20);
				break;

			case 19:
				canvas.remove(themeIns19);
				canvas.add(themeIns19);

				canvas.remove(themeIns1);
				canvas.remove(themeIns2);
				canvas.remove(themeIns3);
				canvas.remove(themeIns4);
				canvas.remove(themeIns5);
				canvas.remove(themeIns6);
				canvas.remove(themeIns7);
				canvas.remove(themeIns8);
				canvas.remove(themeIns9);
				canvas.remove(themeIns10);
				canvas.remove(themeIns11);
				canvas.remove(themeIns12);
				canvas.remove(themeIns13);
				canvas.remove(themeIns14);
				canvas.remove(themeIns15);
				canvas.remove(themeIns16);
				canvas.remove(themeIns17);
				canvas.remove(themeIns18);
				canvas.remove(themeIns20);
				break;

			case 20:
				canvas.remove(themeIns20);
				canvas.add(themeIns20);

				canvas.remove(themeIns1);
				canvas.remove(themeIns2);
				canvas.remove(themeIns3);
				canvas.remove(themeIns4);
				canvas.remove(themeIns5);
				canvas.remove(themeIns6);
				canvas.remove(themeIns7);
				canvas.remove(themeIns8);
				canvas.remove(themeIns9);
				canvas.remove(themeIns10);
				canvas.remove(themeIns11);
				canvas.remove(themeIns12);
				canvas.remove(themeIns13);
				canvas.remove(themeIns14);
				canvas.remove(themeIns15);
				canvas.remove(themeIns16);
				canvas.remove(themeIns17);
				canvas.remove(themeIns18);
				canvas.remove(themeIns19);
				break;
		}
		
	});
});