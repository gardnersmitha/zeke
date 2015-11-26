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
	<title>Zeke Admin Console</title>

	<!-- Styles -->
	<link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
	<link href='https://fonts.googleapis.com/css?family=Noto+Sans:400,700|Merriweather:400,300,300italic,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="admin.css">


</head>
<body class="container-fluid">
	<header id="main-header" class="nav row">
		<nav class="navbar col-xs-12">
			<span>Zeke Admin</span>

			<ul class="nav navbar-nav pull-right">
				<li class="nav-item"><a href="about" title="About">About</a></li>
				<li class="nav-item"><a href="contact" title="Contact">Contact</a></li>
			</ul>
		</nav>
		
	</header><!-- /header -->

	<main id="main-content" class="row">
		<div class="admin-wrap col-xs-12">
			<h3 class="p-y">Welcome, Zeker</h3>

			<!-- Tabs -->
			<ul class="nav nav-tabs" role="tablist">
			  <li class="nav-item">
			    <a class="nav-link active" href="#questions" role="tab" data-toggle="tab">Questions</a>
			  </li>
			  <li class="nav-item">
			    <a class="nav-link" href="#profile" role="tab" data-toggle="tab">Profile</a>
			  </li>
			  <li class="nav-item">
			    <a class="nav-link" href="#messages" role="tab" data-toggle="tab">Messages</a>
			  </li>
			  <li class="nav-item">
			    <a class="nav-link" href="#settings" role="tab" data-toggle="tab">Settings</a>
			  </li>
			</ul>

			<!-- Tab panes -->
			<div class="tab-content">
			  <div role="tabpanel" class="tab-pane active" id="questions">
			  	<div id="admin-question-search" class="round-input p-y-md">
					<input type="text" name="admin-question-search" placeholder="Search">
					<input type="submit" id="submit-admin-question-search" value="Search">
				</div>
				<div class="admin-questions">
					<?php getAdminQuestions(); ?>
				</div>
			  </div>
			  <div role="tabpanel" class="tab-pane" id="profile">...</div>
			  <div role="tabpanel" class="tab-pane" id="messages">...</div>
			  <div role="tabpanel" class="tab-pane" id="settings">...</div>
			</div>

		</div>
	</main><!-- /main -->	

	<footer class="row">
		<small>&copy Zeke <?php echo(date('Y')); ?></small>
	</footer>

	<!-- Scripts -->
	<script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
	<script type="text/javascript" src="bower_components/bootstrap/js/dist/util.js"></script>
	<script type="text/javascript" src="bower_components/bootstrap/js/dist/tab.js"></script>
	<script src="script.js" type="text/javascript" charset="utf-8" async defer></script>
</body>
</html>