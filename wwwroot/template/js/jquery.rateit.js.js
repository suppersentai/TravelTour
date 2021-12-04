/*! RateIt | v1.0.21 / 03/16/2014 | https://rateit.codeplex.com/license
http://rateit.codeplex.com | Twitter: @gjunge
*/(function($){$.rateit={aria:{resetLabel:'reset rating',ratingLabel:'rating'}};$.fn.rateit=function(p1,p2){var index=1;var options={};var mode='init';var capitaliseFirstLetter=function(string){return string.charAt(0).toUpperCase()+string.substr(1);};if(this.length===0){return this;}
var tp1=$.type(p1);if(tp1=='object'||p1===undefined||p1===null){options=$.extend({},$.fn.rateit.defaults,p1);}
else if(tp1=='string'&&p1!=='reset'&&p2===undefined){return this.data('rateit'+capitaliseFirstLetter(p1));}
else if(tp1=='string'){mode='setvalue';}
return this.each(function(){var item=$(this);var itemdata=function(key,value){if(value!=null){var ariakey='aria-value'+((key=='value')?'now':key);var range=item.find('.rateit-range');if(range.attr(ariakey)!=undefined){range.attr(ariakey,value);}}
arguments[0]='rateit'+capitaliseFirstLetter(key);return item.data.apply(item,arguments);};if(p1=='reset'){var setup=itemdata('init');for(var prop in setup){item.data(prop,setup[prop]);}
if(itemdata('backingfld')){var fld=$(itemdata('backingfld'));fld.val(itemdata('value'));fld.trigger('change');if(fld[0].min){fld[0].min=itemdata('min');}
if(fld[0].max){fld[0].max=itemdata('max');}
if(fld[0].step){fld[0].step=itemdata('step');}}
item.trigger('reset');}
if(!item.hasClass('rateit')){item.addClass('rateit');}
var ltr=item.css('direction')!='rtl';if(mode=='setvalue'){if(!itemdata('init')){throw 'Can\'t set value before init';}
if(p1=='readonly'&&p2==true&&!itemdata('readonly')){item.find('.rateit-range').unbind();itemdata('wired',false);}
if(p1=='value'){p2=(p2==null)?itemdata('min'):Math.max(itemdata('min'),Math.min(itemdata('max'),p2));}
if(itemdata('backingfld')){var fld=$(itemdata('backingfld'));if(p1=='value'){fld.val(p2);}
if(p1=='min'&&fld[0].min){fld[0].min=p2;}
if(p1=='max'&&fld[0].max){fld[0].max=p2;}
if(p1=='step'&&fld[0].step){fld[0].step=p2;}}
itemdata(p1,p2);}
if(!itemdata('init')){itemdata('min',isNaN(itemdata('min'))?options.min:itemdata('min'));itemdata('max',isNaN(itemdata('max'))?options.max:itemdata('max'));itemdata('step',itemdata('step')||options.step);itemdata('readonly',itemdata('readonly')!==undefined?itemdata('readonly'):options.readonly);itemdata('resetable',itemdata('resetable')!==undefined?itemdata('resetable'):options.resetable);itemdata('backingfld',itemdata('backingfld')||options.backingfld);itemdata('starwidth',itemdata('starwidth')||options.starwidth);itemdata('starheight',itemdata('starheight')||options.starheight);itemdata('value',Math.max(itemdata('min'),Math.min(itemdata('max'),(!isNaN(itemdata('value'))?itemdata('value'):(!isNaN(options.value)?options.value:options.min)))));itemdata('ispreset',itemdata('ispreset')!==undefined?itemdata('ispreset'):options.ispreset);if(itemdata('backingfld')){var fld=$(itemdata('backingfld')).hide();if(fld.attr('disabled')||fld.attr('readonly')){itemdata('readonly',true);}
if(fld[0].nodeName=='INPUT'){if(fld[0].type=='range'||fld[0].type=='text'){itemdata('min',parseInt(fld.attr('min'))||itemdata('min'));itemdata('max',parseInt(fld.attr('max'))||itemdata('max'));itemdata('step',parseInt(fld.attr('step'))||itemdata('step'));}}
if(fld[0].nodeName=='SELECT'&&fld[0].options.length>1){itemdata('min',(!isNaN(itemdata('min'))?itemdata('min'):Number(fld[0].options[0].value)));itemdata('max',Number(fld[0].options[fld[0].length-1].value));itemdata('step',Number(fld[0].options[1].value)-Number(fld[0].options[0].value));var selectedOption=fld.find('option[selected]');if(selectedOption.length==1){itemdata('value',selectedOption.val());}}
else{itemdata('value',fld.val());}}
var element=item[0].nodeName=='DIV'?'div':'span';index++;var html='<button id="rateit-reset-{{index}}" data-role="none" class="rateit-reset" aria-label="'+$.rateit.aria.resetLabel+'" aria-controls="rateit-range-{{index}}"></button><{{element}} id="rateit-range-{{index}}" class="rateit-range" tabindex="0" role="slider" aria-label="'+$.rateit.aria.ratingLabel+'" aria-owns="rateit-reset-{{index}}" aria-valuemin="'+itemdata('min')+'" aria-valuemax="'+itemdata('max')+'" aria-valuenow="'+itemdata('value')+'"><{{element}} class="rateit-selected" style="height:'+itemdata('starheight')+'px"></{{element}}><{{element}} class="rateit-hover" style="height:'+itemdata('starheight')+'px"></{{element}}></{{element}}>';item.append(html.replace(/{{index}}/gi,index).replace(/{{element}}/gi,element));if(!ltr){item.find('.rateit-reset').css('float','right');item.find('.rateit-selected').addClass('rateit-selected-rtl');item.find('.rateit-hover').addClass('rateit-hover-rtl');}
itemdata('init',JSON.parse(JSON.stringify(item.data())));}
item.find('.rateit-selected, .rateit-hover').height(itemdata('starheight'));var range=item.find('.rateit-range');range.width(itemdata('starwidth')*(itemdata('max')-itemdata('min'))).height(itemdata('starheight'));var presetclass='rateit-preset'+((ltr)?'':'-rtl');if(itemdata('ispreset')){item.find('.rateit-selected').addClass(presetclass);}
else{item.find('.rateit-selected').removeClass(presetclass);}
if(itemdata('value')!=null){var score=(itemdata('value')-itemdata('min'))*itemdata('starwidth');item.find('.rateit-selected').width(score);}
var resetbtn=item.find('.rateit-reset');if(resetbtn.data('wired')!==true){resetbtn.bind('click',function(e){e.preventDefault();resetbtn.blur();var event=$.Event('beforereset');item.trigger(event);if(event.isDefaultPrevented()){return false;}
item.rateit('value',null);item.trigger('reset');}).data('wired',true);}
var calcRawScore=function(element,event){var pageX=(event.changedTouches)?event.changedTouches[0].pageX:event.pageX;var offsetx=pageX-$(element).offset().left;if(!ltr){offsetx=range.width()-offsetx};if(offsetx>range.width()){offsetx=range.width();}
if(offsetx<0){offsetx=0;}
return score=Math.ceil(offsetx/itemdata('starwidth')*(1/itemdata('step')));};var setHover=function(score){var w=score*itemdata('starwidth')*itemdata('step');var h=range.find('.rateit-hover');if(h.data('width')!=w){range.find('.rateit-selected').hide();h.width(w).show().data('width',w);var data=[(score*itemdata('step'))+itemdata('min')];item.trigger('hover',data).trigger('over',data);}};var setSelection=function(value){var event=$.Event('beforerated');item.trigger(event,[value]);if(event.isDefaultPrevented()){return false;}
itemdata('value',value);if(itemdata('backingfld')){$(itemdata('backingfld')).val(value).trigger('change');}
if(itemdata('ispreset')){range.find('.rateit-selected').removeClass(presetclass);itemdata('ispreset',false);}
range.find('.rateit-hover').hide();range.find('.rateit-selected').width(value*itemdata('starwidth')-(itemdata('min')*itemdata('starwidth'))).show();item.trigger('hover',[null]).trigger('over',[null]).trigger('rated',[value]);return true;};if(!itemdata('readonly')){if(!itemdata('resetable')){resetbtn.hide();}
if(!itemdata('wired')){range.bind('touchmove touchend',touchHandler);range.mousemove(function(e){var score=calcRawScore(this,e);setHover(score);});range.mouseleave(function(e){range.find('.rateit-hover').hide().width(0).data('width','');item.trigger('hover',[null]).trigger('over',[null]);range.find('.rateit-selected').show();});range.mouseup(function(e){var score=calcRawScore(this,e);var value=(score*itemdata('step'))+itemdata('min');setSelection(value);range.blur();});range.keyup(function(e){if(e.which==38||e.which==(ltr?39:37)){setSelection(Math.min(itemdata('value')+itemdata('step'),itemdata('max')));}
if(e.which==40||e.which==(ltr?37:39)){setSelection(Math.max(itemdata('value')-itemdata('step'),itemdata('min')));}});itemdata('wired',true);}
if(itemdata('resetable')){resetbtn.show();}}
else{resetbtn.hide();}
range.attr('aria-readonly',itemdata('readonly'));});};function touchHandler(event){var touches=event.originalEvent.changedTouches,first=touches[0],type="";switch(event.type){case "touchmove":type="mousemove";break;case "touchend":type="mouseup";break;default:return;}
var simulatedEvent=document.createEvent("MouseEvent");simulatedEvent.initMouseEvent(type,true,true,window,1,first.screenX,first.screenY,first.clientX,first.clientY,false,false,false,false,0,null);first.target.dispatchEvent(simulatedEvent);event.preventDefault();};$.fn.rateit.defaults={min:0,max:5,step:0.5,starwidth:16,starheight:16,readonly:false,resetable:true,ispreset:false};$(function(){$('div.rateit, span.rateit').rateit();});})(jQuery);