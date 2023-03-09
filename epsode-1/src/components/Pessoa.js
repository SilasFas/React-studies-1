
/*
function Pessoa(props) {

    return (

        <div>
            <h2>Name: {props.name}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissao: {props.profissao}</p>
            <img src={props.foto} alt={props.name}></img>
        </div>
    )
}

export default Pessoa
*/

function Pessoa({name, idade, profissao, foto}) {

    return (

        <div>
            <h2>Name: {name}</h2>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
            <img src={foto} alt={name}></img>
        </div>
    )
}
export default Pessoa