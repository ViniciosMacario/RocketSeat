import React, {useEffect, useState} from 'react';
import './styles.css';
import {Card} from '../../components/Card'


export function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]); /*Estado responsável por armazenar os estudantes da lista de presença*/
  const [user, setUser] = useState({name: '', avatar: ''});

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudents(prevState => [...prevState, newStudent]); /*Vamos recuperar o que tinhamos antes no meu estado e juntar,logo em seguida criar um novo valor */
  }

  useEffect(() => {
    //Corpo do UseEffect que será executado

    fetch('https://api.github.com/users/JackWyus')
    .then(response => response.json())
    .then(data => {
      setUser({
        avatar: data.avatar_url,
        name: data.name,
      })
    });
  },
  [
    //Para que serve esse Array aqui,ele serve para gente colocar quais são os estados que nosso UseEffect depende. quando nossa array estiver vazia, significa que que nossa useEffect será executado apenas uma única vez quando a tela for renderizada.
    //Agora, se colocarmos um estado como dependência na array(array de dependência), toda vez que esse estado for atualizado o UseEffect vai ser executado também, por padrão, ele sempre será executado na primeira renderizção da página.
    // exemplo abaixo;
    students
  ]);

  return (
    <div className='container'>
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de Perfil" />
        </div>
      </header>
      <input 
        type="text" 
        placeholder="Digite seu nome"
        onChange={e =>  setStudentName(e.target.value)}
        />

      <button type="button" onClick={handleAddStudent} >Adicionar</button>

      {
        students.map(student => (
        <Card 
          key={student.time}
          name={student.name} 
          time={student.time}
        />
        ))
        }
    </div>
  )
}


/*
7º UseEffect

Quando um UseEffect é executado assim que nossa interface renderizada,ou seja, é automático 









6º Hooks

O useState ou useEffet  são exemplos de hooks

Os hooks são funções que permite você ligar/conetar os recursos de estado e ciclo de vida do React
a partir de componentes totalmente funcionais.


5º Key

Quando você tem componentes que são gerados a partir de uma estrutura de repetição
utilizar uma chave ÚNICA para evitar complicações performáticas...



4º Imutabilidade 
diz que o conteúdo, não deve ser alterado, mas sim substituido,pois é mais performático

---------------------------------------------------------------------------------------------------------


3º > Estado

O useState() é um Gancho que permite que você tenha variáveis ​​de estado em componentes funcionais.
O gancho useState é uma função especial que assume o estado inicial como um argumento e retorna uma matriz de duas entradas. 
useState permite a construção de um Estado

  > Sintaxe; 
  O primeiro elemento é o estado inicial e o segundo é uma função que é usada para atualizar o estado.
    const [state, setState] = useState(initialstate).

  Importando: para usar useState, você precisa importar useState do react como mostrado abaixo:
  import React, {useState} from 'react';

  um estado, possui dois elementos
  primeiro, onde ele será guardado o conteúdo do estado,pode ser qualquer nome e logo em seguida a função que vai atualizar o estado
  sempre começa com set Nome da função

---------------------------------------------------------------------------------------------------------


2º propriedade "onChange={}" toda vez que um valor do conteúdo do input muda, ele me entrega um evento;

onChange={e =>  e.target.value} -> dentro desse evento, podemos acessar qual é o valor atual que 
está dentro do input toda vez que ele muda, vamos passar esse valor para handleNameChange que é uma função,
estamos passando qual é o valor atual do input, e essa informação será passada toda vez que o conteúdo do
input mudar


para mostrar o conteúdo de uma variável, vc deve usar as chaves {}.

Quando precisamos utilizar o conteúdo de uma variável para refletir na interface, vamos usar o Estado
porque uma variável comum, ela não consegue refletir na interface o novo conteúdo.


---------------------------------------------------------------------------------------------------------

1º O que é Componetização?

Componentização no react é uma forma de simplificar estruturas da sua aplicação em pequenas parte que podem ser reautilizadas.

Propriedades

podemos obter as propriedades atráves de "props"
ex:
{props.nome da propriedade que queremos acessar}

pode ser escrita da seguitne forma também ;
nesse caso vc não precisa utilizar o props, mas é necessário colocar as chaves(vc está desestruturando)

export function Card({name, time}){
    return(
        <div className='card'>
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    )
}


*/

 
