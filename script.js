$(document).ready(function(){
	//alert('Jquery is loaded');

	//init our jQuery functions
	submitQuestion();
	submitResponseEmail();
});

//handles submitting the initial question form
function submitQuestion() {

	var	submitButton = $('#submit-question');
	var mainContent = $('#main-content');

	submitButton.click(function(e) {

		e.preventDefault();

		var question = $('#question-form').serialize();
		var questionObject = {};
		$('#question-form').serializeArray().map(function(x){questionObject[x.name] = x.value;});
		var validQuestion = validateQuestion(questionObject);

		if(validQuestion != true){alert('Question not valid'); return false;}
		
		mainContent.html('<div class="spinner-wrap" style="width:100%;height:500px;display:flex;align-items:center;justify-content:center"><img src="img/spinner.gif"/></div>');

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