$(document).ready(function(){
	$("#table").load("includes/load.php");
	$("#regForm").submit(function(e){
		e.preventDefault();
		$.ajax({
			type: "POST",
			url:"includes/post.php",
			data: $(this).serialize(),
		})
		.done(function(data){
			$("#table").load("includes/load.php");
			 $("#first").val('');
			 $("#last").val('');
			 $("#work").val('');
			 $("#city").val('');
			 $("#email").val('');
			$("#msgReg").html("<p class='text-center alert alert-success'>"+data+"</p>");
			$("#msgReg").slideDown(1400);
			setTimeout(function(){
			$("#msgReg").slideUp(900);
			},900)
		});
	});
});	