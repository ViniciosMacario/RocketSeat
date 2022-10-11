// Criação de Promessa
    // Instânciando uma Promessa
        //Após a Instância, precisamos dar o parecer; resolve or reject 
            // Baseado no resultado da promessa, ela vai dar um erro ou ela vai dar Sucesso
const myPromise = new Promise((resolve, reject) => {
    // Vamos imaginar que recebemos essa dado 'nome' de um requisição externa.
    const nome = 'Matheuss'

    if(nome === 'Matheus'){
        resolve('Usário Identificado!')
    }else{
        reject('Usuário não identificado!')
    }
});

// A instância da Promise sozinha não será executada, será chamada apenas quando encontrar o método 'then()' encadeado nela.


// vamos usar o 'then' para a Promessa ser iniciada
    // vamos passar um argumento qualquer para o 'then' que vai significar o que estamos esperando da promessa, ou seja, seu resultado.
        //Vamos passar por exemplo o, 'data' = dados.
            //Basicamente, o data vai ser a resposta da Promise, ela vai ser reject or resolve
myPromise.then((data) => {
    console.log(data)
})


//Vamos simplificar nossas instruções com:
    // Encadeamento de 'Then()'

    const myPromise2 = new Promise((resolve, reject) => {
        const nome = 'Matheus'
    
        if(nome === 'Matheus'){
            resolve('Usário Identificado!')
        }else{
            reject('Usuário não identificado!')
        }
    });

    //Vamos fazer algumas manipulações no resultado da Promisse.
    myPromise2
        .then((data) => {return data.toLowerCase()}) // Colocando todos os caracteres minúsculos. 
        .then((stringModificada) => {console.log(stringModificada)}) //O primeiro 'then - 44' vai passar os dados modificados para o segundo 'then' e será armazenada dentro do parametro 'stringModificada'.

        //É interessante o encadeamento, pois podemos manipular os dados para podermos usar nas nossas App.

// Vamos aprender a tratar os erros(reject) resultantes da Promises
    // cath()

    const myPromise3 = new Promise((resolve, reject) => {
        // Vamos alterar o nome de proposito, para ele ser 'reject' e cair na nossa tratativa de erro.
        const nome = 'João' 
    
        if(nome === 'Matheus'){
            resolve('Usário Identificado!')
        }else{
            reject('Usuário não identificado!')
        }
    });

    myPromise3
        .then((data) => console.log(data)) 
        .catch((error) => {console.log('Aconteceu um erro inesperado: '+ error)})

// Resolvendo várias Promisses de uma vez.
    //O método responsável por pegar todos as Promisse de uma vez é o all()
        // Ele é um método que vai pegar várias Promisse dentro de um Array e vai tentar executar todas elas e mandar a resposta.
            // o Método all() precisa que todas as Promisse sejam resolvidas para ele finalmente mandar um resposta.
        const p1 = new Promise((resolve,reject) =>{
            // Vamos simular uma requisição demorada e observe o comportamento do fluxo do código.
                // Veja que a resolução não é imediata e o código segue seu fluxo natural independente do resultado da Promisse
            setTimeout(() =>{
                resolve('P1 ok!')
            }, 3500)
        });

        const p2 = new Promise((resolve,reject) =>{
            resolve('P2 ok!')
        });

        const p3 = new Promise((resolve,reject) =>{
            resolve('P3 ok!')
        });

        // Precisamos de um meio para resolver todas essas Promisse de uma vez, caso contrário, nosso contigo ficará muito poluido.
            //Solução

            // Vamos usar o método all para passar dentro delas todas as Promisse e logo em seguida, usamos o encadeamento 'then' para dar início a Promisse que será armazenada em 'data' em formato de Array
            // Lembrando que as Promisse são Assicronas, ou seja, ela não vai respeitar o fluxo do Código JavaScript que é sincrono.
                //A promisse não bloqueia o código, se existir algo de errado em alguma parte, o fluxo será lido de qualquer forma, pois a Promisse é independente
        const resolveAllPromisse = Promise.all([ p1, p2, p3 ]).then((data) => console.log(data))

        // Várias Promises com race
            //A diferença dele pra All é que, a primeira que for resolvida, vai ser enviada a mensagem de retorno


            const p4 = new Promise((resolve,reject) =>{
                setTimeout(() =>{
                    resolve('P4 ok!')
                }, 3500)
            });
    
            const p5 = new Promise((resolve,reject) =>{
                resolve('P5 ok!')
            });
    
            const p6 = new Promise((resolve,reject) =>{
                resolve('P6 ok!')
            });
            const resolveRacesPromisse = Promise.race([ p4, p5, p6 ]).then((data) => console.log(data))

console.log('Sincrono, resposta imediata, depois de todas as Promisses que são Assincronas')


// Fetch request na API do GitHub
    // Fecth API é usada para fazer requisições Assicronas, ou seja, ajax
        // o Fecth Api retorna uma Promisse
    const userName = 'JackWyus';
    //Temos a opção de colocarmos um segundo argumento que leva um objeto colocando parametros para a requisição
    fetch(`https://api.github.com/users/${userName}`, {
        method: 'GET',
        headers: {
            Accept: 'application/vnd.github.v3+json',
        }
    }).then((response) => {
        console.log(typeof response)
        //Podemos observar que os dados não estão construindo de maneira prática para a leitura.
            //na verdade, a resposta entrega informações até desncessária no momento, queremos apenas informações do usuários do Github.
        console.log(response)
        //Podemos modificar o resultado do fecth da seguinte maneira
        return response.json()
    }).then((data) => {
        console.log(`O nome do Usuário é : ${data.name}`)
    }).catch((error) => {
        console.log(`Houve algum erro: ${error}`)
    })
    