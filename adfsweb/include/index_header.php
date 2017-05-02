<?php   

	  $role=""; 
      $username="";
      $loginname="";
      $name="";
      $email="";
        
    if(!isset($_SESSION)) {
        session_start();
    }
    include_once("PHPadfsfederation/classes/adfsbridge.php");
    include_once("PHPadfsfederation/classes/adfsuserdetails.php");
    include_once("PHPadfsfederation/conf/adfsconf.php"); 
    
?>
<?php if(!isset($_SESSION['AdfsUserDetails'])) : ?>
                                                  
  <?php else : ?>
    <?php
      
       
       
        // Show User ID and attributes.
        $userDetails = unserialize($_SESSION['AdfsUserDetails']);         
        //echo '<b>Name Identifier: </b>'. $userDetails->nameIdentifier;  
        $username = $userDetails->nameIdentifier;                      
        
     foreach($userDetails->attributes as $key_val => $value) {
        
          if($key_val=="role"){
           // echo "i am role";
           //echo 'role:'.$value[0]."<br/>";
           $role = $value[0];
          }
          if($key_val=="upn"){
           // echo "i am role";
           //echo 'log in name:'.$value[0]."<br/>";
           $loginname=$value[0];
          }
           if($key_val=="emailaddress"){
           // echo "i am role";
           //echo 'email:'.$value[0]."<br/>";
           $email = $value[0];
          }
           if($key_val=="name"){
           // echo "i am role";
           //echo 'name:'.$value[0]."<br/>";
           $name = $value[0];
          }
      } //foreach $array

	 if(!$role==""){
		if($role=="patient"){
		 header('Location: '.'patient.php'); 
		 }
		 
		 if($role=="doctor"){
		 header('Location: '.'doctor.php'); 
		 }
		 
	}	 
        ?>
<?php endif; ?>

		
                                                  
 



<!-- This file is the header of the web page that is included in the header required web pages  -->
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" style="color:white;">Health Portal</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        
      <li><a href="index.php"><span class="glyphicon glyphicon-home" ></span></a></li>
      <li><a id="profilesettingsicon" href="profile.php"><span class="fa fa-cog" ></span></a></li>
      <li><a id="profilesettingsicon" href="signup.php"><span class="glyphicon glyphicon-user" ></span>register</a></li> 
      <li><a id="forgetpassword" href="forgetpassword.php"><span></span>forgetpassword</a></li>	      
      
       </ul>
      <ul class="nav navbar-nav navbar-right">
	    
        <li><a href="#"><span id="usernameonicon" class="glyphicon glyphicon-user" >
         <?php echo $username; ?>
        </span></a></li>
        <li>
            <?php include 'authform.php'; ?>
        </li>
        

      </ul>
    </div>
  </div>
</nav>
