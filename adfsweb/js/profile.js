/* This jquery file is used to send ajax data to profile.php on the server*/
/* this jquery functions for updating user profile*/
/*IMPORTANT NOTE: everything must be inside document.ready function */
$(document).ready(function(){
  // Get username and name from the hidden form
  // Fetch user's attributes by full name or username(account name) 
  var USERNAME=$('#Username').val();
  var NAME=$('#Name').val();
  //alert(USERNAME + " "+ NAME);
  //get user's details to be shown in the table
  GetUserDetails(USERNAME); //or GetUserDetails(NAME)
 /* FUNCTION TO SEND POST REQUEST TO API SERVER IN ORDER TO RETRIEVE USER DETAILS  ACTIVE DIRECTORY*/ 
  function GetUserDetails(username){
    //check if all the input has value since they all are required for user registration    
    if(name!=="" |username!==""){     
        dataString = "username="+username; // or dataString = "name="+name;
         $.ajax({
                type: "POST",
                url: "https://localhost:7443/WebAPI/GetAnUserAttributes",
                data: dataString,
                dataType: "json",
               success: function(result) {
                    ShowInTable(result);
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
  }/* ........................... GetUserDetails function ends here................................*/
  /*function to show the JSON object in the table on the page*/
  function ShowInTable(result){
    //if status=success then show the data in the JSON object in the table  
   if(result.Status==="success"){
    //required attributes always have values so show them directly without checking
    $('#namevalue').html(result.name);//shows name   
    $('#usernamevalue').html(result.username);//shows username
    $('#userprincipalnamevalue').html(result.userPrincipalName);//shows userprincipalname 
    $('#distinguishednamevalue').html(result.distinguishedName);//shows distinguishedname 
    $('#emailvalue').html(result.email);//shows email
    $('#rolevalue').html(result.group);//shows group which is the role of the user
    //optional attributes 
    //add address to the table 
    $('#countryvalue').html(result.country);//shows country
    $('#statevalue').html(result.state);//shows state
    $('#cityvalue').html(result.city);//shows city
    $('#postalcodevalue').html(result.postalCode);//shows postalcode
    $('#poboxvalue').html(result.PoBox);//shows pobox
    $('#streetvalue').html(result.streetAddress);//shows street
    //add other attributes
    $('#gendervalue').html(result.description);//shows description which is used as user's gender
    $('#titlevalue').html(result.title);//shows title
    $('#mobilevalue').html(result.mobile);//shows mobile
    $('#telephonevalue').html(result.telephoneNumber);//shows telephone
    $('#officevalue').html(result.physicalDeliveryOfficeName);//shows office
    $('#departmentvalue').html(result.department);//shows department
    $('#companyvalue').html(result.company);//shows company
   }
   //otherwise redirect user to the login page again 
  /* else{
        //alert("finally,i got you");
        $('#resultModal').modal();
        $('#modalbodycontent').html("<p><strong>add details "+result.Status+"</strong></p><p>"+result.ErrorMessage+"</p>");
        //hide fail message modal after 6 seconds
        setTimeout(function(){$('#resultModal').modal('hide');}, 4000);
   }   */
      
  }/* ................................ ShowInTable function ends here .............................*/

/* ...................................CHECK FOR BUTTON CLICK EVEN STARTS HERE...................................................*/
    /*when savechangename button is clicked then user name is updated*/
    $('#savechangenamebutton').click(function(){
          //get fname and lname from the modal from on button click 
	   var fname = $('#fname').val();
	   var lname = $('#lname').val();
           ChangeName(NAME,fname,lname);
           
    });/* ............................ends button on click .................................*/
          /*update name ends here................*/
          
    /*when savechangeusername button is clicked then user username is updated*/
    $('#savechangeusernamebutton').click(function(){
           //get data from the modal from
	   var username = $('#username').val();
           ChangeUsername(NAME,username);
	   
   });/* ........ ends button click here........................ */
          /*update username ends here................*/
          
    /*when savechangepassword button is clicked then user password is updated*/
    $('#savechangepasswordbutton').click(function(){
           //get data from the modal form
	   var password = $('#newpassword').val();
           ChangePassword(NAME,USERNAME,password);
	   
    });/* .................................ends button click here.........................................*/
          /*update password ends here................*/
    
    /*when addrole button is clicked then new user role will added*/
    $('#addrolebutton').click(function(){
	   var role = $('#role').val();
           AddRole(NAME,role);
           
    });/* .............. ends button click here ............................ */
          /*add role ends here................*/
   /*when deleterole button is clicked then set the user roles on the modal*/
    $('#deletebuttonforrole').click(function(){
        //Get role value in the html
        var role = $('#rolevalue').html();
        var result = SetRoleOnDeleteModal(role);
         $('#deleteroleModal').modal();
         $('#deleteroleModalContent').html(result);
        
    });/* .............. ends button click here ............................ */
          /*delete role ends here................*/
    /*when deleterole button is clicked on the modal then selected user's role will deleted*/
    $('#deleterolebutton').click(function(){
        //Get the value of select radio button for role on delete role modal
        var role = $("input[name='role']:checked").val();
         //delete the selected user's role
         DeleteRole(NAME,role);
    });/* .............. ends button click here ............................ */
          /*deleterole button ends here................*/      
    /*when savechangeemail button is clicked then user email is updated*/
    $('#savechangeemailbutton').click(function(){
	   var email = $('#email').val();
           var attribute_name = "mail";//LDAP name for user's email in active directory
           ChangeAttribute(NAME,attribute_name,email);
	   
   }); /* ................... ends button click here...............................*/
          /*update email ends here................*/
/*when savechangecountry button is clicked then user country is updated*/
    $('#savechangecountrybutton').click(function(){
	   var country = $('#country').val();
           var attribute_name = "co";//LDAP name for user's country in active directory
           ChangeAttribute(NAME,attribute_name,country);
	   
   }); /* ................... ends button click here...............................*/
          /*update country ends here................*/
/*when savechangestate button is clicked then user state is updated*/
    $('#savechangestatebutton').click(function(){
	   var state = $('#state').val();
           var attribute_name = "st";//LDAP name for user's state in active directory
           ChangeAttribute(NAME,attribute_name,state);
	   
   }); /* ................... ends button click here...............................*/
          /*update state ends here................*/
 /*when savechangecountry button is clicked then user country is updated*/
    $('#savechangecitybutton').click(function(){
	   var city = $('#city').val();
           var attribute_name = "l";//LDAP name for user's city in active directory
           ChangeAttribute(NAME,attribute_name,city);
	   
   }); /* ................... ends button click here...............................*/
          /*update city ends here................*/
   /*when savechangepostalcode button is clicked then user postal code is updated*/
    $('#savechangepostalcodebutton').click(function(){
	   var postalcode = $('#postalcode').val();
           var attribute_name = "postalCode";//LDAP name for user's postal code in active directory
           ChangeAttribute(NAME,attribute_name,postalcode);
	   
   }); /* ................... ends button click here...............................*/
          /*update postalcode ends here................*/
    /*when savechangepobox button is clicked then user pobox is updated*/
    $('#savechangepoboxbutton').click(function(){
	   var pobox = $('#pobox').val();
           var attribute_name = "postOfficeBox";//LDAP name for user's Pobox in active directory
           ChangeAttribute(NAME,attribute_name,pobox);
	   
   }); /* ................... ends button click here...............................*/
          /*update post office Box ends here................*/
  
  /*when savechangestreet button is clicked then user street is updated*/
    $('#savechangestreetbutton').click(function(){
	   var street = $('#street').val();
           var attribute_name = "streetAddress";//LDAP name for user's street address in active directory
           ChangeAttribute(NAME,attribute_name,street);
	   
   }); /* ................... ends button click here...............................*/
          /*update street ends here................*/
   /*when savechangegender button is clicked then user gender is updated*/
    $('#savechangegenderbutton').click(function(){
	   var gender = $("input[name='optradio']:checked").val();
           var attribute_name = "description";//LDAP name for user's description in active directory
           ChangeAttribute(NAME,attribute_name,gender);
	   
   }); /* ................... ends button click here...............................*/
          /*update gender ends here................*/
   /*when savechangetitle button is clicked then user title is updated*/
    $('#savechangetitlebutton').click(function(){
	   var title = $("#title").val();
           var attribute_name = "title";//LDAP name for user's title in active directory
           ChangeAttribute(NAME,attribute_name,title);
	   
   }); /* ................... ends button click here...............................*/
          /*update title ends here................*/
    /*when savechangemobile button is clicked then user mobile is updated*/
    $('#savechangemobilebutton').click(function(){
	   var mobile = $("#mobile").val();
           var attribute_name = "mobile";//LDAP name for user's mobile number in active directory
           ChangeAttribute(NAME,attribute_name,mobile);
	   
   }); /* ................... ends button click here...............................*/
          /*update mobile ends here................*/      
   /*when savechangetelephone button is clicked then user telephone is updated*/
    $('#savechangetelephonebutton').click(function(){
	   var telephone = $("#telephone").val();
           var attribute_name = "telephoneNumber";//LDAP name for user's telephone number in active directory
           ChangeAttribute(NAME,attribute_name,telephone);
	   
   }); /* ................... ends button click here...............................*/
          /*update telephone ends here................*/    
          
    /*when savechangeoffice button is clicked then user office is updated*/
    $('#savechangeofficebutton').click(function(){
	   var office = $("#office").val();
           var attribute_name = "physicalDeliveryOfficeName";//LDAP name for user's office in active directory
           ChangeAttribute(NAME,attribute_name,office);
	   
   }); /* ................... ends button click here...............................*/
          /*update office ends here................*/  
   /*when savechangedepartment button is clicked then user department is updated*/
    $('#savechangedepartmentbutton').click(function(){
	   var department = $("#department").val();
           var attribute_name = "department";//LDAP name for user's department in active directory
           ChangeAttribute(NAME,attribute_name,department);
	   
   }); /* ................... ends button click here...............................*/
          /*update department ends here................*/   
    
    /*when savechangecompany button is clicked then user company is updated*/
    $('#savechangecompanybutton').click(function(){
	   var company = $("#company").val();
           var attribute_name = "company";//LDAP name for user's company in active directory
           ChangeAttribute(NAME,attribute_name,company);
	   
   }); /* ................... ends button click here...............................*/
          /*update  ends company here................*/ 
    /* check if delete button is clicked*/
   $('.deletebutton').click(function(){
	var attributename = $(this).data('value');
        var attributevalue; 
       if(attributename==="co"){
          attributevalue = $('#countryvalue').html();  
       }
       if(attributename==="st"){
          attributevalue = $('#statevalue').html();  
       }
       if(attributename==="l"){
        attributevalue = $('#cityvalue').html();  
       }
        if(attributename==="postalCode"){
          attributevalue = $('#postalcodevalue').html();  
       }
       if(attributename==="postOfficeBox"){
          attributevalue = $('#poboxvalue').html();  
       }
       if(attributename==="streetAddress"){
        attributevalue = $('#streetvalue').html();  
       }
       if(attributename==="description"){
          attributevalue = $('#gendervalue').html();  
       }
       if(attributename==="title"){
          attributevalue = $('#titlevalue').html();  
       }
       if(attributename==="mobile"){
        attributevalue = $('#mobilevalue').html();  
       }
       if(attributename==="telephoneNumber"){
          attributevalue = $('#telephonevalue').html();  
       }
       if(attributename==="physicalDeliveryOfficeName"){
        attributevalue = $('#officevalue').html();  
       }
       if(attributename==="department"){
        attributevalue = $('#departmentvalue').html();  
       }
       if(attributename==="company"){
        attributevalue = $('#companyvalue').html();  
       }
         // alert("you clicked on "+attributename+" button which has value "+attributevalue);
          $('#deleteattributeModal').modal();
          //set values on the modal hidden input form
          $('#todeleteattributename').val(attributename); 
          $('#todeleteattributevalue').val(attributevalue); 
   }); /* ................... ends button click here...............................*/
          /*delete button ends here................*/ 
   /* check if deleteattributebutton is clicked */       
   $('#deleteattributebutton').click(function(){
     //get the values of attributename and attributevalue hidden form on the deleteattribute modal   
     var attributename=$('#todeleteattributename').val(); 
     var attributevalue=$('#todeleteattributevalue').val(); 
     //delete the attribute and its value  	  
     DeleteAttribute(NAME,attributename,attributevalue);	   
   }); /*...........button click ends here...................*/ 
        /*delete attribute ends here................*/ 
 /* ......................... UPDATE FUNCTIONS START HERE............................................*/         
/*function to change or update user's name*/
function ChangeName(name,newfname,newlname){
//check if all the input has value since they all are required for user registration    
    if(newfname!==""&&newlname!==""&&name!==""){    
        //get the form data and then serialize that
        dataString = $("#nameModalForm").serialize();
        //get the form data using another method  
        dataString = "name="+name+"&newfname="+newfname+"&newlname="+newfname;
         $.ajax({
                type: "POST",
                url: "https://localhost:7443/WebAPI/UpdateName",
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
                    //disable the button until we get the response
                    $('#savechangenamebutton').attr("disabled", true);
                },
                complete: function(){
                    //enable the button AJAX request has completed
                    $('#savechangenamebutton').attr("disabled", false);
                    $('#nameModal').modal('hide');
                }
     
            }); /*ends ajax here....*/  
            
        }/*ends if here...*/
        else{
          $('#resultModal').modal();
          $('#modalbodycontent').html("<p><strong>"+"Change Name fail"+"</strong></p>"+
               "<p>"+"please fill in all the required fields"+"</p>");
           setTimeout(function(){$('#resultModal').modal('hide');}, 8000); 
        }/* .........ends else here...............*/
    
    
}/* ......................................... ChangeName function ends here................................................ */

/*function to change or update user's username*/
function ChangeUsername(name,newusername){
 //check if all the input has value since they all are required for user registration    
    if(newusername!==""&&name!==""){    
        //get the form data and then serialize that
        dataString = $("#usernameModalForm").serialize();
        //get the form data using another method  
        dataString = "name="+name+"&newusername="+newusername;
         $.ajax({
                type: "POST",
                url: "https://localhost:7443/WebAPI/UpdateUsername",
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
                    //disable the button until we get the response
                    $('#savechangeusernamebutton').attr("disabled", true);
                },
                complete: function(){
                    //enable the button AJAX request has completed
                    $('#savechangeusernamebutton').attr("disabled", false);
                    $('#usernameModal').modal('hide');
                    
                }
     
            }); /*ends ajax here....*/  
            
        }/*ends if here...*/
        else{
          $('#resultModal').modal();
          $('#modalbodycontent').html("<p><strong>"+"Change Username fail"+"</strong></p>"+
               "<p>"+"please fill in all the required fields"+"</p>");
          setTimeout(function(){$('#resultModal').modal('hide');}, 8000);  
        }/* .........ends else here...............*/   
    
}/* ......................................... ChangeUsername function ends here................................................ */

/*function to change or update user's password*/
function ChangePassword(name,username,newpassword){
//check if all the input has value since they all are required for user registration    
    if(username!==""&&name!==""&&newpassword!==""&&newpassword.length>=8){    
        //get the form data and then serialize that
        dataString = $("#passwordModalForm").serialize();
        //get the form data using another method  
        dataString = "name="+name+"&username="+username+"&password="+newpassword;
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
                    //disable the button until we get the response
                    $('#savechangepasswordbutton').attr("disabled", true);
                },
                complete: function(){
                    //enable the button AJAX request has completed
                    $('#savechangepasswordbutton').attr("disabled", false);
                    $('#passwordModal').modal('hide');
                }
     
            }); /*ends ajax here....*/  
            
        }/*ends if here...*/
        else{
          $('#resultModal').modal();
          $('#modalbodycontent').html("<p><strong>"+"Change Password fail"+"</strong></p>"+
               "<p>"+"please fill in all the required fields"+"</p>");
          setTimeout(function(){$('#resultModal').modal('hide');}, 8000);  
        }/* .........ends else here...............*/     
    
}/* ......................................... ChangePassword function ends here................................................ */

/*function to add user to a group in active directory and then use the group's name as user's role*/
function AddRole(name,role){
//check if all the input has value since they all are required for user registration    
    if(role!==""&&name!==""){    
        //get the form data and then serialize that
        dataString = $("#addroleModalForm").serialize();
        //get the form data using another method  
        dataString = "name="+name+"&groupname="+role;
         $.ajax({
                type: "POST",
                url: "https://localhost:7443/WebAPI/AddUserToGroup",
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
                    //disable the button until we get the response
                    $('#addrolebutton').attr("disabled", true);
                },
                complete: function(){
                    //enable the button AJAX request has completed
                    $('#addrolebutton').attr("disabled", false);
                    $('#addroleModal').modal('hide');
                }
     
            }); /*ends ajax here....*/  
            
        }/*ends if here...*/
        else{
          $('#resultModal').modal();
          $('#modalbodycontent').html("<p><strong>"+"Add role fail"+"</strong></p>"+
               "<p>"+"please fill in all the required fields"+"</p>");
          setTimeout(function(){$('#resultModal').modal('hide');}, 8000);  
        }/* .........ends else here...............*/     
       
}/* ......................................... AddRole function ends here................................................ */

/*function to remove an user from a group in active directory or delete user's role*/
function DeleteRole(name,role){    
    if(role!==""&&name!==""){    
        //get the form data and then serialize that
        dataString = $("#deleteroleModalForm").serialize();
        //get the form data using another method  
        dataString = "name="+name+"&groupname="+role;
         $.ajax({
                type: "POST",
                url: "https://localhost:7443/WebAPI/RemoveUserFromGroup",
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
                    //disable the button until we get the response
                    $('#deleterolebutton').attr("disabled", true);
                },
                complete: function(){
                    //enable the button AJAX request has completed
                    $('#deleterolebutton').attr("disabled", false);
                    $('#deleteroleModal').modal('hide');
                }
     
            }); /*ends ajax here....*/  
            
        }/*ends if here...*/
        else{
          $('#resultModal').modal();
          $('#modalbodycontent').html("<p><strong>"+"Delete role fail"+"</strong></p>"+
               "<p>"+"please select which role to delete"+"</p>");
          setTimeout(function(){$('#resultModal').modal('hide');}, 8000);  
        }/* .........ends else here...............*/     
       
}/* ......................................... DeleteRole function ends here................................................ */


/*function to change or update user's attributes such as address(country,state,city,postalcode,pobox,street)
 * email,gender,title,mobile,telephone,office,department and company */
function ChangeAttribute(name,attributename,attributevalue){
//check if all the input has value since they all are required for user registration    
    if(attributename!==""&&name!==""&&attributevalue!==""){ 
        var button;
        var modal;
        if(attributename==="mail"){
           modal = $('#emailModal'); 
           button = $('#savechangeemailbutton');
            //get the form data and then serialize that
            dataString = $("#emailModalForm").serialize();
            //get the form data using another method  
            dataString = "name="+name+"&attributename="+attributename+"&attributevalue="+attributevalue;
         }
         if(attributename==="co"){
            modal = $('#countryModal'); 
            button = $('#savechangecountrybutton');
            //get the form data and then serialize that
            dataString = $("#countryModalForm").serialize();
            //get the form data using another method  
            dataString = "name="+name+"&attributename="+attributename+"&attributevalue="+attributevalue;
         }
         if(attributename==="st"){
           modal = $('#stateModal');  
           button = $('#savechangestatebutton');
            //get the form data and then serialize that
            dataString = $("#stateModalForm").serialize();
            //get the form data using another method  
            dataString = "name="+name+"&attributename="+attributename+"&attributevalue="+attributevalue;
         }
         if(attributename==="l"){
            modal = $('#cityModal'); 
            button = $('#savechangecitybutton');
            //get the form data and then serialize that
            dataString = $("#cityModalForm").serialize();
            //get the form data using another method  
            dataString = "name="+name+"&attributename="+attributename+"&attributevalue="+attributevalue;
         }
         if(attributename==="postalCode"){
            modal = $('#postalcodeModal'); 
            button = $('#savechangepostalcodebutton');
            //get the form data and then serialize that
            dataString = $("#postalcodeModalForm").serialize();
            //get the form data using another method  
            dataString = "name="+name+"&attributename="+attributename+"&attributevalue="+attributevalue;
         }
         if(attributename==="postOfficeBox"){
            modal = $('#poboxModal'); 
            button = $('#savechangepoboxbutton');
            //get the form data and then serialize that
            dataString = $("#poboxModalForm").serialize();
            //get the form data using another method  
            dataString = "name="+name+"&attributename="+attributename+"&attributevalue="+attributevalue;
         }
         if(attributename==="streetAddress"){
            modal = $('#streetModal'); 
            button = $('#savechangestreetbutton');
            //get the form data and then serialize that
            dataString = $("#streetModalForm").serialize();
            //get the form data using another method  
            dataString = "name="+name+"&attributename="+attributename+"&attributevalue="+attributevalue;
         }
        if(attributename==="description"){
            modal = $('#descriptionModal');
            button = $('#savechangedescriptionbutton');
            //get the form data and then serialize that
            dataString = $("#descriptionModalForm").serialize();
            //get the form data using another method  
            dataString = "name="+name+"&attributename="+attributename+"&attributevalue="+attributevalue;
         }
        if(attributename==="title"){
            modal = $('#titleModal');
            button = $('#savechangetitlebutton');
            //get the form data and then serialize that
            dataString = $("#titleModalForm").serialize();
            //get the form data using another method  
            dataString = "name="+name+"&attributename="+attributename+"&attributevalue="+attributevalue;
         }
        if(attributename==="mobile"){
            modal = $('#mobileModal');
            button = $('#savechangemobilebutton');
            //get the form data and then serialize that
            dataString = $("#mobileModalForm").serialize();
            //get the form data using another method  
            dataString = "name="+name+"&attributename="+attributename+"&attributevalue="+attributevalue;
         }
        if(attributename==="telephoneNumber"){
            modal = $('#telephoneModal');
            button = $('#savechangetelephonebutton');
            //get the form data and then serialize that
            dataString = $("#telephoneModalForm").serialize();
            //get the form data using another method  
            dataString = "name="+name+"&attributename="+attributename+"&attributevalue="+attributevalue;
         }
         if(attributename==="physicalDeliveryOfficeName"){
           modal = $('#officeModal');  
           button = $('#savechangeofficebutton');
            //get the form data and then serialize that
            dataString = $("#officeModalForm").serialize();
            //get the form data using another method  
            dataString = "name="+name+"&attributename="+attributename+"&attributevalue="+attributevalue;
         }
        if(attributename==="department"){
            modal = $('#departmentModal');
            button = $('#savechangedepartmentbutton');
            //get the form data and then serialize that
            dataString = $("#departmentModalForm").serialize();
            //get the form data using another method  
            dataString = "name="+name+"&attributename="+attributename+"&attributevalue="+attributevalue;
         }
         if(attributename==="company"){
           modal = $('#companyModal');  
           button = $('#savechangecompanybutton');
            //get the form data and then serialize that
            dataString = $("#companyModalForm").serialize();
            //get the form data using another method  
            dataString = "name="+name+"&attributename="+attributename+"&attributevalue="+attributevalue;
         }
         $.ajax({
                type: "POST",
                url: "https://localhost:7443/WebAPI/UpdateAttribute",
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
                    //disable the button until we get the response
                    button.attr("disabled", true);
                },
                complete: function(){
                    //enable the button AJAX request has completed
                    button.attr("disabled", false);
                    //hide the update form
                    modal.modal('hide');
                }
     
            }); /*ends ajax here....*/  
            
        }/*ends if here...*/
        else{
          $('#resultModal').modal();
          $('#modalbodycontent').html("<p><strong>"+"Change Attribute fail"+"</strong></p>"+
               "<p>"+"please fill in all the required fields"+"</p>");
            setTimeout(function(){$('#resultModal').modal('hide');}, 8000);
        }/* .........ends else here...............*/    
    
}/* ......................................... ChangeAttribute function ends here................................................ */

/*function to delete user's attributes such as address(country,state,city,postalcode,pobox,street)
 * gender,title,mobile,telephone,office,department and company */
function DeleteAttribute(name,attributename,attributevalue){
//check if all the input has value since they all are required for user registration    
    if(attributename!==""&&name!==""&&attributevalue!==""){ 
        var button=$('#deleteattributebutton');
        var modal=$('#deleteattributeModal');
        dataString = $("#deleteattributeModalForm").serialize();  
        dataString = "name="+name+"&attributename="+attributename+"&attributevalue="+attributevalue;
         
         $.ajax({
                type: "POST",
                url: "https://localhost:7443/WebAPI/DeleteAttribute",
                data: dataString,
                dataType: "json",
               success: function(result) {
                    ShowDeleteAttributeMessage(result);
                    console.log(result);//for testing
                },
               error: function(jqXHR, textStatus){
                      ShowErrorResult(jqXHR,textStatus);
                },
               beforeSend: function(settings){
                    //adding some Dummy data to the request
                    settings.data += "&dummyData=whatever";
                    button.attr("disabled", true);
                },
                complete: function(){
                    button.attr("disabled", true);
                    modal.modal('hide');
                }
     
            }); /*ends ajax here....*/  
            
        }/*ends if here...*/
        else{
          $('#resultModal').modal();
          $('#modalbodycontent').html("<p><strong>"+"Delete Attribute fail"+"</strong></p>"+
               "<p>"+"Attribute has no value to delete"+"</p>");
            setTimeout(function(){$('#resultModal').modal('hide');}, 8000);
        }/* .........ends else here...............*/    
    
}/* ......................................... DeleteAttribute function ends here................................................ */


/*function to show message on the web page*/
  /* This function has one parameter JSON object
   * it receives JSON object from the ActivateAccount function above
   * e.g. result.Status=success or result.Status=fail
   * or   result.SuccessMessage or result.ErrorMessage
   * and show the message to the user on the web page     
   * */
function ShowSuccessMessage(result){
 if(result.Status==="success"){
        //on result.Status==succcess 
        $('#resultModal').modal();
        $('#modalbodycontent').html("<p><strong>add details "+result.Status+"</strong></p><p>"+result.SuccessMessage+"</p>");
        //hide success message modal after 2 seconds
        setTimeout(function(){$('#resultModal').modal('hide');}, 2000);
        //refresh the page after 2 seconds to show the newly updated data on the table
        setTimeout(function(){location.reload(true);}, 2000);
  }else{
        //on result.Status==fail
        $('#resultModal').modal();
        $('#modalbodycontent').html("<p><strong>add details "+result.Status+"</strong></p><p>"+result.ErrorMessage+"</p>");
        //hide fail message modal after 2 seconds
        setTimeout(function(){$('#resultModal').modal('hide');}, 2000);
        //refresh the page after 6 seconds to show the newly updated data on the table
        //setTimeout(function(){location.reload(true);}, 4000);
  }         
}/* ..................................ShowSuccessMessage ends function here................................. */
/* function to show message after user deleting one of his/her attribute on the table*/
function ShowDeleteAttributeMessage(result){
 if(result.Status==="success"){
        //on result.Status==succcess 
        $('#resultModal').modal();
        $('#modalbodycontent').html("<p><strong>delete "+result.Status+"</strong></p><p>"+result.SuccessMessage+"</p>");
        //hide success message modal after 2 seconds
        setTimeout(function(){$('#resultModal').modal('hide');}, 2000);
        //refresh the page after 2 seconds to reload data on the table
        setTimeout(function(){location.reload(true);}, 2000);
  }else{
        //on result.Status==fail
        $('#resultModal').modal();
        $('#modalbodycontent').html("<p><strong>delete "+result.Status+"</strong></p><p>"+result.ErrorMessage+"</p>");
        //hide fail message modal after 2 seconds
        setTimeout(function(){$('#resultModal').modal('hide');}, 2000);
    }         
}/* ..................................ShowDeleteAttributeMessage ends function here................................. */


/*Function to show error message on error*/
/*function to show Error result*/
  /* this function will be called when there is no response from API webserver
   * e.g. when the API web server is down or there is no internet connection between
   * this website web server and API server so there is no response from the server 
   * then the error jquery function will be triggered and this function will be called
   * to show message to the user on the web page   
   * */
function ShowErrorResult(jqXHR, textStatus){
    console.log("Something really bad happened " + textStatus);//for testing
    $('#resultModal').modal();
    $("#modalbodycontent").html(jqXHR.responseText);  
    //hide result modal after showing to the user for 8 seconds
    setTimeout(function(){$('#resultModal').modal('hide');}, 8000);
}/* ................................ ShowErrorResult ends function here.............................. */    

/*function to set user's roles as radio button selections on deleterole Modal*/
function SetRoleOnDeleteModal(role){
    var check = Checker(role);
    //true then user's has multiple roles
    var temp="<p>Select which role to delete</p>";
    if(check){
       var resultarray = Splitter(role);//split the roles into array
       var arraylength = resultarray.length;
       for(var i=0;i<arraylength;i++){  
          temp = temp +"<label class=radio-inline>"+"<input type=radio name=role value="+resultarray[i]+">"+resultarray[i]+"</label>";
        }   
    }else{ //otherwise user's has single role
        temp = "<label class=radio-inline>"+"<input type=radio name=role value="+role+">"+role+"</label>";
    }
    return temp;
}/* ..........................ends SetRoleOnDeleteModal function here .............................. */

/*function to split a string into an array and uses comma as delimiter*/
function Splitter(stringtosplit){
 var resultarray = stringtosplit.split(",");
 return resultarray;
}/*................. ends splitter function here.....................................................*/

/*function to check whether a string contains comma or not*/
function Checker(stringtocheck){
 var result = stringtocheck.includes(",");
 return result;
}/*.................................ends Checker function here........................................*/
          
    




}); /* ................................. on document ready function ends here.....................*/
                    





