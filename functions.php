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
    	//error_log($user);

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

//find an answer to the question
function getAnswer($question){
	//Run some code to try to find a response to the question

	//If answer = true && user = true


	//If we don't have one, return something
	$html = '
		<div id="homepage-jumbo"class="jumbotron">
			<h1 class="text-center display-type">Meet Zeke</h1>
			<p class="text-center">Got it. Let me dig in an get back to you on that one. Where can I reach you?</p>
			<form id="response-email-form" class="col-xs-12 col-lg-6 col-lg-offset-3" action="#" method="post" accept-charset="utf-8">
					<input type="hidden" name="task" value="updateUser">
					<input type="hidden" name="question_id" value="'.$question['id'].'">
					<input type="hidden" name="user_id" value="'.$question['user_id'].'">

				<div id="email-response" class="round-input">
					<input type="email" name="response_email" placeholder="Email Address">
					<input type="submit" id="submit-response-email" value="Submit">
				</div>
			</form>
		</div>
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

    	error_log("User record updated successfully.");

    	//use that to get the new question back as an array
		// $selectNewQuestionQuery = "SELECT * FROM questions WHERE id = ".$newQuestion_id;
		// $newQuestion = $db->query($selectNewQuestionQuery);
		// $question = $newQuestion->fetch_assoc();
  		error_log($question);

  		//use it to set a cookie
		setcookie(
			'zekeUser[email]',
			$email,
			time()+86400*180,
			'/');

    	echo "Thanks! I'll send you an email as soon as I have an answer.";

	} else {
    	echo "Error: " . $updateUserQuery . "<br>" . $db->error;
	}

	$db->close();

}

function getAdminQuestions(){
	global $db;

	$getAdminQuestionsQuery = "SELECT * FROM questions ORDER BY date_created DESC";

	//execute
	$result = $db->query($getAdminQuestionsQuery);

	//get list of categories to populate dropdown
    $categories = getCategories();
    $categoriesHtml = '';

    foreach ($categories as $display_name=>$value) {
    	$categoriesHtml .= '<option value="'.$value.'">'.$display_name.'</option>';
    }


    //build html for each question
    $html = '';
    while ($row = $result->fetch_assoc()){
    	//$rows[] = $row;
    	$html .= '
			<div class="card admin-question-card" id="admin-question-card-'.$row["id"].'">
				<div class="card-block">
					<h4 class="card-title">'.$row["question"].'</h4>
					<p class="card-text"><small class="text-muted">Submitted by User #'.$row["user_id"].'</small></p>
					<form class="answer-form" id="answer-form-'.$row["id"].'">
						<input type="hidden" name="task" value="handleAnswerSubmit"/>
						<input type="hidden" name="question_id" value="'.$row["id"].'"/>
						<input type="hidden" name="user_id" value="'.$row["user_id"].'"/>
						<select class="form-control m-y" name="category" value="Select Category">
							'.$categoriesHtml.'
						</select>
						<textarea class="form-control" rows="3" name="answer" placeholder="Got an answer?"></textarea>
						<input class="m-y" type="checkbox" name="send_email"/> Email this answer to the user
						<input type="submit" value="Answer" id="submit-answer-'.$row["id"].'" class="submit-answer btn btn-primary btn-block">
					</form>
				</div>
			</div>
    	 ';
    }

    //return html to frontend
	echo $html;  

}

function handleAnswerSubmit(){
	//vars
	$question_id = $_POST['question_id'];
	$user_id = $_POST['user_id'];
	$answer = addslashes($_POST['answer']);
	$category = addslashes($_POST['category']);

	//check and set our send_email flag
	if(isset($_POST['send_email'])){$send_email = TRUE; }else{ $send_email = FALSE;}

	updateQuestion($question_id,$category);
	createAnswer($question_id,$answer);

}

function updateQuestion($question_id,$category){
	global $db;

	$updateQuestionQuery = "UPDATE questions SET category = '".$category."' WHERE id = '".$question_id."'";

	if ($db->query($updateQuestionQuery) === TRUE) {

    	error_log("Question record updated successfully.");
    	//return TRUE;

	} else {
    	echo "Error: " . $updateQuestionQuery . "<br>" . $db->error;
	}
}

function createAnswer($question_id,$answer){
	
	global $db;
	$user = getUser();

	//$newAnswerQuery = "INSERT INTO answers VALUES"
	$newAnswerQuery = "INSERT INTO answers (question_id, user_id, answer, date_created) VALUES ('".$question_id."','".$user['id']."','".$answer."', '".now()."')";

	if ($db->query($newAnswerQuery) === TRUE) {

    	error_log("Answer record created successfully.");
    	echo'tits';

	} else {
    	echo "Error: " . $newAnswerQuery . "<br>" . $db->error;
	}
}

function emailAnswer(){

}

function getCategories(){
	//get the list of posisble categories...
	$categories = [
		'Plumbing' 	=> 'plumbing',
		'HVAC'		=> 'hvac',
		'Finance'	=> 'finance',
		'Roofing'	=> 'roofing'
	];

	return $categories;
}


?>
