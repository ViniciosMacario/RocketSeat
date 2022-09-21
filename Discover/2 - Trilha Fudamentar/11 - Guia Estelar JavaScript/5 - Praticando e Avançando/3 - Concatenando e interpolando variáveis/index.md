## Concatenando e interpolando variáveis


> É possível concatenar strings com o operador +, por exemplo: console.log('o ' + name + ' tem ' + age + ' anos.') desta maneira as variáveis serão convertidas em texto e o que será mostrado será um texto com o nome e a idade que foram estabelecidas no código. Uma outra maneira de escrever um texto com variáveis é por meio da interpolação com template literals, usando crase para o texto e ${} para denotar uma variável, por exemplo console.log(O ${name} tem ${age} anos.) o resultado deste comando será o mesmo texto do anterior.

```js
    
    let name
    name = "Iasmin";

    //Agrupamento de Declarações
    let age, isHuman

    age = 21;
    isHuman = true;
    
    //console.log(name, age, isHuman)

    //Escrita de texto + variáveis
    //Concatenando valores
    console.log('O ' + name + ' tem ' + age + ' ano.')

    // Interpolando valores com template literals or template strings
    console.log(`O ${name} tem ${age} anos.`)

```