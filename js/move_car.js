$(document).ready(function(){
	var timer = null,
		interval = 1000,
		value = 1;

	stopMove();
	$('#reset').click(function(){
		location.reload();
	});

	$('#stop').click(function(){
		clearInterval(timer);
		timer = null;
		stopMove();
	});

	$('#drive').click(function(){
	// alert("Timer : " + timer + "=" + value + " : value");
		$('.btn #sec').html(value + " Seconds");

		if(timer != null) return;
		timer = setInterval(function(){
			drive();
			++value;
			$('.btn #sec').html(value + " Seconds");
		}, interval);
	})

	$('#fifteen').click(function(){
		clearInterval(timer);
		timer = null;
		stopMove();

		if(value < 15){
			value = 14 - value;
			value++;
			$('.btn #diff').html(value + " Seconds near to destination");
			// alert(value);
		}
		else if(value > 15){
			value = value - 15;
			$('.btn #diff').html(value + " Seconds fast than destination");
		}
		else {
			$('.btn #diff').html(value + " Seconds extactlly to destination");
		}
	});

	// $('#thirty').click(function(){
		
	// });

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