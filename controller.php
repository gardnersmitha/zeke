<?php
require_once('functions.php');


$task = $_POST['task'];
handleTask($task);

function handleTask($task){
	switch ($task) {
		case 'handleQuestionSubmit':
			$question = $_POST['question'];
			handleQuestionSubmit($question);
			break;
		
		default:
			# code...
			break;
	}
}


?>