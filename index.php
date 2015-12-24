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
	<link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
	<link href='https://fonts.googleapis.com/css?family=Noto+Sans:400,700|Merriweather:400,300,300italic,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="style.css">

</head>
<body class="container-fluid">
	<div id="page-wrap" class="container-fluid">
		<header id="main-header" class="nav row">
			<nav class="navbar col-xs-12">
				<ul class="nav navbar-nav pull-right">
					<li class="nav-item"><a href="about" title="About">About</a></li>
					<li class="nav-item"><a href="contact" title="Contact">Contact</a></li>
				</ul>
			</nav>
			
		</header><!-- /header -->

		<main id="main-content" class="row">
			<div id="homepage-jumbo"class="jumbotron">
				<img id="logo" class="m-y-lg center-block"src="img/logo.svg" alt="logo"/>

				<div id="homepage-jumbo-content">
					<h1 class="text-center display-type">Meet Zeke</h1>
					<p class="text-center">Personalized answers to your home ownership questions. <br/>Go ahead, ask him a question.</p>


					<form id="question-form" class="col-xs-12 col-lg-6 col-lg-offset-3 m-y-md" action="#" method="post" accept-charset="utf-8">
						<input type="hidden" name="task" value="handleQuestionSubmit">
						<input type="hidden" name="user_id" value="<?php echo($user['id']);?>">

						<div id="homepage-question" class="round-input">
							<input type="text" name="question" placeholder="What's the best way to prevent ice dams?">
							<input type="submit" id="submit-question" value="Ask">
						</div>
					</form>

				</div> <!-- /homepage-jumbo-content -->
			</div>

		</main><!-- /main -->	
	</div><!-- /page-wrap -->

	<footer class="row">
		<small>&copy Zeke <?php echo(date('Y')); ?></small>
	</footer>

	<!-- Scripts -->
	<script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
	<script src="script.js" type="text/javascript" charset="utf-8" async defer></script>
</body>
</html>