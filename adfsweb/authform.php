<?php 
/**
 * 
 * Reference:
 * https://github.com/schakra/Active-Directory-Sample-for-PHP-Developers
 */
 ?>
<? ob_start(); ?>
<?php
    if(!isset($_SESSION)) {
        session_start();
    }
    include_once("PHPadfsfederation/classes/adfsbridge.php");
    include_once("PHPadfsfederation/classes/adfsuserdetails.php");
    include_once("PHPadfsfederation/conf/adfsconf.php");
?>

<?php if(!isset($_REQUEST['authaction'])) : ?>
    <?php if(!isset($_SESSION['AdfsUserDetails'])) : ?>
       
        <form action="authform.php" method="post" name="login" id="form-login">
            
                <input type="submit" name="Submit" class="btn btn-link" id="loginbutton" value="Log in" />
                    
             <input type="hidden" name="authaction" value="Login" />
                
        </form>
       
    <?php else : ?>
       
        <form action="authform.php" method="post" name="logout" id="form-logout">
            
                        <input type="submit" name="Submit" class="btn btn-link" id="logoutbutton" value="Log out" />
                    
                    <input type="hidden" name="authaction" value="Logout" />
              
        </form>
    <?php endif; ?>
<?php else : ?>
    <?php if($_REQUEST['authaction'] == 'Login') : ?>
        <?php 
            // Redirect to ADFS for Sign In.
            $adfs = new AdfsBridge();
            $adfs->redirectToAdfsSignInUrl(AdfsConf::getInstance(), 'index.php');
        ?>
    <?php endif; ?>
    <?php if($_REQUEST['authaction'] == 'Logout') : ?>
        <?php
            // Clear session and redirect to home page.
            unset($_SESSION['AdfsUserDetails']);
           
            header('Location: index.php');
            //we add this one
            $adfs = new AdfsBridge ();
            $adfs->redirectToAdfsSignOutUrl(AdfsConf::getInstance(), 'index.php');
            
        ?>
    <?php endif; ?>
<?php endif; ?>
<? ob_flush(); ?>