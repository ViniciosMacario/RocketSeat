import axios from './node_modules/axios'
// Estamos acessando a API do Github e solicitando os dados do usuário via Axios.
// Para pegarmos um conteúdo, usamos o axios.get() e vai receber um argumento em formato de string. O axio vai devolver uma Promises


axios
  .get('https://api.github.com/users/jackwyus')
  .then(response => {
    const user = response.data
    axios.get(user.repos_url)
  })
  .catch(error => console.log(error))// capturando o erro para trata-lo