window.onload = function(){
    var d=document; var s=d.getElementById('search'); var b=d.getElementById('but');
    if(b){ b.onclick = function(){
        if(s.value == ''){return false;}}}
    var c=d.getElementById('clear');
    if(c&&s){ 
        if(s.value.length==0){c.style.display='none';}else{c.style.display='inline';}
        c.onclick=function(e){ s.value='';c.style.display='none'; if(e){e.preventDefault();}}}
    if(s){s.onkeyup=function(){ if(s.value.length>0){ 
        c.style.display='inline'; }else{ c.style.display='none';
}}}}
