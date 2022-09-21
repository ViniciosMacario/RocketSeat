## CallBack Function

> Uma callback function é uma função que está sendo passada para outra função como parâmetro.
> callback do inglês significa chamar de volta.
> Um callback nada mais é do que uma função que está sendo passada como parâmetro para outra função
```js

    function sayMyName(name){
        return console.log(name)
    };

    // Podemos passar como argumento qualquer tipo de valor, por exemplo: nomes(strins),números(number), objetos(object) e inclusive função que também é um tipo de dado.
    sayMyName(
        () => {
            console.log('Estou em um callback')
        }
    );

    // a Arrow function recebe um novo nome que é "name" e logo depois pedimos para executar o name()
```