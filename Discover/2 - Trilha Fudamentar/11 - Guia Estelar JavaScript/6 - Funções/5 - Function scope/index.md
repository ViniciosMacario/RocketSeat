## Function scope

> Parâmetros, mesmo se tiverem o mesmo nome que alguma outra variável do seu código, são apenas modificados e persistem no escopo da função.

```js
    // Primeira Parte

    let subject; //Só lembrando, quando você somente declarar uma variável, mas não atribui valor, o valor sempre será undefined.

    function createThink(subject){
        return subject;
    };

    console.log(createThink(subject));

    // Segunda Parte

    let subject = 'create video';

    function createThink(subject){
        return subject;
    };

    console.log(subject);
    console.log(createThink(subject));
    //Ambas vão retornar : 'create video'

    //Terceira parte 

    let subject = 'create video';

    function createThink(subject){
        subject = 'study'; // Não importa o que estamos passando para a função como parâmentro, estamos trocando seu valor agora.
        return subject;
    };

    console.log(subject);
    console.log(createThink(subject));
    //A primeira vai retornar create video e a segunda study.

    // Quarta parte

    let subject = 'create video';

    // o Erro comum é você olhar o nome da variável let "subject" e acreditar que você pode reescrever ela dentro da função quando na verdade, 'subject' dentro da função é um parâmetro e não uma variável, é um scopo totalmente diferente.
    //A partir do momento que a função não tem parâmetro, ai sim é possível fazer a sobreescrição, ao executar a função, ele vai sobreescrever a variável let subjecte passar a ter o valor de 'study', a função vai pegar o subject do escopo mais próximo.
    //Então só vai existir um novo subject se existe um novo escopo que será passado atráves do parâmetro

    function createThink(subject){
        subject = 'study'; 
        return subject;
    };

    console.log(subject);
    console.log(createThink(subject));
    console.log(subject);

    // Quinta parte

    
    let subject;

    function createThink(){
        subject = 'study'; 
        return subject;
    };

    console.log(subject);
    console.log(createThink()); // se a função não tivesse o "return", ela retornária "undefined"
    console.log(subject); // O valor é study também, pois ele foi atualizado em razão da função createThink, e isso aconteceria mesmo sem o return, pois a declaração subject = 'study';  já é uma atualização da variável de fora.
```
