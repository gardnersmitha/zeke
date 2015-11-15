<?php
require_once('functions.php');
$user = getUser();
?>

<!DOCTYPE html>
<html>
<head>
	<!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <!-- Zeke stuff -->
	<title>Zeke</title>

	<!-- Styles -->
	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
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
			<input type="hidden" name="user_id" value="<?php echo($user['id']);?>">
			<input type="text" name="question" placeholder="What's the best way to prevent ice dams?">
			<input type="submit" id="submit-question" value="Ask">
		</form>
	</main><!-- /main -->	

	<!-- Scripts -->
	<script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
	<script src="script.js" type="text/javascript" charset="utf-8" async defer></script>
</body>
</html>