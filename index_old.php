<?php
    $activePage = $_GET['page'];
    $the_title = ucwords(str_replace('-', ' ', $activePage));
?>
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
