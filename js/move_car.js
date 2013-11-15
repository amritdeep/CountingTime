$(document).ready(function(){
	var timer = null,
		inteval = 1000,
		value = 0;
		
	stopMove();

	$('#stop').click(function(){
		stopMove();
		clearInterval(timer);
		timer = null;
	});

	$('#reset').click(function(){
		location.reload();
	});


	$('#drive').click(function(){
		drive();
		if(timer != null) return;
		timer = setInterval(function(){
			value++;
			$('.btn #sec').html(value + " Seconds");
		}, inteval);
	})

function drive(){
	for(var i = 1; i < 5; i++){
		$('#cloud_id' + i).addClass('move_cloud' + i).show();
		$('#tree_id' + i).addClass('move_tree' + i).show();
	}
	$('#car-moving').show();
	$('#car-demo').hide();
}

function stopMove(){
	for(var i = 1; i < 5; i++){
		$('#cloud_id' + i).removeClass('move_cloud' + i).hide();
		$('#tree_id' + i).removeClass('move_tree' + i).hide();
	}
	$('#car-moving').hide();
	$('#car-demo').show();
}

function stops(){
	for(var i = 1; i < 5; i++){
		$('#cloud_id' + i).stop();
		$('#tree_id' + i).stop();
	}
	$('#car-moving').hide();
	$('#car-demo').show();
}

function count_sec(counts){
	for(var i = 0; i <= counts; i++){
		$('.btn #sec').html(i + "Seconds");
	}
}
	
});