/*
 * Efeito da máquina de escrever.
 */
function typeWriter(elemento)
{
    const textArray = elemento.innerHTML.split(""); //transformar em array

    elemento.innerHTML = ""; //apagar o elemento da tela

    for(let y = 0; y < textArray.length; y++)
    {
        setTimeout( () => elemento.innerHTML += textArray[y], y*85);
    }
}

typeWriter(document.querySelector("h1"));

