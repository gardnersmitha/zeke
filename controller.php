<?php
require_once('functions.php');


$task = $_POST['task'];
handleTask($task);

function handleTask($task){
	switch ($task) {
		case 'handleQuestionSubmit':
			handleQuestionSubmit();
			break;
		
		default:
			# code...
			break;
	}
}


?>