<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

define( 'WP_MEMORY_LIMIT', '128M' );

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'oxiumusa_wordpress3a4');

/** MySQL database username */
define('DB_USER', 'oxiumusa_word3a4');

/** MySQL database password */
define('DB_PASSWORD', 'Jx2yCSSOnhL0');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', ')VNc<s?i-gex$sCzQbJR&XK|;ELLALj}Fvz^^FJYA!}>*QeR^=_EA}pjb=A}EcobiZwF$nKH(JZZF>uFJ=@k|)ICVApmoRI_{raisql&w=>@mTFv_mIU!xfC[xSOQmoj');
define('SECURE_AUTH_KEY', 'De<a[|NHWS(x*rqPP|g;V!h+qnBB&LOqcTmVKcj/]V|?!jgOrJ+;C<lf&sihRDUUgruLs)izuTI@[mqQ)p?!fcBD/{JEb^oATO%l%vvbBNS}^!!&)Wh%IVegRvW_g[X$');
define('LOGGED_IN_KEY', 'ChXmBAcK_zod$PkcJ$;Otp;DvpR]s{)s>JeHk&$}hMe}lo@YHVnMYHZWL{WVkuVz_t[xkSi?wUpBOmMk%fFmDv;hx<l}tqeH{IrA>nSu{M_iTbx+MktRHDLC|+%]KN<*');
define('NONCE_KEY', '(jC$igvzyq)oF|wV*{^$R;H{![G+w%Pd*vcifgew+%Ogi|OahBS%snvLZWWzkmbDx<Djr]<oCzFxv<o[?}*w]f?|Oe]A<e]n|/;?NCOTxs*[Uo{{-!rQYAL/gn^A|]io');
define('AUTH_SALT', ';om+Nn$QK_>Ic}WKCrK!O*XbwWuNU$bmOgR(;kg$%tr+y-U*l&!Fcd%**fte@M{C|gZ&S;>*XxXcgQVl{@K=&/F!uVSHaG%x&?TDGujvL%XM|@XP{zaiZMXkHKTFJo(F');
define('SECURE_AUTH_SALT', 'RN(zqp(I>jf&)YpU_UfJl$*^Y{[HL!KTpD?h;P<uO+}dbOxgtM^zxSAE[YOqTute+Bdh]+{WW*Zu^T?sgs^GGQCcV>vg%O!xHHwBv(xut_(E!(Sy-ICqcJ+PbRpUc$Do');
define('LOGGED_IN_SALT', 'UuCCI]WFKFm_jG]f{DRo%VUhP*a*>{lV<E;C?|Wh/*hbAX^Z]*=INq%H}A-k[Wv}$)xB%)/_JKzeO&;&um$Zk[GXX)$uN@$n{$E!j!!*BBVF%s]]W?pG=Y%E>Stns|]/');
define('NONCE_SALT', '&[COMOUsDQBpK>mX[mo)/Q}fpmAYXXZIYPd={lH{<wXpv>)BF[loTorwW_vP}og_n&@S=i(QP|N@lA-nhDn{|B}Erx;jMl/u/E*Mj&A-PgkmEJbJtfy$(xn%y[MCun*)');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_hjda_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

/**
 * Include tweaks requested by hosting providers.  You can safely
 * remove either the file or comment out the lines below to get
 * to a vanilla state.
 
if (file_exists(ABSPATH . 'hosting_provider_filters.php')) {
	include('hosting_provider_filters.php');
} */
