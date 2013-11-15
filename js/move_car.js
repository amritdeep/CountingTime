$(document).ready(function(){
	var counter = 0;
	var click = 0;
	stopMove();

	$('#stop').click(function(){
		stopMove();
		// var stop_time = new Date().getTime();
	});
	$('#reset').click(function(){
		location.reload();
	});

	setInterval(function(){
		$('#drive').click(function(){
			drive();
			counter++;
			// var count = counter++;
			$('#stop').click(function(){
				$('.btn #sec').html("You have drive " + counter);
			});
		});

	}, 1000);

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