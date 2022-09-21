## Funções

> Funções são tipos de dados estruturais, que são declarados dessa forma: function nomeFunção() { código à cer executado } e para executar a função, usa-se: nomeFunção(). Uma função é importante para o agrupamento e reutilização de código.

```js
    //Aplicativo de frases motivacionais
    // Funcion também é um tipo de dado, só que estrutural 


    //Declaração da função - function statement
    funcion createPhrases(){
        //Novo escopo dentro dessas chavês

        console.log('Estudar é muito bom');
        console.log('Paciência e persistência');
        console.log('Revisão é mãe do aprendizado');
    }

    //Após você declarar a função, você deve ativar ela, chamar ela
    createPhrases()

    //nesse contexto, podemos dizer que a função serviu para agrupar código e também para reutilziar quantas vezes quiser.
```