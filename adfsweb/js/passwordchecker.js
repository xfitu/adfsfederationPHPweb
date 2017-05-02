/* Javascript function to check password validity
 * password must be at least 8 characters
 * password must contain lowercase character
 * password mst contain uppercase character
 * password must contain special characters like !@$%^&*(){}[]+-
 * */
function CheckPassword(password){
var upperCase= new RegExp('[A-Z]');
var lowerCase= new RegExp('[a-z]');
var numbers = new RegExp('[0-9]');
var passwordlength = password.lenght;
var specialcharacter = new RegExp('[!@#$%^&*()-+=,.?/<>{}]');
var result;
if(passwordlength>=8 && password.match(specialcharacter) && password.match(upperCase) && password.match(lowerCase)&& password.match(numbers) &&password.lenght>=6 && $(this).val()<=20)  
{
  result=true;

}else{
  result=false;  
}   
    
}/*.........................ends function here...................*/
