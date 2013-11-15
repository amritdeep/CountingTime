$(document).ready(function(){
	var timer = null,
		interval = 1000,
		value = 0;

	stopMove();

	$('#stop').click(function(){
		clearInterval(timer);
		timer = null;
		stopMove();
	});

	$('#reset').click(function(){
		location.reload();
	});

	$('#drive').click(function(){
		if(timer != null) return;
		timer = setInterval(function(){
			drive();
			value++;
			$('.btn #sec').html(value + " Seconds");
		}, interval);
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
	
});