$(document).ready(function(){
	var timer = null,
		interval = 1000,
		value = 1, 
		estimate_value = 0, difference;

	stopMove();
	$('#reset').click(function(){
		location.reload();
	});

	$('#stop').bind('click', function(){
		stopMove();
		if(value < estimate_value){
				difference = estimate_value - value;
				$('.road #sec').html("Sorry !!! You prediction is " + difference + " seconds less");
			}
			else if(value > estimate_value){
				difference = value - estimate_value;
				$('.road #sec').html("Sorry !!! You prediction is " + difference + " seconds greater");
			}
			else {
				$('.road #sec').html("Congratulation !!! You prediction is correct i.e."+ estimate_value +" seconds");
			}
	});

	$('#fifteen').click(function(){
		$('#thirty').hide();
		$('#forty_five').hide();
		$('#sixty').hide();
		estimate_value=15;
		drive();
	});

	$('#thirty').click(function(){
		$('#fifteen').hide();
		$('#forty_five').hide();
		$('#sixty').hide();
		estimate_value=30;
		drive();
	});

	$('#forty_five').click(function(){
		$('#fifteen').hide();
		$('#thirty').hide();
		$('#sixty').hide();
		estimate_value=45;
		drive();
	});

	$('#sixty').click(function(){
		$('#fifteen').hide();
		$('#thirty').hide();
		$('#forty_five').hide();
		estimate_value=60;
		drive();
	});

function drive(){	
	if(timer != null) return;
	timer = setInterval(function(){
		++value;
	}, interval);

	$(document.body).css({
		'background-image':'url(images/background.png)',
		'background-repeat':'repeat-x'
	});

	// Drive Cloud and Tree
	for(var i = 1; i < 4; i++){
		$('#cloud' + i).addClass('cloud' + i).show();
		$('#tree' + i).addClass('tree' + i).show();
	}

	// Drive Whitestrip
	for(var i = 1; i < 9; i++){
		$('#whitestrip' + i).removeClass('' + i).show();
	}

	$('#car-moving').show();
	$('#car-demo').hide();
	$('#stop').show();

	$('.road #sec').hide();
}

function stopMove(){
	clearInterval(timer);
	timer = null;

	$(document.body).css({
		'background-image':'url(images/background_withcloud.png)',
		'background-repeat':'repeat-x'
	});

	// Stop Cloud and Tree
	for(var i = 1; i < 4; i++){
		$('#cloud' + i).removeClass('cloud' + i).hide();
		$('#tree' + i).removeClass('tree' + i).hide();
	}

	// Stop whitestrip
	for(var i = 1; i < 9; i++){
		$('#whitestrip' + i).removeClass('' + i).hide()
	}

	// $('body').css({
	// 	'background-image' : 'url("../images/background_withcloud.png")',
	// 	'background-repeat' : 'repeat-x'
	// }).show();

	$('#car-moving').hide();
	$('#car-demo').show();
	$('#stop').hide();

	$('#fifteen').show();
	$('#thirty').show();
	$('#forty_five').show();
	$('#sixty').show();
	$('.road #sec').show();
}

});

