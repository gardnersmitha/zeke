<?php
require_once('functions.php');


$task = $_POST['task'];
handleTask($task);

function handleTask($task){
	switch ($task) {
		case 'handleQuestionSubmit':
			createNewQuestion();
			break;

		case 'updateUser':
			updateUser();
			break;
		
		default:
			# code...
			break;
	}
}


?>