<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

// END ENQUEUE PARENT ACTION


function custom_my_account_menu_items( $items ) {
    unset($items['downloads']);
    return $items;
}
add_filter( 'woocommerce_account_menu_items', 'custom_my_account_menu_items' );



remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 10 );



add_action( 'woocommerce_before_add_to_cart_button', 'add_content_after_addtocart_button_func' );
/*
 * Content below "Add to cart" Button.
 */
function add_content_after_addtocart_button_func() {
global $product;
echo '<div class="price-wrapper" style="text-align: right;"><p class="price product-page-price ">';
        echo $product->get_price_html();
echo "</p></div>";
}


