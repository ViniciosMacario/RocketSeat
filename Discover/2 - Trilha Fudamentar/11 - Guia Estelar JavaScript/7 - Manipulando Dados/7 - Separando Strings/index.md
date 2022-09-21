# Separando Strings

Resumo:

> Nessa aula, vamos aprender a transformar uma "String" para um "Array" e um "Array" para uma "String".

## Desáfios

1. Separe as Palavras de um pequeno Texto qualquer e adicione dentro de um Array(Cada palavra deve ter uma posição dentro do Array).
2. Transforme o Array em um Texto completo novamente e substitua os 'Espaços em branco' por Underline(_).

---

1. ### Primeiro Desáfio

**Descrição:** O Método *" split() "* procura um determinado padrão para que ele possa dividir a String em uma lista ordenada de Substrings.

**Parâmetro:** O padrão que descreve onde cada divisão deve ocorrer.

**O Retorno:** Um array de strings divididos em cada ponto onde o separador ocorre na string informada.

*Sintaxe:*

```js
    string.split(separador);
```

*Código:*

```js
    let phrase =  'Viva Cristo rei, viva el Cristo, o único Senhor verdadeiro, ele é o caminho para a luz e a paz';
    let phraseArray = phrase.split(" ") //Passando como argumento "Espaço" como ponto de separação.
    console.log(phraseArray);
    //Resultado: ['Viva', 'Cristo', 'rei,', 'viva', 'el', ...]
    //Posição do Array: [0(Viva), 1(Cristo), 2(rei), 3(viva), 4(el)...]
```

Criamos  uma variável chamada "phrase" que está recebendo uma String, essa variável será passada para "phraseArray" que receberá a String em formato de Array atráves do método *"split( )"* tendo como argumento/separador o próprio "espaço(" ")" entra as palavras da String.


2. ### Segundo Desáfio

O Método *" join() "* junta todos os elementos de um Array mesmo sem nenhum argumento.

O Retorno: Uma *" String "* com todos os elementos do Array juntos.

*Sintaxe:*

```js
    array.join();
```

*Código:*

```js
    let phrase =  'Viva Cristo rei, viva el Cristo, o único Senhor verdadeiro, ele é o caminho para a luz e a paz';
    let phraseArray = phrase.split(" ");
    let phraseUnderline = phraseArray.join("_")

    console.log(phraseUnderline);
    //Resultado: Viva_Cristo_rei,_viva_el_Cristo,_o_único_Senhor_verdadeiro,_ele_é_o_caminho_para_a_luz_e_a_paz 
```

Vamos pegar a variável *" phraseArray "* que possui o tipo de Dado *" Array "* e vamos juntar atráves do método *" join() "* os elementos contidos nelas, passando como argumento, o separador "_" ao invés de ","(Se você não passar nada como argumento, ele vai separar tudo em vírgulas).


## Conclusão

- Podemos transformar uma tipo de dado *" String "* em um tipo de dado *" Array "* atráves do Método split().

- Podemos transformar um tipo de dado Array em um tipo de dado String atráves do Método join().
