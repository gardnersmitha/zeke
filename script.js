$(document).ready(function(){
	//alert('Jquery is loaded');

	//init our jQuery functions
	submitQuestion();
	submitResponseEmail();
});

//handles submitting the initial question form
function submitQuestion() {

	var	submitButton = $('#submit-question');

	submitButton.click(function(e) {

		e.preventDefault();
		var question = $('#question-form').serialize();

		var questionResponse = $.post('controller.php', question)
		
			.done(function(response) {
				showQuestionResponse(response);
			})

			.fail(function(response) {
				alert(response);
			})

			.always(function() {
				console.log('questionResponse executed.');
			});
	});
}

//returns a response to the frontend after the question is processed.
function showQuestionResponse(response){
	var mainContent = $('#main-content');
	mainContent.html(response);
	submitResponseEmail();
}

//handles submitting the response email form
function submitResponseEmail() {

	var	submitButton = $('#submit-response-email');

	submitButton.click(function(e) {

		e.preventDefault();

		var responseEmail = $('#response-email-form').serialize();

		var responseEmailConfirm = $.post('controller.php', responseEmail)
		
			.done(function(response) {
				showResponseEmailConfirm(response);
			})

			.fail(function(response) {
				alert(response);
			})

			.always(function() {
				console.log('responseEmailConfirm executed.');
			});
	});
}

//returns a response to the frontend after the question is processed.
function showResponseEmailConfirm(response){
	var mainContent = $('#main-content');
	mainContent.html(response);
}