
<!DOCTYPE html>
<html>
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
        <script type="text/javascript" src="js/forgetpassword.js"></script>
        <!-- link to css file for this page -->
        <link rel="stylesheet" href="css/forgetpassword.css">

        <title>Forget Password</title>
</head>
<body>
    
<div class="container">  
   
<div id="formJumbotron" class="jumbotron">  
  <div id="topheader" > <h3 align="center">Forget Password</h3>
     <h5>After sending the request a link will be sent your email address</h5>
     <h5>Use the link in order to reset your account password</h5>
  </div>    
<form id="forgetpasswordForm">    
    <!-- ..................................................... username ................................................................................ --> 
  <div class="row">
	<div class="col-sm-10"> </div>
    <div class="col-sm-10" >
    <div class="form-group">
       	<div class="input-group">
        	<div class="input-group-addon"><strong> username</strong></div>
            <input id="username" type="text" name="username" maxlength="50" class="form-control" placeholder="enter username" required="required">
	</div>
    </div>
    </div>
    
  </div>
<!-- ...........................................................username ends here.................................................................... -->

    <div class="row">
    <div class="col-sm-10"> </div>
    <div class="col-sm-10" >
    <div class="form-group">
        <div class="input-group">
            <div class="input-group-addon"> <strong>first name</strong></div>
            <input id="fname" type="text" name="fname" maxlength="50" class="form-control" placeholder="enter first name" required="required">
	</div>
			
    </div>
    </div>
   
  </div>
 <!-- ..................................................... first name ends here.................................................................... --> 

 <!-- ....................................................last name................................................................................. --> 
 <div class="row">
	<div class="col-sm-10"> </div>
    <div class="col-sm-10" >
    <div class="form-group">
       	<div class="input-group">
            <div class="input-group-addon"> <strong>last name</strong></div>
            <input id="lname" type="text" name="lname" maxlength="50" class="form-control" placeholder="enter last name" required="required">
	</div>
    </div>
    </div>
    
  </div>
 <!-- ..................................................... last name ends here.................................................................... -->
<!-- ...............................................................email............................................................................ -->  
  <div class="row">
	<div class="col-sm-10"> </div>
    <div class="col-sm-10" >
    <div class="form-group">
       	<div class="input-group">
            <div class="input-group-addon"><strong>email</strong></div>
            <input id="email" type="email" name="email" maxlength="50" class="form-control" placeholder="enter email" required="required">
	</div>
    </div>
    </div>
    
  </div>
<!-- .............................................................email ends here.................................................................... -->
<div class="row">
	<div class="col-sm-4"> </div>
    <div class="col-sm-4">
    <div class="form-group"> 
     <button id="sendrequestbutton" type="submit" class="btn btn-primary"><strong>Send Request</strong></button>
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
          <h4 class="modal-title"><strong>Send Request</strong></h4>
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
          <img class="profile-img" src="images/Preloader_3.gif" alt="Loading1">
        </div>
        
      </div>
      </div>
      </div>
     <!-- ................. modal for showing loading ends here..................................... -->
   
</div>                   
</body>
</html>
