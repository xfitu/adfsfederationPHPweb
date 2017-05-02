
<?php
$fname="fname";
$lname="lname";
if(isset($_GET["lname"])&& isset($_GET["fname"]))
	$fname = $_GET["fname"];
	$lname = $_GET["lname"];
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
       <!-- 
        IMPORTANT: download and includes bootstrap.min.css,jquery-3.1.1.min.js
        and boostrap.min.js in the project for bootstrap framework and jquery AJAX request
        -->
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <script src="js/jquery-3.1.1.min.js" type="text/javascript"></script> 
        <script  src="js/bootstrap.min.js" type="text/javascript"></script> 
        <!-- Add jquery file contains functions for sending AJAX request to API server -->
        <script type="text/javascript" src="js/Activate.js"></script>
        <!-- link to css file for this page -->
        <link rel="stylesheet" href="css/Activate.css">

<title>Account Activation</title>
</head>
<body>

<form id="activateform">
  <input type="hidden" id="fname" name="fname" value="<?php echo $fname; ?>" />
  <input type="hidden" id="lname" name="lname" value="<?php echo $lname; ?>" />
</form>    
 
<div class="container">    
  <div id="result" class="jumbotron text-center">        
   <!-- ..................Result will be shown here............... -->            
  </div>     
</div>   <!-- ends container here...... -->       
</body>
</html>
