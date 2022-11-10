
//Aqui na verdade ele está fazendo um fet, ou seja, ele vai até esse site do 'jsonplaceholder' para buscar o resultado disso.
// Se você pegar o link e colocar no navegador, você vai ter acesso as informações contida no Json.
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'
fetch(API)
    .then(response => {
        console.log(response.status)
    })
    .catch(reject => {console.log(reject)})

console.log('Conectando API');

// res => {console.log(res.statusCode);} 
// é uma arrow função callback, pois será executada depois de um certo tempo.