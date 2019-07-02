<?php

require_once 'AbstractFilter.php';

class FilterQty extends AbstractFilter{

    public function __construct(){
        $this->source = 'coode_pc_filterQty';
    }
    
    public function mapProperty($value){
        if ($value <=250)
            return 'a250';

        if ($value <=500)
            return 'a500';

        if ($value <=1000)
            return 'a1000';

        if ($value <=1500)
            return 'a1500';

        if ($value <=2000)
            return 'a2000';

        if ($value <=2500)
            return 'a2500';

        if ($value <=3000)
            return 'a3000';

        if ($value <=4000)
            return 'a';

        if ($value <=5000)
            return 'a5000';

        if ($value <=6000)
            return 'a6000';

        if ($value <=7000)
            return 'a7000';

        if ($value <=10000)
            return 'a10000';

        if ($value <=15000)
            return 'a15000';

        if ($value <=20000)
            return 'a20000';

        return 'a25000';
        
    
    }
    
    public function getPrice($product, $data){
        
         if (!isset($data['attribute_quantity']) || $data['attribute_quantity'] == null)
            return 0;
        
        $property = $this->mapProperty($data['attribute_quantity']);
        $filtredPrice = substr($product[$property], 1);

        return $filtredPrice;
    } 
}
?>