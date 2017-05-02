# adfsfederationPHPweb
Claims-aware PHP web application which using WS-Federation to communicate with ADFS 3.0 server (Windows Server 2012 R2) for user authentication, Single Sign On, and Single Log Out.This application can be deployed into Apache webserver.The core functionalities of the application are; users can make self-registration or create account in Active Directory via web interface and connect to Active Directory Federation Server (ADFS) configured and authenticate with Active Directory Account. On successful authentication the Application will receive Claims(username,name,and role) from the ADFS Server and decides which pages can be accessed by each user based user's role in the claims(two different roles:doctor or patient).This application uses Java Servlet API(https://github.com/xfitu/WebAPI) which make LDAPS connection with Active Directory(AD DS) server and uses WS-Federation library(https://github.com/schakra/Active-Directory-Sample-for-PHP-Developers) to connect with Active Directory Federation Services (AD FS) server.
 
The following parameters should be configured 
 a) Adfs Endpoint URL - Endpoint URL of ADFS service.
 b) Realm/spIdentifier - Realm configured in ADFS Relying party configuration.
 c) Encryption certificate and password - Path to the certificate file and password.

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
       Active Directory Sample entry point: <Active-Directory-Site-URL>/authhandler.php
    f. Configure Identifier: Add the identity form 6.b under Installation
    g. Choose Issuance Authorization Rules: This setting is determined by the
       system administrator, use Permit All to allow any user access to the
       Drupal site, otherwise configure access individually
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

