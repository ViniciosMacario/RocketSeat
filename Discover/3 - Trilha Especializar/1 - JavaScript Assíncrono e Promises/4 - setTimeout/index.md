# setTimeOut

**Descrição:** ``setTimeout()`` é uma função que recebe como argumento uma outra função e um tempo para ser executada.

A função de argumento do setTimeout é uma callback, ela vai executar depois de um certo tempo.

*Exemplo:*

```js

    // setTimeout(function, delay)
    setTimeout(function () {
        console.log('depois de 1s')
    }, 1000);

```

No caso do exemplo acima, a função vai ser executada depois de 1000ms que é o mesmo que 1s.