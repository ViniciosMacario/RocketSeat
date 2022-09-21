# Maiúsculas e minúsculas

Resumo:

> Nessa aula, vamos aprender a transformar uma "String" em letras Maiúsculas e também Minúsculas.

## Desáfios

1. Transforme letras Minúsculas em Maiúsculas.
2. Transforme letras Maiúsculas em Minúsculas.

---

1. ### Primeiro Desáfio

O Método *" toUpperCase( ) "* converte todas as Letras em  Maiúsculas.

O Retorno: Uma nova string representando a string original convertida em maiúsculas.

*Sintaxe:*

```js
    string.toUpperCase();
```

*Código:*

```js
    let nome = 'vinicios';
    console.log(nome.toUpperCase());
    //Resultado: VINICIOS
```

2. ### Segundo Desáfio

O Método *" toLowerCase() "* converte todas as Letras em Minúsculas.

O Retorno: Uma nova *" String "* contendo o valor da string original convertido para minúsculo.

*Sintaxe:*

```js
    string.toLowerCase();
```

*Código:*

```js
    let sobrenome = 'MACARIO';
    console.log(nome.toLowerCase());
    //Resultado: macario
```

## Conclusão

- Maiúsculo para Minúsculo - toLowerCase();
- Minúsculo para Maiúsculo - toUpperCase();