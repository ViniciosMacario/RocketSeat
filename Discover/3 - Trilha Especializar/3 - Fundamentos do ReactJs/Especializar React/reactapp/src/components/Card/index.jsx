import './styles.css';

export function Card(props){
    return(
        <div className='card'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}


/*

>  O que são componentes React JS?

    O que são componentes React? Geralmente, componentes React são como funções JavaScript.
    Eles aceitam entradas como propriedades (chamadas “props”) e retornam novos elementos React, os chamados JSX.

>   Componente funcional sem estado.

    Os componentes funcionais sem estado, são representados por funções JavaScript e como o nome sugere,
    não se preocupam (e nem devem se preocupar) com o gerenciamento de estado do componente,
    mas apenas com a apresentação dos dados na aplicação.

    esse componente recebe dados via propriedades. O React os encapsula em um objeto “props” que fica disponível para ser consumido dentro do componente.
*/