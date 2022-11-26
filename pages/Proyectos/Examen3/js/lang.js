function enLang()
{
    $('[lang="es"]').hide();
    $('[lang="en"]').show();
}
function esLang()
{
    $('[lang="en"]').hide();
    $('[lang="es"]').show();
}
$( document ).ready(function() {
    enLang();
});