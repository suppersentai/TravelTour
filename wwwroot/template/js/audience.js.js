       (function () { 
         var _onload = function(){ 
           if (document.readyState && !/loaded|complete/.test(document.readyState)){setTimeout(_onload, 10);return} 
           if (!window.__bucksense_loaded){window.__bucksense_loaded=true;setTimeout(_onload, 50);return} 
           var scr = document.createElement('script'); 
           var host = (('https:' == document.location.protocol) ? 'https://retargeting.bksn.se/webr' : 'http://retargeting.bksn.se/webr'); 
           scr.setAttribute('async', 'true'); 
           scr.type = 'text/javascript'; 
           scr.src = host + '/webr?site_id='+bks_sid+'&product_id='+bks_pid+'&url='+bks_url+'&audience='+bks_audience; 
           scr.id = 'bksretarget'; 
           ((document.getElementsByTagName('head')||[null])[0]||document.getElementsByTagName('script')[0].parentNode).appendChild(scr); 
      }; 
      if (window.addEventListener) {window.addEventListener('load', _onload, false);
        } else {
         window.attachEvent('onload', _onload)
       }
       _onload();
       }()); 
