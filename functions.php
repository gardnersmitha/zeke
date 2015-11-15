<?php
require_once('config.php');

//get some time for a brother's timestamps
function now(){
	return date('Y-m-d H:i:s');
}

//handle users
function getUser(){

	//Check for a cookie,
	if(!isset($_COOKIE['zekeUser'])) {
		
		//if no, create a new user record and drop a cookie
		$user = createNewUser();
		return $user;

	}else{
		//If we have a cookie, say what's up
		$user = $_COOKIE['zekeUser'];
		return $user;
	}

	//if it exists, look up the user and update the question record with the proper user id
	//if not, create a new user record and drop a cookie
}

//create a new user
function createNewUser(){

	//vars
	global $db;

	//query
	$createQuery = "INSERT INTO users (date_created) VALUES ('".now()."')";

	//create
	$newUser = $db->query($createQuery);

	//handle response
	if ($newUser === TRUE) {

		//get the new user id
		$newUser_id = $db->insert_id;

		//use that to get the new user as an array
		$selectNewUserQuery = "SELECT * FROM users WHERE id = ".$newUser_id;
		$newUser = $db->query($selectNewUserQuery);
		$user = $newUser->fetch_assoc();
    	error_log($user);

    	//use it to set a cookie
		setcookie(
			'zekeUser[id]',
			$user['id'],
			time()+86400*180,
			'/');

		//send it back
		return $user;

	} else {
		//TODO - improve this error message
    	echo "Error: " . $createQuery . "<br>" . $db->error;
	}

}



//create a new question
function createNewQuestion(){

	//vars
	global $db;
	$question = addslashes($_POST['question']);
	$user_id = $_POST['user_id'];



	//query
	$sql = "INSERT INTO questions (question, user_id, date_created) VALUES ('".$question."','".$user_id."', '".now()."')";
	

	//insert
	if ($db->query($sql) === TRUE) {

		$newQuestion_id = $db->insert_id;
    	error_log("New question record created successfully. Question ID:".$newQuestion_id);

    	//use that to get the new question back as an array
		$selectNewQuestionQuery = "SELECT * FROM questions WHERE id = ".$newQuestion_id;
		$newQuestion = $db->query($selectNewQuestionQuery);
		$question = $newQuestion->fetch_assoc();
    	//error_log($question);

    	getAnswer($question);

	} else {
    	echo "Error: " . $sql . "<br>" . $db->error;
	}

	$db->close();
}

function getAnswer($question){
	//Run some code to try to find a response to the question
	//If we don't have one, return something
	$html = '
		<p>"Got it. Let me dig in an get back to you on that one. Where can I reach you?"</p>
		<form id="response-email-form" action="#" method="post" accept-charset="utf-8">
			<input type="hidden" name="task" value="updateUser">
			<input type="hidden" name="question_id" value="'.$question['id'].'">
			<input type="hidden" name="user_id" value="'.$question['user_id'].'">
			<input type="email" name="response_email" placeholder="Email Address">
			<input type="submit" id="submit-response-email" value="Submit">
		</form>
	';
	echo $html;
}

function updateUser(){
	
	//vars
	global $db;
	$question_id = addslashes($_POST['question_id']);
	$user_id = $_POST['user_id'];
	$email = md5($_POST['response_email']);



	//query
	$updateUserQuery = "UPDATE users SET email = '".$email."' WHERE id = ".$user_id;

	//execute
	if ($db->query($updateUserQuery) === TRUE) {

    	error_log("Question record updated successfully.");

    	//use that to get the new question back as an array
		// $selectNewQuestionQuery = "SELECT * FROM questions WHERE id = ".$newQuestion_id;
		// $newQuestion = $db->query($selectNewQuestionQuery);
		// $question = $newQuestion->fetch_assoc();
  		error_log($question);

    	echo "Thanks! I'll send you an email as soon as I have an answer.";

	} else {
    	echo "Error: " . $updateUserQuery . "<br>" . $db->error;
	}

	$db->close();

}


?>
