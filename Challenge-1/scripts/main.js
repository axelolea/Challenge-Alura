const btnEn = document.querySelector("#btnen");
const btnDe = document.querySelector("#btnde");
const btnCo = document.querySelector("#btnco");

var valuesCrypt = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]
];

const removeAccents = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

function encryptText (){

    var char, newString = "";
    var string = document.querySelector("#textInput").value;
    string = removeAccents(string);

    const conversor = (acc, item) => acc == item[0] ? item[1]: acc;

    for(let i of string){

        char = valuesCrypt.reduce(conversor , i)
        console.log(char)
        newString = newString.concat(char)

    }

    document.getElementById("result").innerHTML=newString;

};

function decryptText (){

    var string = document.querySelector("#textInput").value
    string = removeAccents(string);
    const deconversor = (acc, item) => acc.replaceAll(item[1],item[0])

    var newString = valuesCrypt.reduce( deconversor , string)
    
    document.getElementById("result").innerHTML=newString;

};

function copyText(){
    var copyText = document.getElementById("result");
    copyText.select();
    document.execCommand('copy');  
}

btnEn.onclick = encryptText;
btnDe.onclick = decryptText;
btnCo.onclick = copyText;