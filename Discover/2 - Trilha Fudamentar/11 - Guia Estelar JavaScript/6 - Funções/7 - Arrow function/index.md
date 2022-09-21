## Arrow function

> Também podemos escrever funções expression de uma maneira mais compacta, desta maneira: () => { código a ser executado }, chamada de Arrow Function.
> Arrow function é expression

```js
    //Modo antigo de escrever uma função
    const sayMyName = function(){

    }
    //Modo moderno de escrever uma função - a diferença é que não precisamos declararar a palavra chavê "function" e substituimos pelo simbulo "=>";

    const sayMyName = () => {
        console.log('Vinicios');
    };

    sayMyName();
```