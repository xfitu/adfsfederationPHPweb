/*
 * Send AJAX request to Java Servlet WebAPI( Reference: https://github.com/xfitu/WebAPI)
 * This jquery or javascript file is used in Activate.php page
 */
$(document).ready(function() {  
//$(function() {
    //prevent auto submission of the hidden form in the page 
    $("#activateform").submit(function(e){
           e.preventDefault();
    });
     //get user's first name and last name from the hidden form in the page
     var fname = $("#fname").val();
     var lname = $("#lname").val(); 
     //activate user's account
     ActivateAccount(fname,lname);
  }); /* .............................................. ends document ready here.................... */
  
  /* function to activate user's account*/
  /* This function has two parameters fname and lname
   * fname: is the first name of the user whose account will be activated
   * lname: is the last name of the user whose account will be activated
   * receives: JSON object, which consists of two elements Status and Message from the API server 
   * e.g object.Status=success and object.SuccessMessage=account is activated,if account is successfully activated
   * otherwise object.Status=fail and object.ErrorMessage=account is not activated, if failed to be activated due to some reasons 
   * Then pass the JSON object to the ShowResult function to be shown to the user's on the page
   */
  function ActivateAccount(fname,lname){
    if(fname!==""&&lname!==""){    
      //console.log("data before send"+"fname:"+fname+" "+"lname:"+lname);  
      dataString = $("#activateform").serialize(); 
      dataString = "fname=" + fname+"&lname="+lname;
            $.ajax({
                type: "POST",
                url: "https://localhost:7443/WebAPI/ActivateAccount",
                data: dataString,
                dataType: "json",
               success: function( result) {
                    console.log(result);//for testing
                    ShowResult(result);
                },
                error: function(jqXHR, textStatus){
                      console.log("Something really bad happened " + textStatus);
                      $("#result").html(jqXHR.responseText);   
                },
                beforeSend: function(settings){
                    //adding some Dummy data to the request
                    settings.data += "&dummyData=whatever";
                },
                complete: function(){
                    //can do something here.....                    
                }
     
            }); /* ...............ends ajax here................................................*/  
            
        }/*................................ends if here.......................................*/   
      
      
  }/* .........................................ends function here................................*/
  
  /*function to show success result*/
  /* This function has one parameter JSON object
   * it receives JSON object from the ActivateAccount function above
   * e.g. result.Status=success or result.Status=fail
   *      result.SuccessMessage or result.ErrorMessage
   * and show the message to the user in the this web page     
   * */
  function ShowResult(result){
      if(result.Status==="success"){
         $("#result").html( "<h3><strong>Account Activation</strong></h3><br>"+
                     "<span>"+result.SuccessMessage+"</span>"+
                     "<br><span>go to <a href=index.php >login</a></span>");  
      }else{
         $("#result").html( "<h3><strong>Account Activation</strong></h3><br>"+
                      "<span>"+result.ErrorMessage+"</span>"+
                      "<br><span>go to <a href=index.php >login</a></span>");  
          
      }
      
  }/* ........................................ends function here...................................*/
