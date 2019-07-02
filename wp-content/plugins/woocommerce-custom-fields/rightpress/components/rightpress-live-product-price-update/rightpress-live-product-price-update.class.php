<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Version Control
 *
 * WARNING: Make sure to update version number here as well as in the main class name
 */
$version = '22';

global $rightpress_live_product_price_update_version;

if (!$rightpress_live_product_price_update_version || $rightpress_live_product_price_update_version < $version) {
    $rightpress_live_product_price_update_version = $version;
}

/**
 * Proxy Class
 */
if (!class_exists('RightPress_Live_Product_Price_Update')) {

final class RightPress_Live_Product_Price_Update
{

    /**
     * Initialize Live Product Price Update functionality
     *
     * @access public
     * @return void
     */
    public static function init()
    {
        // Get latest version of the main class
        global $rightpress_live_product_price_update_version;

        // Get main class name
        $class_name = 'RightPress_Live_Product_Price_Update_' . $rightpress_live_product_price_update_version;

        // Initialize main class
        $class_name::get_instance();
    }
}

// Initialize later after all plugins register their own version
add_action('wp_loaded', array('RightPress_Live_Product_Price_Update', 'init'));

}
    


/**
 * Main Class
 */
if (!class_exists('RightPress_Live_Product_Price_Update_22')) {

final class RightPress_Live_Product_Price_Update_22
{

    // Singleton instance
    protected static $instance = false;

    /**
     * Singleton control
     */
    public static function get_instance()
    {
        if (!self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Constructor class
     *
     * @access public
     * @return void
     */
    public function __construct()
    {
        // Get version number
        global $rightpress_live_product_price_update_version;

        // Environment variables
        $this->version  = $rightpress_live_product_price_update_version;
        $this->path     = trailingslashit(dirname(__FILE__));
        $this->url      = plugins_url('', __FILE__);

        // Print container
        add_action('woocommerce_before_add_to_cart_button', array($this, 'print_container'), 99);

        // Listen for Ajax calls
     //   add_action('wp_ajax_rightpress_live_product_price_update', array($this, 'update_price'));
    //    add_action('wp_ajax_nopriv_rightpress_live_product_price_update', array($this, 'update_price'));
    //   add_action('woocommerce_before_calculate_totals', array($this, 'coode_custom_price_to_cart_item'), 99 );
    //   add_action('woocommerce_coode_show_subtotal', array($this, 'coode_custom_price_preview'), 60);
    }

    /**
     * Print container
     *
     * @access public
     * @return void
     */
    public function print_container()
    {
        // Only proceed if at least one plugin has registered a filter callback by now
        if (has_filter('rightpress_live_product_price_update')) {

            // Print container
            echo '<dl class="rightpress_live_product_price" style="display: none;"><dt><span class="label"></span></dt><dd><span class="price"></span></dd></dl>';

            // Enqueue assets
            $this->enqueue_assets();
        }
    }

    /**
     * Enqueue assets
     *
     * @access public
     * @return void
     */
    public function enqueue_assets()
    {
        // Enqueue jQuery plugins
        RightPress_Helper::enqueue_jquery_plugins(array('rightpress-helper', 'rightpress-live-product-update'));

        // Enqueue styles
        RightPress_Helper::enqueue_or_inject_stylesheet('rightpress-live-product-price-update-styles', $this->url . '/assets/styles.css', $this->version);

        // Enqueue scripts
        wp_enqueue_script('rightpress-live-product-price-update-scripts', $this->url . '/assets/scripts.js', array('jquery'), $this->version);

        // Pass variables
        wp_localize_script('rightpress-live-product-price-update-scripts', 'rightpress_live_product_price_update_vars', array(
            'ajaxurl' => admin_url('admin-ajax.php?rightpress_ajax=1'),
        ));
    }

    /**
     * Update price
     *
     * @access public
     * @return void
     */
    
    public function coode_db(){
        $database = [];
        $database[] = [ 'cat' => 'Wide Format', 
                        'title' => 'banners', 
                        'sides' => '1',
                        'material'=>'13OZ Vynil',
                        'finish'=>'Matte',
                        '25'=>'6',
                        '50'=>'5',
                        '100'=>'4',
                        '150'=>'3',
                        '200'=>'2.75',
                      ];

        $database[] = [ 'cat' => 'Wide Format', 
                        'title' => 'banners', 
                        'sides' => '1',
                        'material'=>'13OZ Vynil',
                        'finish'=>'Gloss',
                        '25'=>'7',
                        '50'=>'6.5',
                        '100'=>'5',
                        '150'=>'4',
                        '200'=>'3.50',
                      ];
        
        return $database;
            
    }
    
    public function coode_filter_rule_size($element){
        $db = $this->coode_db();
        $keys = ['title', 'sides', 'material', 'finish'];
        $MAX = 0;
        $best_rule = null;
        $console = [];
;
        for($index=0; $index<count($db); $index++){
            $counter = 0;
            $rule = $db[$index];

            for($i=0; $i<count($keys); $i++){
                $key = $keys[$i];
                $counter = ( $element[$key] == $rule[$key] ) ? $counter + 1 : $counter;
            }
            
            if ($counter>$MAX){
                $MAX = $counter;
                $best_rule = $rule;
            }
        }

        return $best_rule;
    }
    
    public function coode_rules_prices($element){
        $rule = $this->coode_filter_rule_size($element);
        $reference = $element['quantity'] * $element['size'];
        $multiplicator = 1;
        
        if ($reference < 50)
            $multiplicator = $rule['25'];
        
        if ($reference < 100)
            $multiplicator = $rule['50'];
        
        if ($reference < 150)
            $multiplicator = $rule['100'];

        if ($reference < 200)
            $multiplicator = $rule['150'];
        else
            $multiplicator = $rule['200'];
    
        return $multiplicator * $element['base_price'];
        
    }
    
    public function coode_parse_element($data, $parsed){
        $data['quantity']      = $parsed['attribute_quantity'];
        $data['size']          = explode(' ', $parsed['attribute_size'])[0];
        $data['material']      = $parsed['attribute_material'];
        $data['grommets']      = $parsed['attribute_grommets'];
        $data['hemming']       = $parsed['attribute_hemming'];
        $data['pole-pocket']   = $parsed['attribute_pole-pocket'];
        $data['printing-time'] = $parsed['attribute_printing-time'];
        $data['finish']        = $parsed['attribute_finish'];
        return $data;
    }
    
    public function coode_custom_price_preview($cart_object){
            $result = 0;
         if( !WC()->session->__isset( "reload_checkout" )) {
            foreach ( $cart_object->cart_contents as $key => $value ) {
                //for woocommerce version lower than 3
                //$value['data']->price = $value["custom_price"];
                //for woocommerce version +3

                $metadata = $value;
                $product_id = $metadata['product_id'];

                $product = wc_get_product($product_id);

                // Unable to load product
                if (!$product) 
                     echo json_encode(array(
                        'result'    => 'error',
                        'message'   => 'Unable to load product.',
                    ));

                $data = $this->coode_parse_element([], $metadata['variation']);
                $data['title']         = strtolower($product->get_title());
                $data['base_price']    = $product->get_price();
                
                $result = $result + $this->coode_rules_prices($data);
            }
        }
        echo '<strong>$'.$result.'</strong>';
    }
    
    public function coode_custom_price_to_cart_item( $cart_object ) {
        
            //product = wc_get_product($object_id);
        if( !WC()->session->__isset( "reload_checkout" )) {
            foreach ( $cart_object->cart_contents as $key => $value ) {
                //for woocommerce version lower than 3
                //$value['data']->price = $value["custom_price"];
                //for woocommerce version +3

                $metadata = $value;
                $product_id = $metadata['product_id'];

                $product = wc_get_product($product_id);

                // Unable to load product
                if (!$product) 
                     echo json_encode(array(
                        'result'    => 'error',
                        'message'   => 'Unable to load product.',
                    ));

                $data = $this->coode_parse_element([], $metadata['variation']);
                $data['title']         = strtolower($product->get_title());
                $data['base_price']    = $product->get_price();
                        
                $newPrice = $this->coode_rules_prices($data);
                $value['data']->set_price($newPrice);
            }
        }            
  
    }  

    public function update_price(){
        try {

            // Allow plugins to extract their own data from request
            // NOTE DEVELOPERS: The filter below is for internal use only!
            $custom_keys = apply_filters('rightpress_live_product_price_update_custom_keys', array('rightpress_complete_input_list'));

            // Get request data
            $data = RightPress_Helper::get_product_page_ajax_request_data($custom_keys);
        
            // Load product object
            $object_id = !empty($data['variation_id']) ? $data['variation_id'] : $data['product_id'];
            $product = wc_get_product($object_id);

            // Unable to load product
            if (!$product) {
                throw new Exception('Unable to load product.');
            }
            
            //arranca el laion

            parse_str(urldecode($_POST['data']), $parsed);
            $data = $this->coode_parse_element($data, $parsed);
            $data['title']         = strtolower($product->get_title());
            $data['base_price']    = $product->get_price();
            
            
            
            
            $coode_result = [
                'label_html'    => $this->coode_rules_prices($data),
                'result'        => 'success',
                'display'       => true,
                'product_name'  => strtolower($product->get_title()),
            ];
            
            echo json_encode( $coode_result );
            wp_die();
            
            //termina el laion
            
            
            // Unable to determine variation for variable product
            if (RightPress_WC_Legacy::product_get_type($product) === 'variable') {
                throw new Exception('Unable to determine product variation.');
            }

            // Define data structure
            $price_data = array(
                'price'     => null,
                'label'     => null,
                'changeset' => array()
            );

            // Allow all plugins to do their own product price adjustments
            // NOTE DEVELOPERS: The filter below is for internal use only!
            $price_data = apply_filters('rightpress_live_product_price_update', $price_data, $product, $data['quantity'], $data['variation_attributes'], $data);

            // No data was provided
            if ($price_data['price'] === null) {

                // Send success response
                echo json_encode(array(
                    'result'    => 'success',
                    'display'   => 0,
                ));
            }
            // Data was provided
            else {

                // Tax adjustment
		if (get_option('woocommerce_tax_display_shop') === 'excl') {
                    $price = RightPress_WC_Legacy::product_get_price_excluding_tax($product, 1, $price_data['price']);
		}
                else {
                    $price = RightPress_WC_Legacy::product_get_price_including_tax($product, 1, $price_data['price']);
		}

                // Format label
                $label_html = apply_filters('rightpress_live_product_price_update_label_html', (string) $price_data['label']);

                // Format display price
                $price_html = apply_filters('rightpress_live_product_price_update_price_html', wc_price($price), $price, $price_data['label'], $data['product_id'], $data['variation_id'], $data['variation_attributes'], $data['quantity']);

                // Send success response
                echo json_encode(array(
                    'result'        => 'success',
                    'display'       => 1,
                    'price'         => $price,
                    'price_html'    => $price_html,
                    'label_html'    => $label_html,
                    'extra_data'    => apply_filters('rightpress_live_product_price_update_extra_data', array()),
                ));
            }

        } catch (Exception $e) {

            // Send error response
            echo json_encode(array(
                'result'    => 'error',
                'message'   => $e->getMessage(),
            ));
        }

        exit;
    }





}
}
