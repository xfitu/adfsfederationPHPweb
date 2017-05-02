
/*
 * Send AJAX request to Java Servlet WebAPI( Reference: https://github.com/xfitu/WebAPI)
 *This jquery file is used to send ajax data to resetpassword.php on the server*/
/* this jquery functions for reset user password*/
/*IMPORTANT NOTE: everything must be inside document.ready function */
$(document).ready(function(){
  /*on blur to check whether retype password is equal to password*/ 

/*Prevent automatic form submission*/    
$("#resetpasswordForm").submit(function(e){
           e.preventDefault();
});   
    
  /*when resetpassword button is clicked then reset user's password*/
$('#resetpasswordbutton').click(function(){
 //Get user's firstname and lastname from the hidden form 
 var fname = $("#fname").val();
 var lname = $("#lname").val();
 //Get the new password from the input form
 var password = $("#password").val();
 
if(fname!==null&&lname!==null&&name!==null&&password!==""){ 
    //alert("fname:"+fname+" "+"lname:"+lname);   
    var name = fname+" "+lname;  
    var username = fname;//dummy username
    dataString = $("#resetpasswordForm").serialize();  
    dataString = "name="+name+"&username="+username+"&password="+password;
    $.ajax({
                type: "POST",
                url: "https://localhost:7443/WebAPI/UpdatePassword",
                data: dataString,
                dataType: "json",
               success: function(result) {
                    ShowSuccessMessage(result);
                    console.log(result);//for testing
                },
               error: function(jqXHR, textStatus){
                      ShowErrorResult(jqXHR,textStatus);
                },
               beforeSend: function(settings){
                 //adding some Dummy data to the request
                 settings.data += "&dummyData=whatever";
                  //show loading before send
                 $('#loadingmodal').modal();
                },
                complete: function(){
                 //hide loading after complete
                  $('#loadingmodal').modal('hide');   
                }
     
            }); /*ends ajax here....*/  
            
        }/*ends if here...*/   
        else{
          //console.log("I am here");
         //otherwise tell the user's right away the error message on the page
        $('#resultmodal').modal();
        $('#modalbodycontent').html("<p><strong> reset password fail</strong></p>"+"<p>Please fill in all the required fields</p>");                      
        //hide modal windows after 6 seconds
        setTimeout(function(){$('#resultmodal').modal('hide');}, 6000);  
          
      }   
   }); /* ................... ends button click here...............................*/
          /*send request click button ends here................*/   
   
/*FUNCTION TO SHOW MESSAGE TO USER*/
function ShowSuccessMessage(result){
 if(result.Status==="success"){
    //both registration and verification email are success
    $('#resultmodal').modal();
    $('#modalbodycontent').html("<p><strong>reset password "+result.Status+"</strong></p>"+
       "<p>your password has been reset successfully</p>"
       +"<p> go to<a href=index.php> login "+"</a></p>");
        //reset all the input fields to empty  
         reset(); 
         //hide modal windows after 6 seconds
         setTimeout(function(){$('#resultmodal').modal('hide');}, 6000);
         
  }else{
     //otherwise tell the user's verification email cannot be sent due to internet connection
     //or invalid email address
     $('#resultmodal').modal();
     $('#modalbodycontent').html("<p><strong>reset password "+result.Status+"</strong></p>"+"<p>oops,"+result.ErrorMessage+"</p>"+"<p>please,try again to reset your password</p>");                      
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
                    

















































































