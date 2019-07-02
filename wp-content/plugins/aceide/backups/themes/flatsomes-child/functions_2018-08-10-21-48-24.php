<?php /* start AceIDE restore code */
if ( $_POST["restorewpnonce"] === "293c447af9d1b39fd0f4f6ba171272535bef002b22" ) {
if ( file_put_contents ( "/home1/oxiumusa/public_html/oxiumprint/wp-content/themes/flatsomes-child/functions.php" ,  preg_replace( "#<\?php /\* start AceIDE restore code(.*)end AceIDE restore code \* \?>/#s", "", file_get_contents( "/home1/oxiumusa/public_html/oxiumprint/wp-content/plugins/aceide/backups/themes/flatsomes-child/functions_2018-08-10-21-48-24.php" ) ) ) ) {
	echo __( "Your file has been restored, overwritting the recently edited file! \n\n The active editor still contains the broken or unwanted code. If you no longer need that content then close the tab and start fresh with the restored file." );
}
} else {
echo "-1";
}
die();
/* end AceIDE restore code */ ?><?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

// END ENQUEUE PARENT ACTION
