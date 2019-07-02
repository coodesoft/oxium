<?php
// Before removing this file, please verify the PHP ini setting `auto_prepend_file` does not point to this.

if (file_exists('/home1/oxiumusa/public_html/oxiumprint/wp-content/plugins/wordfence/waf/bootstrap.php')) {
	define("WFWAF_LOG_PATH", '/home1/oxiumusa/public_html/oxiumprint/wp-content/wflogs/');
	include_once '/home1/oxiumusa/public_html/oxiumprint/wp-content/plugins/wordfence/waf/bootstrap.php';
}
?>