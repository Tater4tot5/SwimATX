var CCFilePicker=function(){var e,t,o,n,i,c,s,r,a="https://assets.adobe.com",d=window.addEventListener?"addEventListener":"attachEvent",l=window.addEventListener?"removeEventListener":"detachEvent",u="attachEvent"==d?"onmessage":"message",w=function(e){if(e.source==s||e.source==c.contentWindow){var t=JSON.parse(e.data);"cancel"==t.type?(i(),s.close(),window[l](u,w)):"files-selected"==t.type&&(n(t.files||[]),s.close(),window[l](u,w))}};return{close:function(){try{if(window[l](u,w),!s)return;s.close(),document.getElementsByTagName("body")[0].removeChild(c)}catch(e){}},selectFiles:function(l){l=l||{},n=l.success||function(){},i=l.cancel||function(){},e=l.url?l.url:a,c=document.createElement("iframe"),c.setAttribute("id","cc_filechooser"),c.setAttribute("src",e+"/ie_chooser.html"),c.style.display="none",document.getElementsByTagName("body")[0].appendChild(c),r=l.locale||l.max||l.rendition?"?"+(l.feature_set?"feature_set="+l.feature_set+"&":"")+(l.locale?"locale="+l.locale+"&":"")+(l.max?"max="+l.max+"&":"")+(l.rendition?"rendition="+l.rendition:""):"",t=Math.floor((window.screenX||window.screenLeft)+((window.outerWidth||document.documentElement.offsetWidth)-795)/2),o=Math.floor((window.screenY||window.screenTop)+((window.outerHeight||document.documentElement.offsetHeight)-550)/2),s=window.open(e+"/filechooser"+r,"creativecloud","width=795,height=550,left="+t+",top="+o+",resizable=yes,location=no,scrollbars=yes,directories=no,titlebar=no,toolbar=no,status=no,menubar=no"),s.focus(),window[d](u,w,!1)}}}();