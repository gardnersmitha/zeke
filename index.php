<?php

echo(date('Y-m-d h:m:s'));


?>

<!DOCTYPE html>
<html>
<head>
	<title>Zeke</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
	<script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
	<script src="script.js" type="text/javascript" charset="utf-8" async defer></script>
</head>
<body>
	<header id="main-header" class="nav">
		<nav>
			<ul>
				<li><a href="/about" title="About">About</a></li>
				<li><a href="/contact" title="Contact">Contact</a></li>
			</ul>
		</nav>
		
	</header><!-- /header -->	

	<main id="main-content">
		<h2>Meet Zeke</h2>
		<p>Personalized answers to you home ownership questions. Go ahead, ask him a question.</p>

		<form id="question-form" action="#" method="post" accept-charset="utf-8">
			<input type="hidden" name="task" value="handleQuestionSubmit">
			<input type="text" name="question" placeholder="What's the best way to prevent ice dams?">
			<input type="submit" id="submit-question" value="Ask">
		</form>
	</main><!-- /main -->	

</body>
</html>