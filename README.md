# adfsfederationPHPweb
Claims-aware PHP web application which uses WS-Federation protocol to communicate with ADFS 3.0 server (Windows Server 2012 R2) for user authentication.The core functionalities of the application are; users can make self-registration or create account in Active Directory via web interface and connect to Active Directory Federation Server (ADFS) configured and authenticate with Active Directory Account. On successful authentication the Application will receive Claims(e.g.username,name,and role) from the ADFS Server and decides which pages can be accessed by each user based user's role in the claims(roles:doctor or patient).This application uses Java Servlet API(https://github.com/xfitu/WebAPI) for creating new user account, add, delete, and update user's attributes in Active Directory(AD DS) server and uses WS-Federation library(https://github.com/schakra/Active-Directory-Sample-for-PHP-Developers) to communicate with Active Directory Federation Services (AD FS) server.
 
 
 INSTALLATION
------------
Prerequisites:
 1) PHP 5.2 enabled or above with OpenSSL.
 2) Web Server (IIS/Apache etc. which has enabled running PHP applications)
 3) Access to an ADFS 3.0 server that can have Relying party trust configured for this site.

Installation Instructions:
1) Download and unzip Active Directory sample to a local directory (Eg: c:\www\AdfsSample)
2) Configure a website pointing to the above local directory (Eg: https://localhost/Adfsweb/, where localhost is the domain on which the site is configured). Webserver should be configured with to default index page “index.php” for this site.
3) After configuring the website, browse to the URL to see home page of the sample.
4) Active Directory Sample application configuration is driven by a adfsconf.php located in the <InstallationBaseDir>\Conf\Php (Eg: In above example case c:\www\Adfsweb\conf\adfsconf.php) .
 
The following parameters should be configured:
 
 a) Adfs Endpoint URL - Endpoint URL of ADFS service.
 
 b) Realm/spIdentifier - Realm configured in ADFS Relying party configuration.
 
 c) Encryption certificate and password - Path to the certificate file and password (optional).


A sample configuration file without certificate contifgured is shown below

 public $adfsUrl = 'https://adfs.healthportal.local/adfs/ls/';    
 public $spIdentifier = 'https://localhost/adfsweb/authhandler.php';    
 public $encryptionCertPath = '';
 public $encryptionCertPassword = '';   

NOTE: must bind the web application to SSL or HTTPS before configuring it with ADFS server, it is required. 

ADFS 3.0 CONFIGURATION (On Windows Server 2012 R2)
-----------------------------------------------
1) Open the ADFS 3.0 Manager
2) Right click Relying Party Trust and select Add Relying Party Trust
3) Start the Wizard:

	a. Select Data Source: Select Manual Configuration
	
	b. Specify Display Name: Enter an identity for your Drupal site (same as
           6.b under Installation)
	   
	c. Choose Profile: Select SAML 2.0
	
	d. Configure Certificate: Only set this if you want Encrypted responses (as
       	    in 6.d under Installation)
       
	e. Configure URL: Select WS-Federation Passive and enter the path to the
       	   Active Directory Sample entry point: <https://localhost/adfsweb>/authhandler.php
	   
	f. Configure Identifier: Add the identity form 6.b under Installation
	
	g. Choose Issuance Authorization Rules: This setting is determined by the
           system administrator, use Permit All to allow any user access to the
           site, otherwise configure access individually
	   
	h. Ready to Add Trust: Close the Wizard and continue with Claims
	
	i. Configure Claims:  This may vary based on configuration and determines
           the values for 6.e under Installation.
	   
        - A sample configuration with mandatory claim "Name ID" is as below
             - Use LDAP Attributes
             - Name the claim: Default
             - Attribute Store: Active Directory
             - LDAP: SAM-Account-Name    Outgoing: Name ID
             - LDAP: Display Name    Outgoing: Name 
             - Send Group Membership(two different groups: doctor or patient)as claims  Outgoing: role


USAGE
-----
1) Open Browser navigate to ADFS sample (Eg: In our case https://localhost/Adfsweb/) index page will be displayed.
2) Click on login button on index page
3) You will be redirected to ADFS server login page
3) Enter valid Active directory user credentials and click signin
4) ADFS server will redirect to Active Directory adfsweb application with security token(ST) which contains claims about the        	    authenticated user 


IMPLEMENTATION DETAILS
----------------------
Implementation of ADFS PHP web application is divided into 7 different parts which are as follows
 1) ADFS Bridge
 2) index Page 
 3) doctor Page
 4) patient page
 5) signup Page
 6) forgepassword Page
 7) profile Page
Each of the these are described below

ADFS Bridge:
ADFS Bridge implements method for WS-Federation passive redirection to ADFS server for authentication and method to processing the incoming response from ADFS server to process the claims. ADFS Bridge is implemented in the file adfsbridge.php.  ADFS Bridge is driven by the configuration adfsconf.php. ADFS Server makes a callback to authhandler.php, Authhandler.php uses ADFS  Bridge method to process the claims and then store them in session. 

index Page:
index Page is the initial home page for this website. It has a login button which implements on click behavior to redirect to the configured ADFS Server for authentication. index Page uses ADFS Bridge method to redirect to ADFS Server for sign in. index Page is implemented in index.php,index_header.php and authform.php files in the adfsweb application. The index Page receives security token after user successfully sign in and makes redirection based on the value of role claim( either doctor or patient).

doctor Page:
doctor Page is the page for the user whose role is doctor. doctor Page is implemented in doctor.php,doctor_header.php and authform.php files in the adfsweb application.

patient Page:
patient Page is the page for the user whose role is patient. patient Page is implemented in patient.php,patient_header.php and authform.php files in the adfsweb application.

signup Page:
signup Page is the page for the new user to create account in Active Directory. signup Page is implemented in signup.php file in the adfsweb application.

forgetpassword Page:
signup Page is the page for the new user who forgets his/her account password. forgetpassword Page is implemented in forgetpassword.php file in the adfsweb application.

profile Page:
profile Page is the page for the user to update and delete his/her detail attributes in Active Directory. profile Page is implemented in profile.php,profile_header.php and authform.php files in the adfsweb application.


