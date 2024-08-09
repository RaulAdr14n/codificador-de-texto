import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>Next.js</title>
        </head>
        <body>
          {children}
          <Analytics />
        </body>
      </html>
    );
  }

let textoInput = document.querySelector('.encriptador__texto');
let botonEncriptar = document.querySelector('.encriptador__boton--encriptar');
let botonDesencriptar = document.querySelector('.encriptador__boton--desencriptar');
let textoOutput = document.querySelector('.resultado__texto');
let botonCopiar = document.querySelector('.resultado__boton--copiar');


botonEncriptar.addEventListener('click', encriptar);
botonDesencriptar.addEventListener('click', desencriptar);
botonCopiar.addEventListener('click', copiar);
textoInput.addEventListener('input', verificarTexto);

function verificarTexto() {
    if (textoInput.value.trim() !== "") {
        botonEncriptar.disabled = false;
        botonDesencriptar.disabled = false;
    } else {
        botonEncriptar.disabled = true;
        botonDesencriptar.disabled = true;
    }
}
function desencriptar(){
    let textoDesencriptado = "";
    let texto = textoInput.value;
    let i = 0;
    
    while (i < texto.length) {
        if (texto.substring(i, i + 5) === "enter") {
            textoDesencriptado += "e";
            i += 5;
        } else if (texto.substring(i, i + 4) === "imes") {
            textoDesencriptado += "i";
            i += 4;
        } else if (texto.substring(i, i + 2) === "ai") {
            textoDesencriptado += "a";
            i += 2;
        } else if (texto.substring(i, i + 4) === "ober") {
            textoDesencriptado += "o";
            i += 4;
        } else if (texto.substring(i, i + 4) === "ufat") {
            textoDesencriptado += "u";
            i += 4;
        } else {
            textoDesencriptado += texto[i];
            i++;
        }
    }
    textoOutput.value = textoDesencriptado;
}
function encriptar(){
    let textoEncriptado = "";
    let cantDeCaracteres = textoInput.value.length;
     
     let caracteresNoPermitidos = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "á", "é", "í", "ó", "ú", "ü", "ñ", "à", "è", "ì", "ò", "ù", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "{", "}", "[", "]", "|", "\\", ":", ";", "\"", "'", "<", ">", ",", ".", "?", "/", "!", "`", "~", "±", "÷", "×", "°", "≤", "≥", "∑", "∆", "∫", "©", "®", "™", "€", "£", "¥", "§", "¶", "\t", "&nbsp;"];

     
     for (let i = 0; i < cantDeCaracteres; i++) {
        console.log(textoInput.value[i])
         if (caracteresNoPermitidos.includes(textoInput.value[i])) {
             alert("El texto contiene mayúsculas, caracteres especiales o acentos. Solo se permiten letras minúsculas y espacios.");
             return;
         }
     }
    for(let i=0;i<cantDeCaracteres;i++){
        switch(textoInput.value[i]){
            case "e":
                textoEncriptado += "enter";
            break;
            case "i":
                textoEncriptado += "imes";
            break;
            case "a":
                textoEncriptado += "ai";
            break;
            case "o":
                textoEncriptado += "ober";
            break;
            case "u":
                textoEncriptado += "ufat";
            break;
            default:
                textoEncriptado += textoInput.value[i];
            break;
        }
    }
    textoOutput.value = textoEncriptado;
    botonCopiar.disabled = false;
}
function copiar(){
    navigator.clipboard.writeText(textoOutput.value);
    mostrarPopup();
}
function mostrarPopup() {
    let popup = document.getElementById('notificacion');
    popup.classList.add("mostrar");
    setTimeout(() => {
       popup.classList.remove("mostrar");
    }, 2000);

}