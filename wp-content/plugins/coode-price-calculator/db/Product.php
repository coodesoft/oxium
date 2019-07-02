<?php

class Product{

  const TABLE = 'coode_pc_product';
    
  static function table(){
     global $wpdb;
      return $wpdb->prefix . self::TABLE;
  }
    
  static function getById($id){
    global $wpdb;

    $queryStr = 'SELECT * FROM '. self::table() .' WHERE product_id=%d';
    $query = $wpdb->prepare($queryStr, array($id));
      
    return $wpdb->get_results($query, ARRAY_A);
  }    
}

?>