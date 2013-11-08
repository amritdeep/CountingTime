$(document).ready(function(){
	$('#cloud1').removeClass("move_cloud1");
	$('#cloud2').removeClass("move_cloud2");
	$('#car').removeClass("move_car");

	$(':button').click(function(){
		$('#cloud1').addClass("move_cloud1");
		$('#cloud2').addClass("move_cloud2");
		$('#car').addClass("move_car");
	});
});