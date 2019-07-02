;(function($,window,document,undefined){var VariationForm=function($form){var self=this;self.$form=$form;self.$attributeFields=$form.find('.variations select');self.$singleVariation=$form.find('.single_variation');self.$singleVariationWrap=$form.find('.single_variation_wrap');self.$resetVariations=$form.find('.reset_variations');self.$product=$form.closest('.product');self.variationData=$form.data('product_variations');self.useAjax=false===self.variationData;self.xhr=false;self.loading=true;self.$singleVariationWrap.show();self.$form.off('.wc-variation-form');self.getChosenAttributes=self.getChosenAttributes.bind(self);self.findMatchingVariations=self.findMatchingVariations.bind(self);self.isMatch=self.isMatch.bind(self);self.toggleResetLink=self.toggleResetLink.bind(self);$form.on('click.wc-variation-form','.reset_variations',{variationForm:self},self.onReset);$form.on('reload_product_variations',{variationForm:self},self.onReload);$form.on('hide_variation',{variationForm:self},self.onHide);$form.on('show_variation',{variationForm:self},self.onShow);$form.on('click','.single_add_to_cart_button',{variationForm:self},self.onAddToCart);$form.on('reset_data',{variationForm:self},self.onResetDisplayedVariation);$form.on('reset_image',{variationForm:self},self.onResetImage);$form.on('change.wc-variation-form','.variations select',{variationForm:self},self.onChange);$form.on('found_variation.wc-variation-form',{variationForm:self},self.onFoundVariation);$form.on('check_variations.wc-variation-form',{variationForm:self},self.onFindVariation);$form.on('update_variation_values.wc-variation-form',{variationForm:self},self.onUpdateAttributes);setTimeout(function(){$form.trigger('check_variations');$form.trigger('wc_variation_form');self.loading=false;},100);};VariationForm.prototype.onReset=function(event){event.preventDefault();event.data.variationForm.$attributeFields.val('').change();event.data.variationForm.$form.trigger('reset_data');};VariationForm.prototype.onReload=function(event){var form=event.data.variationForm;form.variationData=form.$form.data('product_variations');form.useAjax=false===form.variationData;form.$form.trigger('check_variations');};VariationForm.prototype.onHide=function(event){event.preventDefault();event.data.variationForm.$form.find('.single_add_to_cart_button').removeClass('wc-variation-is-unavailable').addClass('disabled wc-variation-selection-needed');event.data.variationForm.$form.find('.woocommerce-variation-add-to-cart').removeClass('woocommerce-variation-add-to-cart-enabled').addClass('woocommerce-variation-add-to-cart-disabled');};VariationForm.prototype.onShow=function(event,variation,purchasable){event.preventDefault();if(purchasable){event.data.variationForm.$form.find('.single_add_to_cart_button').removeClass('disabled wc-variation-selection-needed wc-variation-is-unavailable');event.data.variationForm.$form.find('.woocommerce-variation-add-to-cart').removeClass('woocommerce-variation-add-to-cart-disabled').addClass('woocommerce-variation-add-to-cart-enabled');}else{event.data.variationForm.$form.find('.single_add_to_cart_button').removeClass('wc-variation-selection-needed').addClass('disabled wc-variation-is-unavailable');event.data.variationForm.$form.find('.woocommerce-variation-add-to-cart').removeClass('woocommerce-variation-add-to-cart-enabled').addClass('woocommerce-variation-add-to-cart-disabled');}};VariationForm.prototype.onAddToCart=function(event){if($(this).is('.disabled')){event.preventDefault();if($(this).is('.wc-variation-is-unavailable')){window.alert(wc_add_to_cart_variation_params.i18n_unavailable_text);}else if($(this).is('.wc-variation-selection-needed')){window.alert(wc_add_to_cart_variation_params.i18n_make_a_selection_text);}}};VariationForm.prototype.onResetDisplayedVariation=function(event){var form=event.data.variationForm;form.$product.find('.product_meta').find('.sku').wc_reset_content();form.$product.find('.product_weight').wc_reset_content();form.$product.find('.product_dimensions').wc_reset_content();form.$form.trigger('reset_image');form.$singleVariation.slideUp(200).trigger('hide_variation');};VariationForm.prototype.onResetImage=function(event){event.data.variationForm.$form.wc_variations_image_update(false);};VariationForm.prototype.onFindVariation=function(event){var form=event.data.variationForm,attributes=form.getChosenAttributes(),currentAttributes=attributes.data;if(attributes.count===attributes.chosenCount){if(form.useAjax){if(form.xhr){form.xhr.abort();}
form.$form.block({message:null,overlayCSS:{background:'#fff',opacity:0.6}});currentAttributes.product_id=parseInt(form.$form.data('product_id'),10);currentAttributes.custom_data=form.$form.data('custom_data');form.xhr=$.ajax({url:wc_add_to_cart_variation_params.wc_ajax_url.toString().replace('%%endpoint%%','get_variation'),type:'POST',data:currentAttributes,success:function(variation){if(variation){form.$form.trigger('found_variation',[variation]);}else{form.$form.trigger('reset_data');attributes.chosenCount=0;if(!form.loading){form.$form.find('.single_variation').after('<p class="wc-no-matching-variations woocommerce-info">'+wc_add_to_cart_variation_params.i18n_no_matching_variations_text+'</p>');form.$form.find('.wc-no-matching-variations').slideDown(200);}}},complete:function(){form.$form.unblock();}});}else{form.$form.trigger('update_variation_values');var matching_variations=form.findMatchingVariations(form.variationData,currentAttributes),variation=matching_variations.shift();if(variation){form.$form.trigger('found_variation',[variation]);}else{form.$form.trigger('reset_data');attributes.chosenCount=0;if(!form.loading){form.$form.find('.single_variation').after('<p class="wc-no-matching-variations woocommerce-info">'+wc_add_to_cart_variation_params.i18n_no_matching_variations_text+'</p>');form.$form.find('.wc-no-matching-variations').slideDown(200);}}}}else{form.$form.trigger('update_variation_values');form.$form.trigger('reset_data');}
form.toggleResetLink(attributes.chosenCount>0);};VariationForm.prototype.onFoundVariation=function(event,variation){var form=event.data.variationForm,$sku=form.$product.find('.product_meta').find('.sku'),$weight=form.$product.find('.product_weight'),$dimensions=form.$product.find('.product_dimensions'),$qty=form.$singleVariationWrap.find('.quantity'),purchasable=true,variation_id='',template=false,$template_html='';if(variation.sku){$sku.wc_set_content(variation.sku);}else{$sku.wc_reset_content();}
if(variation.weight){$weight.wc_set_content(variation.weight_html);}else{$weight.wc_reset_content();}
if(variation.dimensions){$dimensions.wc_set_content(variation.dimensions_html);}else{$dimensions.wc_reset_content();}
form.$form.wc_variations_image_update(variation);if(!variation.variation_is_visible){template=wp.template('unavailable-variation-template');}else{template=wp.template('variation-template');variation_id=variation.variation_id;}
$template_html=template({variation:variation});$template_html=$template_html.replace('/*<![CDATA[*/','');$template_html=$template_html.replace('/*]]>*/','');form.$singleVariation.html($template_html);form.$form.find('input[name="variation_id"], input.variation_id').val(variation.variation_id).change();if(variation.is_sold_individually==='yes'){$qty.find('input.qty').val('1').attr('min','1').attr('max','');$qty.hide();}else{$qty.find('input.qty').attr('min',variation.min_qty).attr('max',variation.max_qty);$qty.show();}
if(!variation.is_purchasable||!variation.is_in_stock||!variation.variation_is_visible){purchasable=false;}
if($.trim(form.$singleVariation.text())){form.$singleVariation.slideDown(200).trigger('show_variation',[variation,purchasable]);}else{form.$singleVariation.show().trigger('show_variation',[variation,purchasable]);}};VariationForm.prototype.onChange=function(event){var form=event.data.variationForm;form.$form.find('input[name="variation_id"], input.variation_id').val('').change();form.$form.find('.wc-no-matching-variations').remove();if(form.useAjax){form.$form.trigger('check_variations');}else{form.$form.trigger('woocommerce_variation_select_change');form.$form.trigger('check_variations');$(this).blur();}
form.$form.trigger('woocommerce_variation_has_changed');};VariationForm.prototype.addSlashes=function(string){string=string.replace(/'/g,'\\\'');string=string.replace(/"/g,'\\\"');return string;};VariationForm.prototype.onUpdateAttributes=function(event){var form=event.data.variationForm,attributes=form.getChosenAttributes(),currentAttributes=attributes.data;if(form.useAjax){return;}
form.$attributeFields.each(function(index,el){var current_attr_select=$(el),current_attr_name=current_attr_select.data('attribute_name')||current_attr_select.attr('name'),show_option_none=$(el).data('show_option_none'),option_gt_filter=':gt(0)',attached_options_count=0,new_attr_select=$('<select/>'),selected_attr_val=current_attr_select.val()||'',selected_attr_val_valid=true;if(!current_attr_select.data('attribute_html')){var refSelect=current_attr_select.clone();refSelect.find('option').removeAttr('disabled attached').removeAttr('selected');current_attr_select.data('attribute_options',refSelect.find('option'+option_gt_filter).get());current_attr_select.data('attribute_html',refSelect.html());}
new_attr_select.html(current_attr_select.data('attribute_html'));var checkAttributes=$.extend(true,{},currentAttributes);checkAttributes[current_attr_name]='';var variations=form.findMatchingVariations(form.variationData,checkAttributes);for(var num in variations){if(typeof(variations[num])!=='undefined'){var variationAttributes=variations[num].attributes;for(var attr_name in variationAttributes){if(variationAttributes.hasOwnProperty(attr_name)){var attr_val=variationAttributes[attr_name],variation_active='';if(attr_name===current_attr_name){if(variations[num].variation_is_active){variation_active='enabled';}
if(attr_val){attr_val=$('<div/>').html(attr_val).text();new_attr_select.find('option[value="'+form.addSlashes(attr_val)+'"]').addClass('attached '+variation_active);}else{new_attr_select.find('option:gt(0)').addClass('attached '+variation_active);}}}}}}
attached_options_count=new_attr_select.find('option.attached').length;if(selected_attr_val&&(attached_options_count===0||new_attr_select.find('option.attached.enabled[value="'+form.addSlashes(selected_attr_val)+'"]').length===0)){selected_attr_val_valid=false;}
if(attached_options_count>0&&selected_attr_val&&selected_attr_val_valid&&('no'===show_option_none)){new_attr_select.find('option:first').remove();option_gt_filter='';}
new_attr_select.find('option'+option_gt_filter+':not(.attached)').remove();current_attr_select.html(new_attr_select.html());current_attr_select.find('option'+option_gt_filter+':not(.enabled)').prop('disabled',true);if(selected_attr_val){if(selected_attr_val_valid){current_attr_select.val(selected_attr_val);}else{current_attr_select.val('').change();}}else{current_attr_select.val('');}});form.$form.trigger('woocommerce_update_variation_values');};VariationForm.prototype.getChosenAttributes=function(){var data={};var count=0;var chosen=0;this.$attributeFields.each(function(){var attribute_name=$(this).data('attribute_name')||$(this).attr('name');var value=$(this).val()||'';if(value.length>0){chosen++;}
count++;data[attribute_name]=value;});return{'count':count,'chosenCount':chosen,'data':data};};VariationForm.prototype.findMatchingVariations=function(variations,attributes){var matching=[];for(var i=0;i<variations.length;i++){var variation=variations[i];if(this.isMatch(variation.attributes,attributes)){matching.push(variation);}}
return matching;};VariationForm.prototype.isMatch=function(variation_attributes,attributes){var match=true;for(var attr_name in variation_attributes){if(variation_attributes.hasOwnProperty(attr_name)){var val1=variation_attributes[attr_name];var val2=attributes[attr_name];if(val1!==undefined&&val2!==undefined&&val1.length!==0&&val2.length!==0&&val1!==val2){match=false;}}}
return match;};VariationForm.prototype.toggleResetLink=function(on){if(on){if(this.$resetVariations.css('visibility')==='hidden'){this.$resetVariations.css('visibility','visible').hide().fadeIn();}}else{this.$resetVariations.css('visibility','hidden');}};$.fn.wc_variation_form=function(){new VariationForm(this);return this;};$.fn.wc_set_content=function(content){if(undefined===this.attr('data-o_content')){this.attr('data-o_content',this.text());}
this.text(content);};$.fn.wc_reset_content=function(){if(undefined!==this.attr('data-o_content')){this.text(this.attr('data-o_content'));}};$.fn.wc_set_variation_attr=function(attr,value){if(undefined===this.attr('data-o_'+attr)){this.attr('data-o_'+attr,(!this.attr(attr))?'':this.attr(attr));}
if(false===value){this.removeAttr(attr);}else{this.attr(attr,value);}};$.fn.wc_reset_variation_attr=function(attr){if(undefined!==this.attr('data-o_'+attr)){this.attr(attr,this.attr('data-o_'+attr));}};$.fn.wc_maybe_trigger_slide_position_reset=function(variation){var $form=$(this),$product=$form.closest('.product'),$product_gallery=$product.find('.images'),reset_slide_position=false,new_image_id=(variation&&variation.image_id)?variation.image_id:'';if($form.attr('current-image')!==new_image_id){reset_slide_position=true;}
$form.attr('current-image',new_image_id);if(reset_slide_position){$product_gallery.trigger('woocommerce_gallery_reset_slide_position');}};$.fn.wc_variations_image_update=function(variation){var $form=this,$product=$form.closest('.product'),$product_gallery=$product.find('.images'),$gallery_nav=$product.find('.flex-control-nav'),$gallery_img=$gallery_nav.find('li:eq(0) img'),$product_img_wrap=$product_gallery.find('.woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder').eq(0),$product_img=$product_img_wrap.find('.wp-post-image'),$product_link=$product_img_wrap.find('a').eq(0);if(variation&&variation.image&&variation.image.src&&variation.image.src.length>1){var galleryHasImage=$gallery_nav.find('li img[data-o_src="'+variation.image.gallery_thumbnail_src+'"]').length>0;if(galleryHasImage){$form.wc_variations_image_reset();}
var slideToImage=$gallery_nav.find('li img[src="'+variation.image.gallery_thumbnail_src+'"]');if(slideToImage.length>0){slideToImage.trigger('click');$form.attr('current-image',variation.image_id);window.setTimeout(function(){$(window).trigger('resize');$product_gallery.trigger('woocommerce_gallery_init_zoom');},20);return;}
$product_img.wc_set_variation_attr('src',variation.image.src);$product_img.wc_set_variation_attr('height',variation.image.src_h);$product_img.wc_set_variation_attr('width',variation.image.src_w);$product_img.wc_set_variation_attr('srcset',variation.image.srcset);$product_img.wc_set_variation_attr('sizes',variation.image.sizes);$product_img.wc_set_variation_attr('title',variation.image.title);$product_img.wc_set_variation_attr('alt',variation.image.alt);$product_img.wc_set_variation_attr('data-src',variation.image.full_src);$product_img.wc_set_variation_attr('data-large_image',variation.image.full_src);$product_img.wc_set_variation_attr('data-large_image_width',variation.image.full_src_w);$product_img.wc_set_variation_attr('data-large_image_height',variation.image.full_src_h);$product_img_wrap.wc_set_variation_attr('data-thumb',variation.image.src);$gallery_img.wc_set_variation_attr('src',variation.image.gallery_thumbnail_src);$product_link.wc_set_variation_attr('href',variation.image.full_src);}else{$form.wc_variations_image_reset();}
window.setTimeout(function(){$(window).trigger('resize');$form.wc_maybe_trigger_slide_position_reset(variation);$product_gallery.trigger('woocommerce_gallery_init_zoom');},20);};$.fn.wc_variations_image_reset=function(){var $form=this,$product=$form.closest('.product'),$product_gallery=$product.find('.images'),$gallery_nav=$product.find('.flex-control-nav'),$gallery_img=$gallery_nav.find('li:eq(0) img'),$product_img_wrap=$product_gallery.find('.woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder').eq(0),$product_img=$product_img_wrap.find('.wp-post-image'),$product_link=$product_img_wrap.find('a').eq(0);$product_img.wc_reset_variation_attr('src');$product_img.wc_reset_variation_attr('width');$product_img.wc_reset_variation_attr('height');$product_img.wc_reset_variation_attr('srcset');$product_img.wc_reset_variation_attr('sizes');$product_img.wc_reset_variation_attr('title');$product_img.wc_reset_variation_attr('alt');$product_img.wc_reset_variation_attr('data-src');$product_img.wc_reset_variation_attr('data-large_image');$product_img.wc_reset_variation_attr('data-large_image_width');$product_img.wc_reset_variation_attr('data-large_image_height');$product_img_wrap.wc_reset_variation_attr('data-thumb');$gallery_img.wc_reset_variation_attr('src');$product_link.wc_reset_variation_attr('href');};$(function(){if(typeof wc_add_to_cart_variation_params!=='undefined'){$('.variations_form').each(function(){$(this).wc_variation_form();});}});var wc_variation_form_matcher={find_matching_variations:function(product_variations,settings){var matching=[];for(var i=0;i<product_variations.length;i++){var variation=product_variations[i];if(wc_variation_form_matcher.variations_match(variation.attributes,settings)){matching.push(variation);}}
return matching;},variations_match:function(attrs1,attrs2){var match=true;for(var attr_name in attrs1){if(attrs1.hasOwnProperty(attr_name)){var val1=attrs1[attr_name];var val2=attrs2[attr_name];if(val1!==undefined&&val2!==undefined&&val1.length!==0&&val2.length!==0&&val1!==val2){match=false;}}}
return match;}};})(jQuery,window,document);;(function(){jQuery.extend({rightpress:{sanitize_json_response:function(response){try{jQuery.parseJSON(response);return response;}
catch(e){var valid_response=response.match(/{"result.*]}/);if(valid_response!==null){return valid_response[0];}}},parse_json_response:function(response,return_raw_data){var return_raw_data=(typeof return_raw_data!=='undefined')?return_raw_data:false;try{var parsed=jQuery.parseJSON(response);return return_raw_data?response:parsed;}
catch(e){var regex=return_raw_data?/{"result.*"}]}/:/{"result.*"}/;var valid_response=response.match(regex);if(valid_response!==null){response=valid_response[0];}}
return return_raw_data?response:jQuery.parseJSON(response);},add_nested_object_value:function(object,path,value){var last_key_index=path.length-1;for(var i=0;i<last_key_index;++i){var key=jQuery.isNumeric(path[i])?parseInt(path[i]):path[i];if(jQuery.isNumeric(path[i+1])){if(typeof object[key]==='undefined'){object[key]=[];}}
else if(!(key in object)){object[key]={};}
object=object[key];}
object[path[last_key_index]]=value;},object_key_check:function(object){var keys=Array.prototype.slice.call(arguments,1);var current=object;for(var i=0;i<keys.length;i++){if(typeof current[keys[i]]==='undefined'){return false;}
if(i<(keys.length-1)&&typeof current[keys[i]]!=='object'){return false;}
current=current[keys[i]];}
return true;},clear_field_value:function(field){if(field.is('select')){field.prop('selectedIndex',0);if(field.hasClass('rightpress_select2')){field.val('').change();}}
else if(field.is(':radio, :checkbox')){field.removeAttr('checked');}
else{field.val('');}},field_is_multiselect:function(field){return(field.is('select')&&typeof field.attr('multiple')!=='undefined'&&field.attr('multiple')!==false);}}});}());;(function(){var delay=(function(){var timers={};return function(callback,ms,unique){clearTimeout(timers[unique]);timers[unique]=setTimeout(callback,ms);};})();jQuery.fn.rightpress_live_product_update=function(params){var self=this;var form=this.closest('.product').find('form.cart');var unique=Math.random().toString(36).slice(2);form.find(':input').on('change keyup',function(){queue();});form.on('rightpress_live_product_price_attach_input',function(event,element){jQuery(element).find(':input').on('change keyup',function(){queue();});});form.on('found_variation, rightpress_live_product_price_trigger',function(){queue();});queue();function call()
{var form_data=form.serialize();form.find('button[type="submit"][name="add-to-cart"]').each(function(){var product_id=jQuery(this).val();if(product_id){form_data+=(form_data!==''?'&':'')+'rightpress_reference_product_id='+product_id;}});form.find('input, textarea, select').each(function(){if(jQuery(this).is(':visible')&&typeof jQuery(this).prop('name')!=='undefined'){form_data+=(form_data!==''?'&':'')+'rightpress_complete_input_list[]='+jQuery(this).prop('name');}});jQuery.ajax({type:'POST',url:params.ajax_url,context:self,data:{action:params.action,data:form_data},dataType:'json',dataFilter:jQuery.rightpress.sanitize_json_response,beforeSend:params.before_send,success:params.response_handler});}
function queue()
{delay(function(){call();},500,unique);}};}());