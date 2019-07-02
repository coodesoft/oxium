<?php

class Filter{

    
  static function get($table, $id){
    global $wpdb;

    $table  = trim($table, ' ');

    if (!strpos($table, 'filter'))
        throw new Exception('SQL Injection attack detected. name changed! '. $table, 1);
      
      
    $table = $wpdb->prefix . $table;
    $queryStr = 'SELECT * FROM '. $table .' WHERE id=%d';
    $query = $wpdb->prepare($queryStr, array($id));
      
    return $wpdb->get_results($query, ARRAY_A);
  }    
}
?>