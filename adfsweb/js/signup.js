/* javascript or Jquery file for signup.php page
 * This JQUERY file contains jquery functions
 * which will send request to the API server 
 * in order to register new user to Active Directory and
 * sending verification email to the user's email address
 * after successful registration 
 * */
/*IMPORTANT NOTE: everything must be inside document.ready function */
$(document).ready(function() {
    //Stops the submit request automatically
    $("#registerform").submit(function(e){
           e.preventDefault();
    });
   
    //checks if registerbutton is clicked
    $("#registerbutton").click(function(){
     //NOTE: get value after button click so 
     //always inside click function
     //get value of each input field after registerbutton has been clicked
     var fname = $('#fname').val();
     var lname = $('#lname').val();
     var username = $('#username').val();
     var email = $('#email').val();
     var password = $('#password').val();
     var role = $('#role').val();
    
       //check if all the input has value since they all are required for user registration    
       if(fname!==""&&lname!==""&&username!==""&&email!==""&&password!==""&&role!=="")
       {    
           //get the form data and then serialize that
            dataString = $("#registerform").serialize();
           //get the form data using another method  
            dataString = "fname=" + fname+"&lname="+lname+"&username="+username+"&email="+email+"&password="+password+"&role="+role;
            //make the AJAX request, dataType is set to json
            //meaning we are expecting JSON data in response from the server
            $.ajax({
                type: "POST",
               // url: "https://192.168.255.11:7443/ActiveDirectoryWebAPI/AddUser",
				url: "https://localhost:7443/WebAPI/AddUser",
                data: dataString,
                dataType: "json",
                //if received a response from the server
               // success: function( result, text;Status, jqXHR) {
               success: function(result) {
                    //check result JSON object
                    CheckSuccessResult(result,fname,lname,email);
                    console.log(result);//for testing
                },
                //If there is no resonse from the server
                //error: function(jqXHR, textStatus, errorThrown){
                error: function(jqXHR, textStatus){
                      //show error on web page
                      ShowErrorResult(jqXHR,textStatus);
                },
                //capture the request before it was sent to server
               // beforeSend: function(jqXHR, settings){
                beforeSend: function(settings){
                    //adding some Dummy data to the request
                    settings.data += "&dummyData=whatever";
                    //disable the button until we get the response
                    $('#registerbutton').attr("disabled", true);
                },
                //this is called after the response or error functions are finsihed
                //so that we can take some action
                //complete: function(jqXHR, textStatus){
                complete: function(){
                    //enable the button AJAX request has completed
                    $('#registerbutton').attr("disabled", false);
                    
                }
     
            }); /*ends ajax here....*/  
            
        }/*ends if here...*/

            
    }); /* ...........................ends button click here.....................................*/
    
/* This function is used to check whether the new user has been registered
  * to the active directory successfully, if yes then call Sendemail function
  * to send verification email to the user's email address otherwise show error
  * message in the JSON object right away to the user on the web page
  * it has four parameters:result,firstname,lastname,useremail
  * result: is the JSON object
  * firstname: is the first name of the new user
  * lastname: is the last name of the new user
  * useremail: is the email address of the new user
  */
function CheckSuccessResult(result,firstname,lastname,useremail){
 if(result.Status==="success"){
     //user has been registered then send verification email to his/her email address
     SendEmail(firstname,lastname,useremail);
  }else{
     //otherwise tell the user's right away the error message on the page
     $('#resultmodal').modal();
     $('#modalbodycontent').html("<p><strong>registration "+result.Status+"</strong></p>"+"<p>oops,cannot create your account."+result.ErrorMessage+"</p>");                      
     //hide modal windows after 6 seconds
     setTimeout(function(){$('#resultmodal').modal('hide');}, 8000);
    }   
    
}/* ..................................... CheckSuccessResult function ends here ....................... */    
        
/* function to send Post request to the API server in order to send verification email
 * to user's email address after successfully register the new user to the active directory 
 * It has three parameters: fname,lname and email
 * fname: is the new registered user's first name 
 * lname: is the new registered user's last name
 * email: is the new regsitered user's email address which the verification email will be sent to
 * receive: JSON object after getting response from the API server
 * then pass the JSON object to the ShowSuccessMessage function below to be shown to 
 * the user on the web page
 * */
function SendEmail(fname,lname,email){
  var subject="Account Verification";
  var body="This is an account verification email,please click on the link to verify and activate your account";  
  var verificationlink = "https://localhost:443/adfsweb/Activate.php";  
  dataString ="subject="+subject+"&body="+body+"&link="+verificationlink+ "&fname=" + fname+"&lname="+lname+"&receiveremail="+email;
     $.ajax({
            type: "POST",
            //url: "https://192.168.255.11:7443/ActiveDirectoryWebAPI/SendEmail",
			url: "https://localhost:7443/WebAPI/SendEmail",
            data: dataString,
            dataType: "json", 
            success: function( result) {
               ShowSuccessMessage(result);
               console.log(result);//for testing
            },
            error: function(jqXHR, textStatus){
                ShowErrorResult(jqXHR,textStatus);
            },  
            beforeSend: function(settings){
             //adding some Dummy data to the request
             settings.data += "&dummyData=whatever";
             $('#registerbutton').attr("disabled", true);
             //show loading before send
             $('#loadingmodal').modal();
             
            },
            complete: function(){
                    //enable the button after AJAX request has completed
                  $('#registerbutton').attr("disabled", false);
                  //hide loading after complete
                  $('#loadingmodal').modal('hide');
                }
     
    }); /*ends ajax here....*/    
    
    
}/* ....................................... Sendemail function ends here........................... */

/*function to show the result to the user after successfully register 
 * the new user to Active Directory and send email verification email to the user's email address
 * This function has one parameter JSON object
 * receive: JSON object from the Sendemail function above
 * e.g. result.Status=success or result.Status=fail
 * or   result.SuccessMessage or result.ErrorMessage
 * and show the message to the user on the web page     
 * */
function ShowSuccessMessage(result){
 if(result.Status==="success"){
    //both registration and verification email are success
    $('#resultmodal').modal();
    $('#modalbodycontent').html("<p><strong>registration "+result.Status+"</strong></p>"+"<p>Congratulation,your account is created</p>"+
       "<p>Verification email has been sent to your email address</p>"+"<p>so check your email in order to verify and activate your account </p>"
       +"<p> go to<a href=index.php> login "+"</a></p>");
        //reset all the input fields to empty  
         reset(); 
         //hide modal windows after 6 seconds
         setTimeout(function(){$('#resultmodal').modal('hide');}, 6000);
         
  }else{
     //otherwise tell the user's verification email cannot be sent due to internet connection
     //or invalid email address
     $('#resultmodal').modal();
     $('#modalbodycontent').html("<p><strong>registration "+result.Status+"</strong></p>"+"<p>oops,"+result.ErrorMessage+"</p>");                      
    //hide modal windows after 6 seconds
     setTimeout(function(){$('#resultmodal').modal('hide');}, 6000);
    }      
    
    
}/* .................................. ShowSuccessMessage ends function here................................ */
/* function to reset all input fields on the registration form to empty
 * it has no parameter
 * */
function reset(){
    $('input[type=text]').val('');  
    $('input[type=password]').val('');
    $('input[type=email]').val('');
    $('#role').val('select your role');
    
} /* ....................................................... reset ends function here ................... */
/*Function to show error message on error
* this function will be called when there is no response from API webserver
* e.g. when the API web server is down or there is no internet connection between
* this website web server and API server so there is no response from the server 
* then the error jquery function will be triggered and this function will be called
* to show message to the user on the web page   
* */
function ShowErrorResult(jqXHR, textStatus){
    console.log("Something really bad happened " + textStatus);
    $('#resultmodal').modal();
    $("#resultmodal").html(jqXHR.responseText);  
    setTimeout(function(){$('#resultmodal').modal('hide');}, 6000);
}/* ............................................ShowErrorResult function ends here ............... */    
        
    
}); /* .........................ends document ready here........................................... */

 