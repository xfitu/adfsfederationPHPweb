
<?php
$fname="fname";
$lname="lname";
if(isset($_GET["lname"])&& isset($_GET["fname"])){
	$fname = $_GET["fname"];
	$lname = $_GET["lname"];
}
?>
<!DOCTYPE html>
<html>
<head>
        <meta
            name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <!-- 
        IMPORTANT: download and includes bootstrap.min.css,jquery-3.1.1.min.js
        and boostrap.min.js in the project for bootstrap framework and jquery AJAX request
        -->
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <script src="js/jquery-3.1.1.min.js" type="text/javascript"></script> 
        <script  src="js/bootstrap.min.js" type="text/javascript"></script> 
        <!-- Add jquery file contains functions for sending AJAX request to API server -->
        <script type="text/javascript" src="js/resetpassword.js"></script>
        <!-- link to css file for this page -->
        <link rel="stylesheet" href="css/resetpassword.css">

        <title>Reset Password</title>
</head>
<body>
  
   
    
<div class="container">  
<div id="formJumbotron" class="jumbotron">  
  <div id="topheader" > <h3 align="center">Reset Password</h3>
     <h5>Please,enter a new password for your account</h5>
  </div>    
<form id="resetpasswordForm">    
    <!-- ..................................................... password ................................................................................ --> 
  <div class="row">
	<div class="col-sm-10"> </div>
    <div class="col-sm-10" >
    <div class="form-group">
       	<div class="input-group">
        	<div class="input-group-addon"><strong>Password</strong></div>
            <input id="password" type="password" name="password" maxlength="50" class="form-control" placeholder="enter a new password" required="required">
            <input type="hidden" id="fname" name="fname" value="<?php echo $fname; ?>" />
			<input type="hidden" id="lname" name="lname" value="<?php echo $lname; ?>" />
	</div>
    </div>
    </div>
    
  </div>
<!-- ...........................................................password ends here.................................................................... -->

    <div class="row">
    <div class="col-sm-10"> </div>
    <div class="col-sm-10" >
    <div class="form-group">
        <div class="input-group">
            <div class="input-group-addon"> <strong>Retype Password</strong></div>
            <input id="retypepassword" type="password" name="retypepassword" maxlength="50" class="form-control" placeholder="retype password" required="required">
	</div>
			
    </div>
    </div>
   
  </div>
 <!-- ..................................................... retype password ends here.................................................................... --> 

<div class="row">
	<div class="col-sm-4"> </div>
    <div class="col-sm-4">
    <div class="form-group"> 
     <button id="resetpasswordbutton" type="submit" class="btn btn-primary"><strong>Reset Password</strong></button>
   </div> 
   </div>	
   </div>
</form>     
</div> 


  
<!-- ..............................Result Modal................................. -->
  <div class="modal fade" id="resultmodal" role="dialog">
    <div class="modal-dialog modal-sm">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><strong>Reset Password</strong></h4>
        </div>
        <div class="modal-body" id="modalbodycontent" align="center">
          <p>There is no result</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
        </div>
      </div>
      </div>
      </div>
     <!-- ................. result modal ends here..................................... -->
 

     <!-- ..............................Modal for showing loading................................. -->
  <div class="modal fade" id="loadingmodal" role="dialog">
    <div class="modal-dialog modal-sm">
    
      <!-- Modal content-->
      <div class="modal-content">
        
        <div class="modal-body" align="center">
          <img  src="images/Preloader_3.gif" alt="Loading1">
        </div>
        
      </div>
      </div>
      </div>
     <!-- ................. modal for showing loading ends here..................................... -->
   
</div>                   
</body>
</html>
