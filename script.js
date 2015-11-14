$(document).ready(function(){
	//alert('Jquery is loaded');

	submitQuestion();
});

function submitQuestion(){
	var	submitButton = $('#submit-question');
	
	submitButton.click(function(e){
		e.preventDefault();
		question = $('#question-form').serialize();
		$.post('controller.php', question)
			.done(function(data){
				showResponse(data);
			});
	});
}

function showResponse(response){
	var mainContent = $('#main-content');
	mainContent.html(response);
}


