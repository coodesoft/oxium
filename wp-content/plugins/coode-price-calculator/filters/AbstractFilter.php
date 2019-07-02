<?php 


abstract class AbstractFilter{
    
    public $source;
    
    public abstract function getPrice($product, $data);
    
    public abstract function mapProperty($value);
}

?>