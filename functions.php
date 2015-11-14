<?php
require_once('config.php');


function now(){
	return date('Y-m-d H:i:s');
}

function handleQuestionSubmit($question){

	$question = addslashes($question);
	$sql = "INSERT INTO questions (question, date_created) VALUES ('".$question."', '".now()."')";

	global $db;
	
	if ($db->query($sql) === TRUE) {

		$question_id = $db->insert_id;
    	//error_log("New question record created successfully. Question ID:".$question_id);

    	processUser();
    	getAnswer($question_id);

	} else {
    	echo "Error: " . $sql . "<br>" . $db->error;
	}

	$db->close();
}

function getAnswer($question_id){
	//Run some code to try to find a response to the question
	//If we don't have one, return something
	$html = '
		<p>"Got it. Let me dig in an get back to you on that one. Where can I reach you?"</p>
		<form id="response-email-form" action="#" method="post" accept-charset="utf-8">
			<input type="hidden" name="task" value="handleResponseEmailSubmit">
			<input type="email" name="response-email" placeholder="Email Address">
			<input type="submit" id="submit-response-email" value="Ask">
		</form>
	';
	echo $html;
}

function processUser(){
	//Check for a cookie, 
	//if it exists, look up the user and update the question record with the proper user id
	//if not, create a new user record and drop a cookie
}

?>
