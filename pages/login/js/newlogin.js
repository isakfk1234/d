function login()
{
var a=document.getElementById('username').value
var b=document.getElementById('password').value
if(a==""||b=="")
{
alert("!!! please fill the details !!!");
}
else 
if(a=="SAVENUE" && b=="12345")
{
window.open("manager.html");
}
else
if(a=="GAVENUE" && b=="12345")
{
window.open("gservice.html");
}
else
if(a=="RJGA" && b=="12345")
{
window.open("manager.html");
}
else
if(a=="ABVE" && b=="12345")
{
window.open("manager.html");
}
else
if(a=="ABZR" && b=="12345")
{
window.open("manager.html");
}
else
if(a=="AMNM" && b=="12345")
{
window.open("manager.html");
}
else
if(a=="YASW" && b=="12345")
{
window.open("manager.html");
}
else
{
alert("wrong id/password");
}

}