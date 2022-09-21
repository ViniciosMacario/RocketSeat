# Type Conversion vs Type Coersion

Resumo:

>Type conversion se trata de uma conversão de 'tipo' feita pelo dev, explicitamente, e pode ser feita de diversas maneiras, por exemplo com o método Number(), já type Coersion é uma mudança de tipos feita pelo próprio JavaScript, implicitamente, por exemplo quando você tenta somar um número na forma string com um número do tipo número.

## Type Coersion

É uma conversão de tipo de Dado que *o Próprio JavaScript* executa de modo velado, vejo um exemplo:

*Código:*

```js
    console.log('10' + 5);
    //Resposta: 105 - Concatenação
```

Observamos que temos um tipo de dado *String* e um *Number*, o sinal de *"Adição"* nesse contexto, implica na concatenação dos elementos. O JavaScript, transformou o tipo de dado *Number* 5 para uma *String* '5', de modo velado.

*Modo Velado:*

```js
    console.log('10' + '5');
    //Resposta: 105 - Concatenação
```


## Type Conversion ou Type Casting

É uma conversão que o *Desenvolvedor/você* faz sobre os tipos de dados de modo intencionado, vejo um exemplo:

*Código:*

```js
    console.log(Number('10') + 5);
    //Resposta: 15 - Adição mediante a alteração do tipo de dado

    //A propriedade 'Number()' tem finalidade nesse contexto de realizar uma conversão de tipo de dado.
```

Observamos que o Desenvolvedor fez o uso da propriedade *"Number( )"* com a intenção de conversão de tipo, então, a String('10') agora será um Number(10) e nesse contexto, o sinal de *"Adição"*, será para indicar a soma propriamente dita.