<?php

/**
 * Adfs Configuration.
 */
class AdfsConf {
    
    public $adfsUrl = 'https://adfs.healthportal.local/adfs/ls/IdpInitiatedSignon.aspx';
    
    public $spIdentifier = 'https://localhost/adfsweb/authhandler.php';
       
    /**
     * Content of the PEM certificate. If this certificate is protected by
     * password, you need to set encryptionCertPassword correctly.
     * 
     * If you provide certificate data, then it will ignore any value
     * configured for certificate path. 
     */
    public $encryptionCertData = '';
    
    /**
     *
     */
    public $encryptionCertPath = '';
    
    public $encryptionCertPassword = '';   
    
    protected static $_instance = NULL;

    /**
     * Prevent direct object creation
     */
    final private function  __construct() { }

    /**
     * Prevent object cloning
     */
    final private function  __clone() { }

    /**
     * Returns new or existing Singleton instance
     * @return Singleton
     */
    final public static function getInstance(){
        if(null !== self::$_instance){
            return self::$_instance;
        }
        self::$_instance = new AdfsConf();
        return self::$_instance;
    }
}
?>
