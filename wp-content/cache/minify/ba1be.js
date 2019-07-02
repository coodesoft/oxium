jQuery(function($){if(typeof wc_add_to_cart_params==='undefined'){return false;}
var AddToCartHandler=function(){$(document.body).on('click','.add_to_cart_button',this.onAddToCart).on('click','.remove_from_cart_button',this.onRemoveFromCart).on('added_to_cart',this.updateButton).on('added_to_cart',this.updateCartPage).on('added_to_cart removed_from_cart',this.updateFragments);};AddToCartHandler.prototype.onAddToCart=function(e){var $thisbutton=$(this);if($thisbutton.is('.ajax_add_to_cart')){if(!$thisbutton.attr('data-product_id')){return true;}
e.preventDefault();$thisbutton.removeClass('added');$thisbutton.addClass('loading');var data={};$.each($thisbutton.data(),function(key,value){data[key]=value;});$(document.body).trigger('adding_to_cart',[$thisbutton,data]);$.post(wc_add_to_cart_params.wc_ajax_url.toString().replace('%%endpoint%%','add_to_cart'),data,function(response){if(!response){return;}
if(response.error&&response.product_url){window.location=response.product_url;return;}
if(wc_add_to_cart_params.cart_redirect_after_add==='yes'){window.location=wc_add_to_cart_params.cart_url;return;}
$(document.body).trigger('added_to_cart',[response.fragments,response.cart_hash,$thisbutton]);});}};AddToCartHandler.prototype.onRemoveFromCart=function(e){var $thisbutton=$(this),$row=$thisbutton.closest('.woocommerce-mini-cart-item');e.preventDefault();$row.block({message:null,overlayCSS:{opacity:0.6}});$.post(wc_add_to_cart_params.wc_ajax_url.toString().replace('%%endpoint%%','remove_from_cart'),{cart_item_key:$thisbutton.data('cart_item_key')},function(response){if(!response||!response.fragments){window.location=$thisbutton.attr('href');return;}
$(document.body).trigger('removed_from_cart',[response.fragments,response.cart_hash]);}).fail(function(){window.location=$thisbutton.attr('href');return;});};AddToCartHandler.prototype.updateButton=function(e,fragments,cart_hash,$button){$button=typeof $button==='undefined'?false:$button;if($button){$button.removeClass('loading');$button.addClass('added');if(!wc_add_to_cart_params.is_cart&&$button.parent().find('.added_to_cart').length===0){$button.after(' <a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+
wc_add_to_cart_params.i18n_view_cart+'">'+wc_add_to_cart_params.i18n_view_cart+'</a>');}
$(document.body).trigger('wc_cart_button_updated',[$button]);}};AddToCartHandler.prototype.updateCartPage=function(){var page=window.location.toString().replace('add-to-cart','added-to-cart');$('.shop_table.cart').load(page+' .shop_table.cart:eq(0) > *',function(){$('.shop_table.cart').stop(true).css('opacity','1').unblock();$(document.body).trigger('cart_page_refreshed');});$('.cart_totals').load(page+' .cart_totals:eq(0) > *',function(){$('.cart_totals').stop(true).css('opacity','1').unblock();$(document.body).trigger('cart_totals_refreshed');});};AddToCartHandler.prototype.updateFragments=function(e,fragments){if(fragments){$.each(fragments,function(key){$(key).addClass('updating').fadeTo('400','0.6').block({message:null,overlayCSS:{opacity:0.6}});});$.each(fragments,function(key,value){$(key).replaceWith(value);$(key).stop(true).css('opacity','1').unblock();});$(document.body).trigger('wc_fragments_loaded');}};new AddToCartHandler();});;
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function(factory){var registeredInModuleLoader=false;if(typeof define==='function'&&define.amd){define(factory);registeredInModuleLoader=true;}
if(typeof exports==='object'){module.exports=factory();registeredInModuleLoader=true;}
if(!registeredInModuleLoader){var OldCookies=window.Cookies;var api=window.Cookies=factory();api.noConflict=function(){window.Cookies=OldCookies;return api;};}}(function(){function extend(){var i=0;var result={};for(;i<arguments.length;i++){var attributes=arguments[i];for(var key in attributes){result[key]=attributes[key];}}
return result;}
function init(converter){function api(key,value,attributes){var result;if(typeof document==='undefined'){return;}
if(arguments.length>1){attributes=extend({path:'/'},api.defaults,attributes);if(typeof attributes.expires==='number'){var expires=new Date();expires.setMilliseconds(expires.getMilliseconds()+attributes.expires*864e+5);attributes.expires=expires;}
attributes.expires=attributes.expires?attributes.expires.toUTCString():'';try{result=JSON.stringify(value);if(/^[\{\[]/.test(result)){value=result;}}catch(e){}
if(!converter.write){value=encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent);}else{value=converter.write(value,key);}
key=encodeURIComponent(String(key));key=key.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);key=key.replace(/[\(\)]/g,escape);var stringifiedAttributes='';for(var attributeName in attributes){if(!attributes[attributeName]){continue;}
stringifiedAttributes+='; '+attributeName;if(attributes[attributeName]===true){continue;}
stringifiedAttributes+='='+attributes[attributeName];}
return(document.cookie=key+'='+value+stringifiedAttributes);}
if(!key){result={};}
var cookies=document.cookie?document.cookie.split('; '):[];var rdecode=/(%[0-9A-Z]{2})+/g;var i=0;for(;i<cookies.length;i++){var parts=cookies[i].split('=');var cookie=parts.slice(1).join('=');if(cookie.charAt(0)==='"'){cookie=cookie.slice(1,-1);}
try{var name=parts[0].replace(rdecode,decodeURIComponent);cookie=converter.read?converter.read(cookie,name):converter(cookie,name)||cookie.replace(rdecode,decodeURIComponent);if(this.json){try{cookie=JSON.parse(cookie);}catch(e){}}
if(key===name){result=cookie;break;}
if(!key){result[name]=cookie;}}catch(e){}}
return result;}
api.set=api;api.get=function(key){return api.call(api,key);};api.getJSON=function(){return api.apply({json:true},[].slice.call(arguments));};api.defaults={};api.remove=function(key,attributes){api(key,'',extend(attributes,{expires:-1}));};api.withConverter=init;return api;}
return init(function(){});}));