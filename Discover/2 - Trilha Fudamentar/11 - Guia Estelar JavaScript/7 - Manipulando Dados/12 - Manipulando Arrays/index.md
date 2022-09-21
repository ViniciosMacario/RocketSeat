# Strings para Arrays

Resumo:

> Nessa aula, vamos aprender a transformar cada palavra de uma *String* em um elemento de um *Array*.

## Desáfios

1. Crie um Array qualquer.
2. Adicione um novo elemento na última posição.
3. Adicione um novo elemento na primeira posição.
4. Remova o último elemento da Array.
5. Remova o primeiro elemento da Array.
6. Remova um ou mais elementos de qualquer posição do Array.
7. Encontre a posição de um elemento qualquer a partir de uma frase/número dentro do Array.
8. Selecione alguns elementos em específicos dentro do Array.

---

1. ### Primeiro Desáfio

*Código:*

```js
    let techs = ["html", "css", "js", "php", "java","Go", "Vue.js", "C", "Glsl"];
```

2. ### Segundo Desáfio

**Descrição:** O Método *" push( ) "* adiciona um ou mais elementos ao final de um Array.

**Parâmetro:** Os elementos a serem incluídos ao final do array.

**Retorno:** Uma nova Array contendo o novo valor inserido na última posição.

*Sintaxe:*

```js
    array.push(elemento1, ..., elementoN);
```

*Código:*

```js
    let techs = ["html", "css", "js", "php", "java","Go", "Vue.js", "C", "Glsl"];
    techs.push('React.js');
    console.log(techs);
    // Resultado: 0:"html" - 1:"css" - 2:"js" - 3:"php" - 4:"java" - 5:"Go" - 6:"Vue.js" - 7:"C" - 8:"Glsl" - 9:"React.Js"
```

Através do Método *" push( ) "* conseguimos adicionar dentro da Array *" techs "* o novo elemento *" React.Js "* na última posição(9).

3. ### Terceiro Desáfio

**Descrição:** O Método *" unshift( ) "*  adiciona um ou mais elementos no início de um Array.

**Parâmetro:** Os elementos a serem incluídos ao início do Array.

**Retorno:** Uma nova Array contendo o novo valor inserido na primeira posição.


*Sintaxe:*

```js
    array.unshift(elemento1, ..., elementoN);
```

```js
    let techs = ["html", "css", "js", "php", "java","Go", "Vue.js", "C", "Glsl"];
    techs.unshift('Node.js');
    console.log(techs);
    // Resultado: 0:"Node.js" - 1:"html"- 2:"css" - 3:"js" - 4:"php" - 5:"java" - 6:"Go" - 7:"Vue.js" - 8:"C" - 9:"Glsl".
```

Atráves do Método *" unshift( ) "* conseguimos adicionar na Array *" techs "* o novo elemeneto *" Node.Js "* na primeira posição(0).

4. ### Quarto Desáfio

**Descrição:** O método *" pop( ) "* remove o último elemento de um array.

**Parâmetro:** Não recebe.

**Retorno:** Uma nova Array sem o último elemento.

```js
    array.pop();
```

*Código:*

```js
    let techs = ["html", "css", "js", "php", "java","Go", "Vue.js", "C", "Glsl"];
    techs.pop();
    console.log(techs);
    // Resultado: 0:"html" - 1:"css" - 2:"js" - 3:"php" - 4:"java" - 5:"Go" - 6:"Vue.js" - 7:"C".
```

Atráves do Método *" pop( ) "* conseguimos remover na Array *" techs "* o último elemento *" Glsl "*.

5. ### Quinto Desáfio

**Descrição:** O método *" shift( ) "* remove o primeiro elemento de um array.

**Parâmetro:** Não recebe.

**Retorno:** Uma nova Array sem o primeiro elemento.


*Sintaxe:*

```js
    array.shift();
```

*Código:*

```js
    let techs = ["html", "css", "js", "php", "java","Go", "Vue.js", "C", "Glsl"];
    techs.shift();
    console.log(techs);
    // Resultado: 0:"css" - 1:"js" - 2:"php" - 3:"java" - 4:"Go" - 5:"Vue.js" - 6:"C" - 7:"Glsl".
```

Atráves do Método *" shift( ) "* conseguimos remover na Array *" techs "* o primeiro elemento *" html "*.

6. ### Sexto Desáfio

**Descrição:** O Método *" splice( ) "* remove um único elemento ou mais de um.

**Parâmetro:** O primeiro argumento é referente ao inicio da contagem de retirada de elementos, o segundo argumento é referente a quantos elementos serão excluidos a partir daquele informado.

**Retorno:** Uma nova Array sem os elemento selecionados.

*Sintaxe:*

```js
    array.splice(x,y);
```

*Código:*

```js
    let techs = ["html", "css", "js", "php", "java","Go", "Vue.js", "C", "Glsl"];
    techs.splice(0,3);
    console.log(techs);
    // Resultado: 0"php" - 1:"java" - 2:"Go" - 3:"Vue.js" - 4:"C" - 5:"Glsl"
```

Observamos que atráves do Método *" splice( ) "* podemos excluir mais um elemento dentro de um Array. Informamos nesse exemplo atráves *" techs.splice(0,3)"* que queremos iniciar a retirada de elementos a partir da posição de índice(0) = "Html" até a posição de índice(3).

7. ### Sétimo Desáfio

**Descrição:** O mMétodo *" indexOf( ) "* retorna o primeiro índice em que o elemento pode ser encontrado no array

**Parâmetro:** Elemento a ser pesquisado no array.

**Retorno:** a posição do elemento no índice, se existir, -1 caso o mesmo não esteja presente.

*Observação:* o indexOf() é camel sensitive, então "Go" é diferente de "go".

*Sintaxe:*

```js
    array.indexOf(elementoDePesquisa);
```

*Código:*

```js
    let techs = ["html", "css", "js", "php", "java","Go", "Vue.js", "C", "Glsl"];
    let index = techs.indexOf("go");
    console.log(index);
    // Resultado: índice - 5
```
Atráves do método *" indexOf( ) "* podemos identificar dentro de uma Array com facilitidade a posição de um elemento X.

8. ### Oitavo Desáfio

**Descrição:** O Método *" slice( ) "* retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado.

**Parâmetro:** Índice baseado em zero no qual se inicia a extração.
índice negativo, início indica um deslocamento em relação ao fim da sequência. slice(-2) extrai os dois últimos elementos do array.

**Retorno:** Um novo array contendo os elementos extraídos.

*Observação:* o último argumento a ser passado, desconsidera o valor do elemento.

*Sintaxe:*

```js
    array.slice([início[,fim]])
```

*Código:*

```js
    let techs = ["html", "css", "js", "php", "java","Go", "Vue.js", "C", "Glsl"];
    console.log(techs.slice(2,5));
    // Resultado: 0:"js" - 1:"php" - 2:"java"
```
Atráves do método *"  slice( ) "*  conseguimos selecionar alguns elementos em especificos dentro da Array *" techs "*.


## Conclusão

- Atráves do Método *" push( ) "* podemos adicionar um novo elemeneto ao Final de um Array.
- Atráves do Método *" unshift( ) "*  podemos adicionar um novo elemento no Início de um Array.
- Atráves do Método *" pop( ) "* podemos remover o último elemento de um array.
- Atráves do Método *" shift( ) "* Podemos remover o primeiro elemento de um Array.
- Atráves do Método *" splice( ) "* podemos remover mais de um elemento.
- Atráves do Método *" indexOf( ) "* podemos identificar o índice de um elmento X dentro do Array.
- Atráves do O Método *" slice( ) "* podemos selecionar elementos específicos dentro do Array.