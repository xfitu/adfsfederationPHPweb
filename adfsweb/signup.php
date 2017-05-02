
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Sign up</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 
        IMPORTANT: download and includes bootstrap.min.css,jquery-3.1.1.min.js
        and boostrap.min.js in the project for bootstrap framework and jquery AJAX request
   -->
  <!-- Remember file must be in this order -->
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <script src="js/jquery-3.1.1.min.js" type="text/javascript"></script> 
  <script  src="js/bootstrap.min.js" type="text/javascript"></script> 
  <!-- Add jquery file contains functions for sending AJAX request to API server -->
  <script type="text/javascript" src="js/signup.js"></script>
  <!-- link to css file for this page -->
  <link rel="stylesheet" href="css/signup.css">
       
</head>
<body>    
<div class="container">
<div class="well well-sm">
 
<div id="topimage">    
  <img class="profile-img" src="images/Logo2.png" alt="Logo2">
  <h4 class="text-center login-title"><strong>Create Account</strong></h4>
</div>   
  <form id="registerform">
<!-- ....................................................first name............................................................................ -->      
  <div class="row">
    <div class="col-sm-4"> </div>
    <div class="col-sm-4" >
    <div class="form-group">
        <div class="input-group">
            <div class="input-group-addon"> <strong>first name</strong></div>
            <input id="fname" type="text" name="fname" maxlength="50" class="form-control" placeholder="enter first name" required="required">
	</div>
			
    </div>
    </div>
    <div class="col-sm-4" id="fname_error"></div>
  </div>
 <!-- ..................................................... first name ends here.................................................................... --> 
 
 <!-- ....................................................last name................................................................................. --> 
 <div class="row">
	<div class="col-sm-4"> </div>
    <div class="col-sm-4" >
    <div class="form-group">
       	<div class="input-group">
            <div class="input-group-addon"> <strong>last name</strong></div>
            <input id="lname" type="text" name="lname" maxlength="50" class="form-control" placeholder="enter last name" required="required">
	</div>
    </div>
    </div>
    <div class="col-sm-4" id="lname_error" ></div>
  </div>
 <!-- ..................................................... last name ends here.................................................................... -->

<!-- ..................................................... username ................................................................................ --> 
  <div class="row">
	<div class="col-sm-4"> </div>
    <div class="col-sm-4" >
    <div class="form-group">
       	<div class="input-group">
        	<div class="input-group-addon"><strong> username</strong></div>
            <input id="username" type="text" name="username" maxlength="50" class="form-control" placeholder="enter username" required="required">
	</div>
    </div>
    </div>
    <div class="col-sm-4" id="username_error" ></div>
  </div>
<!-- ...........................................................username ends here.................................................................... -->

<!-- ...............................................................email............................................................................ -->  
  <div class="row">
	<div class="col-sm-4"> </div>
    <div class="col-sm-4" >
    <div class="form-group">
       	<div class="input-group">
            <div class="input-group-addon"><strong>email</strong></div>
            <input id="email" type="email" name="email" maxlength="50" class="form-control" placeholder="enter email" required="required">
	</div>
    </div>
    </div>
    <div class="col-sm-4" id="email_error" ></div>
  </div>
<!-- .............................................................email ends here.................................................................... -->
 
<!-- .................................................................password........................................................................ -->  
  <div class="row">
	<div class="col-sm-4"> </div>
    <div class="col-sm-4" >
    <div class="form-group">
       	<div class="input-group">
        	<div class="input-group-addon"><strong>password</strong></div>
            <input id="password" type="password" name="password" maxlength="50" class="form-control" placeholder="enter password" required="required">
	</div>
    </div>
    </div>
    <div class="col-sm-4" id="password_error"></div>
  </div>
 <!-- ............................................................password ends here.................................................................... -->

<!-- ..................................................... role.................................................................... -->  
 <div class="row">
	<div class="col-sm-4"> </div>
    <div class="col-sm-4" >
    <div class="form-group">
       		<div class="input-group">
        	<div class="input-group-addon"><strong> Role</strong></div>
                    <select id="role" name="role" class="form-control" data-placeholder="role" required="required">
                            <option value="" id="optiondefaultvalue" disabled  selected="selected"> select your role</option>
                            <option value="patient">patient</option>
                            <option value="doctor">doctor</option>
                    </select>
			
       		</div>
     </div>
            
    <div class="row">
	<div class="col-sm-4"> </div>
    <div class="col-sm-4">
    <div class="form-group">
     <button id="registerbutton" type="submit" class="btn btn-primary"><strong>Create account</strong></button>
    </div>
    
   </div>	
    
   </div>

   <p class="form-group text-center">By creating an account, you agree to our <a href="#">Terms of Use</a> and our <a href="#">Password Policy</a>.</p>
   <p class="form-group text-center"> already have account go to <a href="index.php">login</a> </p>
   <p class="form-group text-center"> forget your password <a href="forgetpassword.php">here</a> </p>

  
</div>  
</div> 
    </form>
</div>
</div>    
<!-- ..................................................... forms contents ends here......................................................................... -->
<!-- ................. container and well ends here........................................ -->
  
<!-- ..............................Result Modal................................. -->
  <div class="modal fade" id="resultmodal" role="dialog">
    <div class="modal-dialog modal-sm">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><strong>registration</strong></h4>
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

    
</body>
</html>


