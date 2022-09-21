## Resumo
> Diferentemente de var, const e let são variáveis com escopo local, ou seja, só são visíveis no escopo onde foram criadas e em escopos interiores ao de criação. Em uma variável let, porém, pode-se alterar o valor em um escopo e o valor irá persistir no escopo de criação.

##let e const

```js
//const e let são locais e só funcionam no escopo onde foram criadas.

    console.log("Existe Y antes do bloco", y);
{
    let y = true;
}
    console.log("Existe Y depois do bloco", y);

//O erro que será apresentado é Uncaught ReferenceError: y is not Defined, isso porque a variável "let", só existe dentro do Scopo, fora dele,antes dele, depois dele, ele ainda NÃO EXISTE.

//Então, devemos escreve da seguinte forma, talvez?

{   
    console.log("Existe Y antes do bloco", y);
    let y = true;
}

// O erro que será apresentado é Uncaught ReferenceError: Cannot access 'y' before initialization, ele sabe que existe o "y", mas não pode acessar ele antes da sua inicialização, diferentimente da variável "var", ele não vai fazer o "hoisting(Elevação)"

//A forma correta de escrever seria então

{   
    let y = true;
    console.log("Existe Y antes do bloco", y);
}
//Assim será possível o console.log(y) acessar a variável let e seu valor atribuido.

//É possível termos duas variáveis "let" com o mesmo nome

let y = 10;

{   
    let y = 0;
    console.log("Existe Y no escopo local", y);
}
console.log("Existe Y no escopo global", y);
// Para o JS existem dois mundos diferentes aqui, um "local" e outro "global", onde só é possível existir duas variáveis com o mesmo nome, porque são Universos diferentes, o Js global, quando é "let", não lê o local, é como se não existe-se.

/*Agora o que acontece se não definirmo um Keyword para uma variável dentro de um bloco local?*/

let y = 10;

{   
     {
        {
            {
                {
                    y = 0;
                    console.log("Existe Y no escopo local", y);
                }
            }
        }
     }
}
console.log("Existe Y no escopo global", y);

/*Ao invés de criarmos uma nova variável, apenas atualizamos o valor da existente*/
// ele vai procurar o y em algum outro luga acima dele, então ele sobe um scopo ou mais
/*Entramos no escopo local trazendo o valor do y do escopo global*/





```