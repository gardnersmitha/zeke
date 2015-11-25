<?php

?>

<div id="homepage-jumbo"class="jumbotron">
	<h1 class="text-center display-type">Meet Zeke</h1>
	<p class="text-center">Personalized answers to you home ownership questions. Go ahead, ask him a question.</p>

	<form d="response-email-form" class="col-xs-12 col-lg-6 col-lg-offset-3" action="#" method="post" accept-charset="utf-8">
		<input type="hidden" name="task" value="updateUser">
			<input type="hidden" name="question_id" value="'.$question['id'].'">
			<input type="hidden" name="user_id" value="'.$question['user_id'].'">

		<div id="email-response" class="round-input">
			<input type="email" name="response_email" placeholder="Email Address">
			<input type="submit" id="submit-response-email" value="Submit">
		</div>
	</form>
</div>



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