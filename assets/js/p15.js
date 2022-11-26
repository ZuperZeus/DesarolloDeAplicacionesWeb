console.log("Hola Jorge")

var parrafos = document.getElementsByTagName('p');

console.log(parrafos[0].textContent)

function getTagPaquito(){
    var allDivs = document.getElementsByName('paquito')
    for(var i=0; i<allDivs.length; i++){
        console.log(allDivs[i])
    }
    console.log("Hay "+allDivs.length+" elementos con el nombre div en este documento")
}

function getElementInnerDiv(){
    var div = document.getElementById('innerDiv')
    console.log(div)
}

function getNumber(){
    console.log(document.getElementById("dp"))
}