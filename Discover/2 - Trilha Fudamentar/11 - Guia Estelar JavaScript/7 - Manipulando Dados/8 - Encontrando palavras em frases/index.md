# Encontrando palavras em frases

Resumo:

> Nessa aula, vamos aprender a transformar uma "String" para um "Array" e um "Array" para uma "String".

## Desáfios

1. Verique se uma frase qualquer contém a palavra "Razão'.

---

1. ### Primeiro Desáfio

**Descrição:** o Método *" includes() "* verificar se um conjunto de caracteres existe dentro de uma String. includes() é case sensitive.

**Parâmetros:** é o conjunto de caracteres que será pesquisado dentro desta string.

**O Retorno:** true se o conjunto de caracteres for encontrado em algum lugar dentro da string sendo pesquisada. Do contrário, retorna false.

*Sintaxe:*

```js
    str.includes(searchString);
```

*Código:*

```js
    let phrase = "A arte da Guerra";
    console.log(phrase.includes("Razão"));
    // Resultado: false
```

Temos então, uma variável com uma frase e queremos verificar se existe uma determinada palavra dentro dessa frase, usamos então o includes(), passando como parâmetro a palavra que queremos verificar, o valor retornado é apenas falso ou verdadeiro.

## Conclusão

- Podemos verificar atráves do Método includes(); se um elemento existe ou não dentro de uma String.