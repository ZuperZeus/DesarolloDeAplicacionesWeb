var lng="en"
function enLang()
{
    lng="en"
    $('[lang="es"]').hide();
    $('[lang="en"]').show();
}
function esLang()
{
    lng="es"
    $('[lang="en"]').hide();
    $('[lang="es"]').show();
}
$( document ).ready(function() {
    enLang();
});
localStorage.setItem("pswd","cheko123")
function verifEdad()
{
    var x;
    if(lng=="en")
    {
        prompt("Enter your name:")
        prompt("Enter your address:")
        prompt("Enter your phone number:")
        x=prompt("Enter your age")
    }
    else
    {
        prompt("Dame tu nombre:")
        prompt("Dame tu direccion:")
        prompt("Dame tu telefono:")
        x=prompt("Dame tu edad:")
    }
    if(x>=18)
    {
        open("contact.html","_self")
    }
}
function verifContra()
{
    var x
    if(lng=="en")
    {
        x=prompt("Enter the password:")
    }
    else
    {
        x=prompt("Ingrese la contraseña:")
    }
    if(x==localStorage.pswd)
    {
        open("homework.html","_self")
    }
}