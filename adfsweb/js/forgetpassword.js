
/* This jquery file is used to send ajax data to forgetpassword.php on the server*/
/* this jquery functions for sendin reset link to user for reseting his/her password*/
/*IMPORTANT NOTE: everything must be inside document.ready function */
$(document).ready(function(){
 
/*Prevent automatic form submission*/    
$("#forgetpasswordForm").submit(function(e){
           e.preventDefault();
}); 
/*when sendrequest button is clicked then send request*/
$('#sendrequestbutton').click(function(){
var fname = $("#fname").val();
var lname = $("#lname").val();
var username = $("#username").val();
var email = $("#email").val();
 
if(fname!==""&&lname!==""&&username!==""&&email!==""){ 
    var name = fname+" "+lname;  
    //alert("Name:"+name +" "+"email:"+email+" "+"username:"+ username);
    dataString = $("#forgetpasswordForm").serialize();  
    dataString = "name="+name+"&username="+username+"&email="+email;
   // alert("Name:"+name +" "+"email:"+email+" "+"username:"+ username);
    $.ajax({
                type: "POST",
                url: "https://localhost:7443/WebAPI/ForgetPassword",
                data: dataString,
                dataType: "json",
               success: function(result) {
                    CheckResponseResult(result,fname,lname,email);
                    console.log(result);//for testing
                },
               error: function(jqXHR, textStatus){
                      ShowErrorResult(jqXHR,textStatus);
                },
               beforeSend: function(settings){
                 //adding some Dummy data to the request
                 settings.data += "&dummyData=whatever";
                 $('#sendrequestbutton').attr("disabled", true);
                  //show loading before send
                 $('#loadingmodal').modal();
                },
                complete: function(){
                   $('#sendrequestbutton').attr("disabled", false);   
                 //hide loading after complete
                  $('#loadingmodal').modal('hide');   
                }
     
            }); /*ends ajax here....*/  
            
       }/*ends if here...*/
      else{
          //console.log("I am here");
         //otherwise tell the user's right away the error message on the page
        $('#resultmodal').modal();
        $('#modalbodycontent').html("<p><strong> send request fail</strong></p>"+"<p>Please fill in all the required fields</p>");                      
        //hide modal windows after 6 seconds
        setTimeout(function(){$('#resultmodal').modal('hide');}, 6000);  
          
      }
}); /* ................... ends button click here...............................*/
          /*send request click button ends here................*/   
 
function CheckResponseResult(result,fname,lname,email){
 if(result.Status==="success"){
     //user's username and name are valid, send link to his/her email address
     SendEmail(fname,lname,email);
  }else{
     //otherwise tell the user's right away the error message on the page
     $('#resultmodal').modal();
     $('#modalbodycontent').html("<p><strong>send request "+result.Status+"</strong></p>"+"<p>oops,cannot send request to reset password."+result.ErrorMessage+"</p>");                      
     //hide modal windows after 6 seconds
     setTimeout(function(){$('#resultmodal').modal('hide');}, 6000);
    }   
    
}/* ..................................... CheckResponseResult function ends here ....................... */    
/*FUNCTION TO SEND LINK TO USER'S EMAIL ADDRESS TO RESET HIS/HER ACCOUNT PASSWORD*/
function SendEmail(fname,lname,email){
  var subject="Reset Password";
  var body="This is reset password email,please click on the link to reset new password for your account";
  var verificationlink = "https://localhost:443/adfsweb/resetpassword.php";  
  dataString ="subject="+subject+"&body="+body+"&link="+verificationlink+ "&fname=" + fname+"&lname="+lname+"&receiveremail="+email;
     $.ajax({
            type: "POST",
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
             $('#sendrequestbutton').attr("disabled", true);
             //show loading before send
             $('#loadingmodal').modal();
             
            },
            complete: function(){
                    //enable the button after AJAX request has completed
                  $('#sendrequestbutton').attr("disabled", false);
                  //hide loading after complete
                  $('#loadingmodal').modal('hide');
                }
     
    }); /*ends ajax here....*/    
    
    
}/* ....................................... Sendemail function ends here........................... */
/*FUNCTION TO SHOW MESSAGE TO USER*/
function ShowSuccessMessage(result){
 if(result.Status==="success"){
    //both registration and verification email are success
    $('#resultmodal').modal();
    $('#modalbodycontent').html("<p><strong>send request "+result.Status+"</strong></p>"+
       "<p>reset password email has been sent to your email address</p>"+"<p>so check your email in order to resete a new password for your account </p>"
       +"<p> go to<a href=index.php> login "+"</a></p>");
        //reset all the input fields to empty  
         reset(); 
         //hide modal windows after 6 seconds
         setTimeout(function(){$('#resultmodal').modal('hide');}, 6000);
         
  }else{
     //otherwise tell the user's verification email cannot be sent due to internet connection
     //or invalid email address
     $('#resultmodal').modal();
     $('#modalbodycontent').html("<p><strong>send request "+result.Status+"</strong></p>"+"<p>oops,"+result.ErrorMessage+"</p>");                      
    //hide modal windows after 6 seconds
     setTimeout(function(){$('#resultmodal').modal('hide');}, 6000);
    }      
    
    
}/* .................................. ShowSuccessMessage ends function here................................ */
/* function to reset all input fields on the form to empty
 * */
function reset(){
    $('input[type=text]').val('');  
    $('input[type=email]').val('');
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
    setTimeout(function(){$('#resultmodal').modal('hide');}, 8000);
}/* ............................................ShowErrorResult function ends here ............... */    

  

}); /* ................................. on document ready function ends here.....................*/
                    







