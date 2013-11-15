$(document).ready(function(){
	stopMove();

	$('#stop').click(function(){
		stopMove();
		// var stop_time = new Date().getTime();
	});


	/*
	$('#drive').click(function(e){
		e.preventDefault();

		// var start_time = Date.now();
		var start_time = 0;

		$(this).animate(drive(), function(){
			$('#stop').click(function(){
					// var stop_time = Date.now()
					// var stop_time = new Date().getTime() % 60;
					var stop_time = start_time ++;
					// var elapsed = time + start_time;
					alert(stop_time);

					// alert(stop_time + ":" + start_time + "=" + elapsed );

					// var diff = new Date(elapsed);

					var offset = new Date().getTimezoneOffset();
					// alert(offset);

					// alert((diff.getTime() % 1000) % 60 );
					// alert((diff.getMinutes() % 60))
					// var hr = diff.getHours() % 60;
					// var min = diff.getMinutes() % 60;
					// var sec = diff.getSeconds() % 60;
					// alert(sec);
					$('.btn #sec').html("You have drive " + hr + ":" + min + ":" + sec  + "long");
				// }
			});
		});
	});
*/

	// var counter = 0;

	// $('#drive').click(function(){
	// 	// counter++
	// 	$('.btn #sec').html(counter++);
	// });

	$('.btn #sec').date('count', 0);
	$('#drive').click(function(){
		$('.btn #sec').html(function(){
			var $this = $(this),
				count = $this.date('count') + 1;

				$this.date('count', count);
				return count;
		});
	});


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