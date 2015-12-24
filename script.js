$(document).ready(function () {
	//alert('Jquery is loaded');

	//init our jQuery functions
	submitQuestion();
	submitResponseEmail();
	submitAnswer();
});

//handles submitting the initial question form
function submitQuestion() {

	var    submitButton = $('#submit-question'),
	       jumboContent = $('#homepage-jumbo-content');
	       form = $('#question-form');

	submitButton.click(function(e) {

		e.preventDefault();

		var question = form.serialize();
		var questionObject = {};
		$('#question-form').serializeArray().map(function(x){questionObject[x.name] = x.value;});
		var validQuestion = validateQuestion(questionObject);

		if(validQuestion != true){alert('Question not valid'); return false;}
		
		form.fadeOut(function(){
			jumboContent.slideUp(function(){
				jumboContent.html('Looking for an answer...');
			}).slideDown();
		});

		var questionResponse = $.post('controller.php', question)
		
			.done(function(response) {
				setTimeout(function(){
					showQuestionResponse(response);
				}, 2000)
			})

			.fail(function(response) {
				alert(response);
			})

			.always(function() {
				console.log('questionResponse executed.');
			});
	});
}

function validateQuestion(questionObject){
	console.log(questionObject);
	if(questionObject.question == ''){	return false;}
	console.log('questionObject.question passed validation');
	return true;
}

//returns a response to the frontend after the question is processed.
function showQuestionResponse(response){
	var jumboContent = $('#homepage-jumbo-content');
	jumboContent.html(response);
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

// ADMIN FUNCTIONS
//handle inputting answers

function submitAnswer(){
	var answerForm = $('.answer-form');

	answerForm.submit(function(e){
		e.preventDefault();
		var answer = $(this).serialize();
		var answeredQuestionCard = $(this).closest('.admin-question-card');

		console.log(answer);


		var answerConfirm = $.post('controller.php',answer)

			.done(function(response) {
				showAnswerConfirm(response);
				answeredQuestionCard.slideUp(function(){
					this.remove();
				});
			})

			.fail(function(response) {
				alert(response);
			})

			.always(function() {
				console.log('submitAnswer executed.');
			});

	});
}

function showAnswerConfirm(response){
	alert(response);
}