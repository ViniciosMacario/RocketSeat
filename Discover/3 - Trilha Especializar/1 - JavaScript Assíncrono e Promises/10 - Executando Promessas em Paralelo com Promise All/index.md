# Executando Promessas em Paralelo com Promise All


```js
import axios from 'axios';


// Trabalhando com mais de uma Promisse ao Mesmo tempo, damos o nome disso de 'agrupamento de Promises' usando Array. 
Promise.all([
    axios.get('https://api.github.com/users/jackwyus'),
    axios.get('https://api.github.com/users/jackwyus/respo')
])
//Ele só inícia o 'Then', quando todos os 'get' forem 'true'
// Vamos receber um Arrays de respostas
.then(responses => {
    console.log(responses[0].data.login)
    console.log(responses[1].data.length)
})
.cath(error => console.log(error.message))

//.message é para acessarmos somente a mensagem do erro com menos detalhes.

```

A biblioteca Axios usa por de baixo dos panos o fecth(), mas é mais fácil de trabalhar com ela do que o fecth().