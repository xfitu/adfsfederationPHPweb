
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
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
        <script type="text/javascript" src="js/profile.js"></script>
        <!-- link to css file for this page -->
        <link rel="stylesheet" href="css/profile.css">

<title>profile</title>
</head>
<body>

<!-- .................................... Header Starts here................................................... -->

 <?php  
    include_once("include/profile_header.php");
  ?>
     
<!-- .................................... Header ends here...................................................... -->
<!-- hidden form for user's name and username and will be used in Jquery Ajax to send request to API server -->
    <form id="profileform">
       <input type="hidden" name="Username" id="Username" value="<?php echo $username; ?>">
       <input type="hidden" name="Name" id="Name" value="<?php echo $name; ?> ">
       <input type="hidden" name="Loginname" id="Loginname" value="<?php echo $loginname; ?>">
       <input type="hidden" name="Email" id="Email" value="<?php echo $email; ?>">
       <input type="hidden" name="Role" id="Role" value="<?php echo $role; ?>">
    </form> 
<!-- ...................................ends profile form here ............................................... -->

<div class="jumbotron">    
<div class="container">       
   
  <h4 align="center"><strong>Profile Settings</strong></h4>
  <div class="jumbotron"> 
    <div class="table-responsive">          
        <table class="table">
            <tbody>
  
      <tr>
        <td><strong>Name</strong></td>
        <td id="namevalue"> not provided </td>
        <td>
            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#nameModal">Edit</button>  
        </td>
      </tr>
     
      <tr>
        <td><strong>Username</strong></td>
        <td id="usernamevalue">not provided </td>
        <td>
            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#usernameModal">Edit</button> 
        </td>
      </tr>
  
      <tr>
        <td><strong>userPrincipalName</strong></td>
        <td id="userprincipalnamevalue">not provided </td>
        <td></td>
      </tr>
      
      <tr>
        <td><strong>distinguishedName</strong></td>
        <td id="distinguishednamevalue"> not provided </td>
        <td></td>
      </tr>
      
      <tr>
        <td><strong>Email</strong></td>
        <td id="emailvalue">not provided</td>
        <td>
            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#emailModal">Edit</button> 
        </td>
      </tr>
      
      <tr>
        <td><strong>Role</strong></td>
        <td id="rolevalue">not provided</td>
        <td>
          <button type="button" class="btn btn-link" data-toggle="modal" data-target="#addroleModal">Edit</button> 
          <button type="button" id="deletebuttonforrole">Delete</button> 
        </td>
      </tr>
      
      <tr>
        <td><strong>Password</strong></td>
        <td>**********</td>
        <td>
           <button type="button" class="btn btn-link" data-toggle="modal" data-target="#passwordModal">Change</button> 
        </td>
      </tr>

      <tr id="addresslabelrow">
        <td><strong>Address:</strong></td>
        <td></td>
        <td></td>
      </tr>
      
      <tr>
        <td><strong>Country/Region</strong></td>
        <td id="countryvalue">not provided</td>
        <td>
          <button type="button" class="btn btn-link" data-toggle="modal" data-target="#countryModal">Edit</button> 
          <button type="button" class="deletebutton" data-value="co">Delete</button> 
        </td>
      </tr>
      
      <tr>
        <td><strong>State/Province</strong></td>
        <td id="statevalue">not provided</td>
        <td>
            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#stateModal">Edit</button> 
            <button type="button" class="deletebutton" data-value="st">Delete</button> 
        </td>
      </tr>
      
      <tr>
        <td><strong>City</strong></td>
        <td id="cityvalue">not provided</td>
        <td>
            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#cityModal">Edit</button> 
            <button type="button" class="deletebutton" data-value="l">Delete</button> 
        </td>
      </tr>
      
      <tr>
        <td><strong>Zip/Postal Code</strong></td>
        <td id="postalcodevalue">not provided</td>
        <td>
            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#postalcodeModal">Edit</button> 
            <button type="button" class="deletebutton" data-value="postalCode">Delete</button> 
        </td>
      </tr>
      
      <tr>
        <td><strong>POBOX</strong></td>
        <td id="poboxvalue">not provided</td>
        <td>
           <button type="button" class="btn btn-link" data-toggle="modal" data-target="#poboxModal">Edit</button> 
           <button type="button" class="deletebutton" data-value="postOfficeBox">Delete</button> 
        </td>
      </tr>
      
      <tr>
        <td><strong>Street</strong></td>
        <td id="streetvalue">not provided</td>
        <td>
            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#streetModal">Edit</button> 
            <button type="button" class="deletebutton" data-value="streetAddress">Delete</button> 
        </td>
      </tr>
      
      <tr id="endaddressrow">
        <td></td>
        <td></td>
        <td></td>
      </tr>
      
      <tr>
        <td><strong>Gender</strong></td>
        <td id="gendervalue">not provided</td>
        <td>
            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#genderModal">Edit</button> 
            <button type="button" class="deletebutton" data-value="description">Delete</button> 

        </td>
      </tr>
      
      <tr>
        <td><strong>Title</strong></td>
        <td id="titlevalue">not provided</td>
        <td>
            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#titleModal">Edit</button> 
            <button type="button" class="deletebutton" data-value="title">Delete</button> 

        </td>
      </tr>
      
      <tr>
        <td><strong>Mobile</strong></td>
        <td id="mobilevalue">not provided</td>
        <td>
            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#mobileModal">Edit</button> 
            <button type="button" class="deletebutton" data-value="mobile">Delete</button> 

        </td>
      </tr>
      
      <tr>
        <td><strong>Telephone</strong></td>
        <td id="telephonevalue">not provided</td>
        <td>
            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#telephoneModal">Edit</button>  
            <button type="button" class="deletebutton" data-value="telephoneNumber">Delete</button> 
        </td>
      </tr>
      
      <tr>
        <td><strong>Office</strong></td>
        <td id="officevalue">not provided</td>
        <td>
            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#officeModal">Edit</button> 
            <button type="button" class="deletebutton" data-value="physicalDeliveryOfficeName">Delete</button> 
        </td>
      </tr>
      
      <tr>
        <td><strong>Department</strong></td>
        <td id="departmentvalue">not provided</td>
        <td>
          <button type="button" class="btn btn-link" data-toggle="modal" data-target="#departmentModal">Edit</button> 
          <button type="button" class="deletebutton" data-value="department">Delete</button> 
        </td>
      </tr>
      
      <tr>
        <td><strong>Company</strong></td>
        <td id="companyvalue">not provided</td>
        <td>
            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#companyModal">Edit</button> 
            <button type="button" class="deletebutton" data-value="company">Delete</button> 
        </td>
      </tr>
      
    </tbody>
  </table>
  </div>
 </div> 

 
  

<!--  ........................................MODAL form is start from here...............................................  -->

 <!-- This is name Modal -->
  <div class="modal fade" id="nameModal" role="dialog">
    <div class="modal-dialog modal-sm">
    
      <!-- Modal content-->
      <div class="modal-content">
      
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><strong>Edit name</strong></h4>
        </div>
        
        <form id="nameModalForm">
        <div class="modal-body">
            <div class="form-group">
                <label for="fname">first name</label>
                <input type="text" class="form-control" id="fname" placeholder="Enter new first name">
            </div>    
            <div class="form-group">
                <label for="lname">last name</label>
                <input type="text" class="form-control" id="lname" placeholder="Enter new last name">
            </div>    
        </div>
        <div class="modal-footer">
          <button type="submit" id="savechangename" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#resultModal" >save change</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">cancel</button>
           
        </div> 
        </form>  
      </div>
     </div>
  </div>
 <!-- name modal ends here............ -->
 <!-- This is username Modal -->
  <div class="modal fade" id="usernameModal" role="dialog">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
      
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><strong> Edit Username</strong></h4>
        </div>
        <form id="usernameModalForm">
        <div class="modal-body">
             
            <div class="form-group">
                <label for="username">username</label>
                <input type="text" class="form-control" id="username" placeholder="Enter new username">
            </div>
            
        </div>
        <div class="modal-footer">
          <button type="submit" id="savechangeusernamebutton" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#resultModal" >save change</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">cancel</button>
           
        </div> 
        </form>  
      </div>
     </div>
  </div>
 <!-- username modal ends here............ -->
 <!-- This is email Modal -->
  <div class="modal fade" id="emailModal" role="dialog">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
      
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><strong>Edit Email</strong></h4>
        </div>
         
        <form id="emailModalForm">
        <div class="modal-body">
            <div class="form-group">
                <label for="email">email</label>
                <input type="email" class="form-control" id="email" placeholder="Enter new email">
            </div>
        </div>
        <div class="modal-footer">
          <button type="submit" id="savechangeemailbutton" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#resultModal" >save change</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">cancel</button>
           
        </div> 
        </form>  
 
      </div>
     </div>
  </div>
 <!-- email modal ends here............ -->

 <!-- This is add role Modal -->
  <div class="modal fade" id="addroleModal" role="dialog">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
      
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><strong>Add Role</strong></h4>
        </div>
        <form id="addroleModalForm">
        <div class="modal-body">
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-addon"><strong>Role</strong></div>
                            <select id="role" name="role" class="form-control" data-placeholder="role" required="required">
                                <option value="" disabled > select role</option>
                                <option value="patient">patient</option>
                                <option value="doctor">doctor</option>
                            </select>
      
                    </div>
                </div>
                   
        </div>
        <div class="modal-footer">
          <button type="submit" id="addrolebutton" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#resultModal" >Add</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">cancel</button>
           
        </div> 
        </form>  
      </div>
     </div>
  </div>
 <!-- add role modal ends here............ -->

 
 <!-- This is password Modal -->
  <div class="modal fade" id="passwordModal" role="dialog">
    <div class="modal-dialog modal-sm">
    
      <!-- Modal content-->
      <div class="modal-content">
      
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><strong>Change Password</strong></h4>
        </div>
        
        <form id="passwordModalForm">
        <div class="modal-body">
            <!--
            <div class="form-group">
                <label for="Current Password">Current Password</label>
                <input type="password" class="form-control" id="oldpassword" placeholder="Enter current password">
            </div>    -->
            <div class="form-group">
                <label>New Password</label>
                <input type="password" class="form-control" id="newpassword" placeholder="Enter new password">
            </div>    
        </div>
        <div class="modal-footer">
          <button type="submit" id="savechangepasswordbutton" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#resultModal" >save change</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">cancel</button>
           
        </div> 
        </form>  
      </div>
     </div>
  </div>
 <!-- password modal ends here............ -->
 <!-- ............................ ADDRESS MODAL STARTS HERE..............................................  -->
 <!-- This is country Modal -->
  <div class="modal fade" id="countryModal" role="dialog">
    <div class="modal-dialog modal-sm">
    
      <!-- Modal content-->
      <div class="modal-content">
      
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><strong>Change Country</strong></h4>
        </div>
        
        <form id="countryModalForm">
        <div class="modal-body">
            <div class="form-group">
                <label for="country">Country/Region</label>
                <input type="text" class="form-control" id="country" placeholder="Enter new country">
            </div>    
        </div>
        <div class="modal-footer">
          <button type="submit" id="savechangecountrybutton" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#resultModal" >save change</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">cancel</button>
           
        </div> 
        </form>  
      </div>
     </div>
  </div>
 <!-- country modal ends here............ -->

<!-- This is state Modal -->
  <div class="modal fade" id="stateModal" role="dialog">
    <div class="modal-dialog modal-sm">
    
      <!-- Modal content-->
      <div class="modal-content">
      
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><strong>Change State</strong></h4>
        </div>
        
        <form id="stateModalForm">
        <div class="modal-body">
            <div class="form-group">
                <label for="state">State/Province</label>
                <input type="text" class="form-control" id="state" placeholder="Enter new state">
            </div>    
        </div>
        <div class="modal-footer">
          <button type="submit" id="savechangestatebutton" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#resultModal" >save change</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">cancel</button>
           
        </div> 
        </form>  
      </div>
     </div>
  </div>
 <!-- ....................................... state modal ends here ........................ -->
 
 <!-- ................................  This is city Modal ................................ -->
  <div class="modal fade" id="cityModal" role="dialog">
    <div class="modal-dialog modal-sm">
    
      <!-- Modal content-->
      <div class="modal-content">
      
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><strong>Change City</strong></h4>
        </div>
        
        <form id="cityModalForm">
        <div class="modal-body">
            <div class="form-group">
                <label for="city">City</label>
                <input type="text" class="form-control" id="city" placeholder="Enter new city">
            </div>    
        </div>
        <div class="modal-footer">
          <button type="submit" id="savechangecitybutton" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#resultModal" >save change</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">cancel</button>
           
        </div> 
        </form>  
      </div>
     </div>
  </div>
 <!-- ................................... city modal ends here............................ -->

<!-- ................................  This is postal code Modal ................................ -->
  <div class="modal fade" id="postalcodeModal" role="dialog">
    <div class="modal-dialog modal-sm">
    
      <!-- Modal content-->
      <div class="modal-content">
      
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><strong>Change Postal Code</strong></h4>
        </div>
        
        <form id="postalcodeModalForm">
        <div class="modal-body">
            <div class="form-group">
                <label>Zip/Postal Code</label>
                <input type="text" class="form-control" id="postalcode" placeholder="Enter new postalcode">
            </div>    
        </div>
        <div class="modal-footer">
          <button type="submit" id="savechangepostalcodebutton" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#resultModal" >save change</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">cancel</button>
           
        </div> 
        </form>  
      </div>
     </div>
  </div>
 <!-- ................................... postal code modal ends here............................ --> 
 
 <!-- ................................  This is pobox Modal ................................ -->
  <div class="modal fade" id="poboxModal" role="dialog">
    <div class="modal-dialog modal-sm">
    
      <!-- Modal content-->
      <div class="modal-content">
      
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><strong>Change POBOX</strong></h4>
        </div>
        
        <form id="poboxModalForm">
        <div class="modal-body">
            <div class="form-group">
                <label for="pobox">POBOX</label>
                <input type="text" class="form-control" id="pobox" placeholder="Enter new pobox">
            </div>    
        </div>
        <div class="modal-footer">
          <button type="submit" id="savechangepoboxbutton" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#resultModal" >save change</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">cancel</button>
           
        </div> 
        </form>  
      </div>
     </div>
  </div>
 <!-- ................................... pobox modal ends here............................ -->
 
 <!-- ................................  This is street Modal ................................ -->
  <div class="modal fade" id="streetModal" role="dialog">
    <div class="modal-dialog modal-sm">
    
      <!-- Modal content-->
      <div class="modal-content">
      
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><strong>Change Street</strong></h4>
        </div>
        
        <form id="streetModalForm">
        <div class="modal-body">
            <div class="form-group">
                <label for="street">Street</label>
                <input type="text" class="form-control" id="street" placeholder="Enter new street">
            </div>    
        </div>
        <div class="modal-footer">
          <button type="submit" id="savechangestreetbutton" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#resultModal" >save change</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">cancel</button>
           
        </div> 
        </form>  
      </div>
     </div>
  </div>
 <!-- ................................... street modal ends here............................ -->
 
 <!-- ................................  This is gender Modal ................................ -->
  <div class="modal fade" id="genderModal" role="dialog">
    <div class="modal-dialog modal-sm">
    
      <!-- Modal content-->
      <div class="modal-content">
      
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><strong>Change Gender</strong></h4>
        </div>
        
        <form id="genderModalForm">
        <div class="modal-body">
             <label class="radio-inline">
                <input type="radio" id="male" name="optradio" value="male">male
            </label>
            <label class="radio-inline">
                <input type="radio" id="female" name="optradio" value="female">female
            </label>   
        </div>
        <div class="modal-footer">
          <button type="submit" id="savechangegenderbutton" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#resultModal" >save change</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">cancel</button>
           
        </div> 
        </form>  
      </div>
     </div>
  </div>
 <!-- ................................... gender modal ends here............................ -->
 
 <!-- ................................  This is title Modal ................................ -->
  <div class="modal fade" id="titleModal" role="dialog">
    <div class="modal-dialog modal-sm">
    
      <!-- Modal content-->
      <div class="modal-content">
      
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><strong>Change Title</strong></h4>
        </div>
        
        <form id="titleModalForm">
        <div class="modal-body">
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" placeholder="Enter new title">
            </div>    
        </div>
        <div class="modal-footer">
          <button type="submit" id="savechangetitlebutton" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#resultModal" >save change</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">cancel</button>
           
        </div> 
        </form>  
      </div>
     </div>
  </div>
 <!-- ................................... title modal ends here............................ -->
 
 <!-- ................................  This is mobile Modal ................................ -->
  <div class="modal fade" id="mobileModal" role="dialog">
    <div class="modal-dialog modal-sm">
    
      <!-- Modal content-->
      <div class="modal-content">
      
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><strong>Change Mobile</strong></h4>
        </div>
        
        <form id="mobileModalForm">
        <div class="modal-body">
            <div class="form-group">
                <label for="mobile">Mobile</label>
                <input type="text" class="form-control" id="mobile" placeholder="Enter new mobile">
            </div>    
        </div>
        <div class="modal-footer">
          <button type="submit" id="savechangemobilebutton" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#resultModal" >save change</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">cancel</button>
           
        </div> 
        </form>  
      </div>
     </div>
  </div>
 <!-- ................................... mobile modal ends here............................ -->
 
 <!-- ................................  This is telephone Modal ................................ -->
  <div class="modal fade" id="telephoneModal" role="dialog">
    <div class="modal-dialog modal-sm">
    
      <!-- Modal content-->
      <div class="modal-content">
      
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><strong>Change Telephone</strong></h4>
        </div>
        
        <form id="telephoneModalForm">
        <div class="modal-body">
            <div class="form-group">
                <label for="telephone">Telephone</label>
                <input type="text" class="form-control" id="telephone" placeholder="Enter new telephone">
            </div>    
        </div>
        <div class="modal-footer">
          <button type="submit" id="savechangetelephonebutton" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#resultModal" >save change</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">cancel</button>
           
        </div> 
        </form>  
      </div>
     </div>
  </div>
 <!-- ................................... telephone modal ends here............................ -->
 
 <!-- ................................  This is office Modal ................................ -->
  <div class="modal fade" id="officeModal" role="dialog">
    <div class="modal-dialog modal-sm">
    
      <!-- Modal content-->
      <div class="modal-content">
      
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><strong>Change Office</strong></h4>
        </div>
        
        <form id="officeModalForm">
        <div class="modal-body">
            <div class="form-group">
                <label for="office">Office</label>
                <input type="text" class="form-control" id="office" placeholder="Enter new office">
            </div>    
        </div>
        <div class="modal-footer">
          <button type="submit" id="savechangeofficebutton" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#resultModal" >save change</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">cancel</button>
           
        </div> 
        </form>  
      </div>
     </div>
  </div>
 <!-- ................................... office modal ends here............................ -->
 
 <!-- ................................  This is department Modal ................................ -->
  <div class="modal fade" id="departmentModal" role="dialog">
    <div class="modal-dialog modal-sm">
    
      <!-- Modal content-->
      <div class="modal-content">
      
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><strong>Change Department</strong></h4>
        </div>
        
        <form id="departmentModalForm">
        <div class="modal-body">
            <div class="form-group">
                <label for="department">Department</label>
                <input type="text" class="form-control" id="department" placeholder="Enter new department">
            </div>    
        </div>
        <div class="modal-footer">
          <button type="submit" id="savechangedepartmentbutton" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#resultModal" >save change</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">cancel</button>
           
        </div> 
        </form>  
      </div>
     </div>
  </div>
 <!-- ................................... department modal ends here............................ -->
 
 <!-- ................................  This is company Modal ................................ -->
  <div class="modal fade" id="companyModal" role="dialog">
    <div class="modal-dialog modal-sm">
    
      <!-- Modal content-->
      <div class="modal-content">
      
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><strong>Change Company</strong></h4>
        </div>
        
        <form id="companyModalForm">
        <div class="modal-body">
            <div class="form-group">
                <label for="company">Company</label>
                <input type="text" class="form-control" id="company" placeholder="Enter new company">
            </div>    
        </div>
        <div class="modal-footer">
          <button type="submit" id="savechangecompanybutton" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#resultModal" >save change</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">cancel</button>
           
        </div> 
        </form>  
      </div>
     </div>
  </div>
 <!-- ................................... company modal ends here............................ -->
 
 
 <!-- ........................................result modal starts here............................ -->
 <div class="modal fade" id="resultModal" role="dialog">
    <div class="modal-dialog modal-sm">
    
      
      <div class="modal-content">
      
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><strong>edit profile</strong></h4>
        </div>
        
      
        <div class="modal-body" id="modalbodycontent" align="center">   
            <!-- result will be shown here -->
        </div>
    
        <div class="modal-footer">
         <button type="button" class="btn btn-primary" data-dismiss="modal">close</button>
           
        </div> 
        
      </div>
     </div>
  </div>
<!-- ................................result modal ends here....................................... -->

<!-- ........................................delete attribute modal starts here............................ -->
 <div class="modal fade" id="deleteattributeModal" role="dialog">
    <div class="modal-dialog modal-sm">
    
      
      <div class="modal-content">
      
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <p class="modal-title"><strong>Delete attribute</strong></p>
        </div>
        
        <form id="deleteattributeModalForm">
        <div class="modal-body" id="deleteattributeModalContent" align="center">   
            <!-- These are hidden input for setting attribute name and value -->
           <p> Do you really want to delete the attribute?</p>
            <input type="hidden" name="todeleteattributename" id="todeleteattributename" value="no value">
            <input type="hidden" name="todeleteattributevalue" id="todeleteattributevalue" value="no value">
        </div>
    
        <div class="modal-footer">
         <button type="button" class="btn btn-primary" id="deleteattributebutton">YES</button>   
         <button type="button" class="btn btn-primary" data-dismiss="modal">NO</button>  
        </div> 
        </form>
      </div>
     </div>
  </div>
<!-- ....................................delete attribute modal ends here....................................... -->

<!-- ........................................delete role modal starts here............................ -->
 <div class="modal fade" id="deleteroleModal" role="dialog">
    <div class="modal-dialog modal-sm"> 
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <p class="modal-title"><strong>Delete role</strong></p>
        </div>
        <form id="deleteroleModalForm">
        <div class="modal-body" id="deleteroleModalContent" align="center">   
            <!-- radio button will be placed here -->
            
        </div>  
        <div class="modal-footer">
         <button type="button" class="btn btn-primary" id="deleterolebutton">Delete</button>   
         <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>  
        </div> 
        </form>
      </div>
     </div>
  </div>
<!-- ....................................delete role modal ends here....................................... -->

<!-- ..............................Modal for showing loading................................. -->
  <div class="modal fade" id="loadingmodal" role="dialog">
    <div class="modal-dialog modal-sm">
    
      <!-- Modal content-->
      <div class="modal-content" >
        <div class="modal-header" id="loadingheader">
          <h6 class="modal-title"><strong>Loading...</strong></h6>
        </div>
        <div class="modal-body" align="center">
          <img  src="images/Preloader_3.gif" alt="Loading1">
        </div>
        
      </div>
      </div>
      </div>
<!-- ................. modal for showing loading ends here..................................... -->

</div>
</div>       
</body>
</html>


