$("input").change(function(){
	console.log('test0');
	if($("#nuit").is(':checked')){
		$("body").css('background-color','black').css('color','white');
	}
	else{
		$("body").css('background-color','white').css('color','black');
	}

});