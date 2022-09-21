## Exercícios

> 1º - Declare uma variável de nome weight
    Resposta:
        let weight 
> 2º - Que tipo de dado é a variável acima?
    Resposta:
        undefined
> 3º - Declare uma variável e atribua valores para cada um dos dados: 
    name:String, 
    age: Number(integer/inteiro), 
    stars: Number(float), 
    isSubscribed: boolean.  
       
    Resposta:
        let name = "Vinicios";
        let age  = 21;
        let weight = 65.5;
        let isSubscribed = true;

> 4º - A variável student abaixo é de que tipo de dado? 
    Resposta:
        Objetc

> 4.1º - Atribua a ela as mesmas propriedades e valores do exercício 3.
    Resposta:  
        let student = {
        name: "Vinicios",
        age: 21,
        weight: 65.5,
        isSubscribed: true
    };

> 4.2º - Mostre no console a seguinte mensagem:
    <name> de idade <age> pesa <weight> kg.
    Atenção, substitua <name><age> e <weight> pelos valores de cada propriedade do objeto.

    console.log(`O ${student.name} tem ${age} de idade e pesa ${stars} kg.`)

> 5º - Declare uma variável do tipo Array, dê nome de students e atribua a ela nenhum valor, ou seja, somente o Array vazio.
    Resposta:
        const students = [];

> 6º - Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4º.(Não copiar e colar o objeto, mas usar o obeto criado e inserir ele no Array).
    Resposta:
        let student = {
            name: "Vinicios",
            age: 21,
            stars: 65.5,
            isSubscribed: true
        };

        let students = []
        students = [student]
        console.log(students)

> 7º - Coloque no console o valor da posição zero do Array acima.
    Resposta:
        console.log(students[0])
> 8º - Crie um novo student e coloque na posição 1 do Array students
    Resposta:
        let student = {
            name: "Vinicios",
            age: 21,
            stars: 65.5,
            isSubscribed: true
        };

        let students = []
        students = [student]

        let student1 = {
            name: "Iasmin",
            age: 17,
            stars: 45,
            isSubscribed: false
        };

        //Sobescrevendo/ reatribuir
        students = [student,student1]

        // Outra forma de escrever isso 

        //Colocando o elemento em uma posição específica, não é recomendado por questão de segurança
        students[1] = student1

        console.log(students)

> 9º - Sem rodar o código responda qual é a resposta do código abaixo e por que?,
    console.log(a)
    var a = 1
    Resposta:
        > Undefined
        > Porque devido a variável ser "var" o JavaScript faz o que chamamos de elevação(hosting), onde ele coloca a variável acima do  console, mas não temos acesso ao valor, por isso fica como indefinido.
        var a 
        console.log(a)
        a = 1