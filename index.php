<?php
    $activePage = $_GET['page'];
    $the_title = ucwords(str_replace('-', ' ', $activePage));
?>
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Thermo - <?php echo $the_title; ?></title>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" integrity="sha384-OHBBOqpYHNsIqQy8hL1U+8OXf9hH6QRxi0+EODezv82DfnZoV7qoHAZDwMwEJvSw" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,700,700i" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="/css/main.min.css">

    </head>
    <body class="<?php if ($activePage == '') echo 'home '; ?>animated fadeIn">
      <section class="thermo"></section>
    	<header>
    		<div class="wrap">
    			<div class="title-area">iConnect</div>
    			<ul class="primary-nav">
    				<li><a href="/" class="<?php if ($activePage == '') echo 'current'; ?>">Enroll in Benefits</a></li>
    				<li><a href="?page=change-my-benefits" class="<?php if ($activePage == 'change-my-benefits') echo 'current'; ?>">Change My Benefits</a></li>
    				<li><a href="?page=research-benefits" class="<?php if ($activePage == 'research-benefits') echo 'current'; ?>">Research Benefits</a></li>
    			</ul>
    			<ul class="task-nav-r">
            <?php include('includes/task_nav.php'); ?>
    		</ul>
    			<ul class="secondary-nav">
    				<li><a href="#">FAQs</a></li>
    				<li><a href="#">Terms & Definitions</a></li>
    				<li><a href="#">My Total Rewards</a></li>
    				<li><a href="#">Contact HR1</a></li>
    			</ul>
    		</div>
    	</header>
        <?php
        switch ($activePage) {
          case 'benefits-overview':
          include('includes/pages/benefits-overview.php');
          break;

          case 'rally-health-survey':
          include('includes/pages/rally-health-survey.php');
          break;

          case 'rates':
          include('includes/pages/rates.php');
          break;

          case 'medical':
          include('includes/pages/medical.php');
          break;

          case 'prescription':
          include('includes/pages/prescription.php');
          break;

          case 'dental':
          include('includes/pages/dental.php');
          break;

          case 'vision':
          include('includes/pages/vision.php');
          break;

          case 'savings-accounts':
          include('includes/pages/savings-accounts.php');
          break;

          case 'local-medical-plans':
          include('includes/pages/local-medical-plans.php');
          break;

          case 'life-add-disability':
          include('includes/pages/life-add-disability.php');
          break;

          case 'legal':
          include('includes/pages/legal.php');
          break;

          case 'documents':
          include('includes/pages/documents.php');
          break;

          case 'change-my-benefits':
          include('includes/pages/change-my-benefits.php');
          break;

          case 'research-benefits':
          include('includes/pages/research-benefits.php');
          break;

          default:
          include('includes/pages/home.php');
          }
        ?>

        <section class="thermo" style="height: 150px;"></section>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="/js/scripts.min.js"></script>
    </body>
</html>
