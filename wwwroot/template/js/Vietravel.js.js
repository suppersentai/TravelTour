function getCookie(cname){var name=cname+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return "";}
function disableBtn(btnID,newText){Page_IsValid=null;if(typeof(Page_ClientValidate)=='function'){Page_ClientValidate();}
var btn=document.getElementById(btnID);var isValidationOk=Page_IsValid;if(isValidationOk!==null){if(isValidationOk){btn.disabled=true;btn.value=newText;btn.style.background="url(https://travel.com.vn/content/themehe/img/loading.gif)";}
else{btn.disabled=false;}}
else{setTimeout("setImage('"+btnID+"')",1000);btn.disabled=true;btn.value=newText;}}
function setImage(btnID){var btn=document.getElementById(btnID);btn.style.background='url(https://travel.com.vn/content/themehe/img/loading.gif)';}