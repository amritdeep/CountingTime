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
		$('#stop').html("Predict");
		$('#thirty').hide();
		$('#forty_five').hide();
		$('#sixty').hide();
		estimate_value=15;
		drive();
	});

	$('#thirty').click(function(){
		$('#stop').html("Predict");
		$('#fifteen').hide();
		$('#forty_five').hide();
		$('#sixty').hide();
		estimate_value=30;
		drive();
	});

	$('#forty_five').click(function(){
		$('#stop').html("Predict");
		$('#fifteen').hide();
		$('#thirty').hide();
		$('#sixty').hide();
		estimate_value=45;
		drive();
	});

	$('#sixty').click(function(){
		$('#stop').html("Predict");
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

	for(var i = 1; i < 5; i++){
		$('#cloud_id' + i).addClass('move_cloud' + i).show();
		$('#tree_id' + i).addClass('move_tree' + i).show();
	}
	$('#car-moving').show();
	$('#car-demo').hide();

	$('.road #sec').hide();
}

function stopMove(){
	clearInterval(timer);
	timer = null;

	for(var i = 1; i < 5; i++){
		$('#cloud_id' + i).removeClass('move_cloud' + i).hide();
		$('#tree_id' + i).removeClass('move_tree' + i).hide();
	}
	$('#car-moving').hide();
	$('#car-demo').show();

	$('#fifteen').show();
	$('#thirty').show();
	$('#forty_five').show();
	$('#sixty').show();
	$('.road #sec').show();
}

});

