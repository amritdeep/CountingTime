$(document).ready(function(){
	var now = new Date;
	var sec = now.getSeconds();
	// alert(sec);
	var current_sec = sec.setSeconds();
	alert(current_sec);
	var fifteen_sec = current_sec + 15;
	var sixty_sec = current_sec + 60;

	var count = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
			10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
			20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
			30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
			50, 51, 52, 53, 54, 55, 56, 57, 58, 59];

	stopMove();

	$('#stop').click(function(){
		stopMove();
	});

	$('#drive').click(function(){
		drive();
	});

	$('#fifteen').click(function(e){
		e.preventDefault();
		drive();
		for(var i = 0; i <= count.length; i++){
			if(fifteen_sec == count[i]){
				alert(fifteen_sec + "=" + count[i]);
				// $(".btn #sec").html(i);
				// stopMove();
			}
		}

	});


function drive(){
	for(var i = 1; i < 5; i++){
		$('#cloud_id' + i).addClass('move_cloud' + i).show();
		$('#tree_id' + i).addClass('move_tree' + i).show();
	}
	$('#wheel1').addClass('wheel_left').show();
	$('#wheel2').addClass('wheel_right').show();
}

function stopMove(){
	for(var i = 1; i < 5; i++){
		$('#cloud_id' + i).removeClass('move_cloud' + i).hide();
		$('#tree_id' + i).removeClass('move_tree' + i).hide();
	}
	$('#wheel1').removeClass('wheel_left').hide();
	$('#wheel2').removeClass('wheel_right').hide();
}

function count_sec(counts){
	for(var i = 0; i <= counts; i++){
		$('.btn #sec').html(i + "Seconds");
	}
}
	
});