<?php if (!defined('ABSPATH')) exit; // Exit if accessed directly  ?>
<div id="dg-config-art" class="modal fade nbdesigner_modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header" style="padding-bottom: 15px;">
                <b>{{(langs['SVG_PATH_MANAGER']) ? langs['SVG_PATH_MANAGER'] : "SVG Path Manager"}}</b>
                <button style="margin-top: 0;" type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>	
            </div>   
            <div class="modal-body nbdesigner_config_svg">
                <?php  if($enableColor == 'yes'): ?>
                <spectrum-colorpicker
                    ng-repeat="color in editable.paths"
                    ng-model="pathColor[color.key]" 
                    ng-change="updatePathColor(color)"                     
                    options="{
                        showPaletteOnly: false, 
                        togglePaletteOnly: false, 
                        showPalette: false, 
                        showInput: true}">
                </spectrum-colorpicker>                                     
               <?php else: ?>
                <spectrum-colorpicker
                    ng-repeat="color in editable.paths"
                    ng-model="color.fill" 
                    ng-change="updatePathColor(color)"                     
                    options="{
                        showPaletteOnly: true, 
                        togglePaletteOnly: false, 
                        hideAfterPaletteSelect:true,
                        palette: colorPalette}">
                </spectrum-colorpicker>    
               <?php endif; ?>  
            </div>
        </div>
    </div>
</div>