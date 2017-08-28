<?php
    $activePage = $_GET['page'];
    $the_title = ucwords(str_replace('-', ' ', $activePage));
?>
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title></title>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" integrity="sha384-OHBBOqpYHNsIqQy8hL1U+8OXf9hH6QRxi0+EODezv82DfnZoV7qoHAZDwMwEJvSw" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,700,700i" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="/css/main.min.css">
    </head>
    <body class="animated fadeIn">
      <section class="thermo"></section>
    	<header>
    		<div class="wrap">
    			<div class="title-area">iConnect</div>
    			<ul class="primary-nav">
    				<li><a href="/">Enroll in Benefits</a></li>
    				<li><a href="change-my-benefits.html">Change My Benefits</a></li>
    				<li><a href="research-benefits.html">Research Benefits</a></li>
    			</ul>
    			<ul class="task-nav-r">
            <?php include('task_nav.php'); ?>
    		</ul>
    			<ul class="secondary-nav">
    				<li><a href="change-my-benefits.html">FAQs</a></li>
    				<li><a href="change-my-benefits.html">Terms & Definitions</a></li>
    				<li><a href="change-my-benefits.html">My Total Rewards</a></li>
    				<li><a href="change-my-benefits.html">Contact HR1</a></li>
    			</ul>
    		</div>
    	</header>
