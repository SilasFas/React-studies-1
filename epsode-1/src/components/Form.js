import { useState } from "react" // pacote que já vem com react

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(name) // name: para resgatar o valor
        console.log(password) // password: para resgatar o valor
        console.log(`Usuário ${name} foi cadastro com a senha ${password}.`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <>
            <h1>Meu cadastro</h1>

            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        id='name'
                        name='name'
                        placeholder="Digite o seu nome:"
                        onChange={(e) => setName(e.target.value)}
                    // setName para atribuir o valor
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Digite a sua senha:"
                        onChange={(e) => setPassword(e.target.value)}
                    // setPassword para atribuir o valor
                    />
                </div>
                <br></br>
                <div>
                    <input type="submit" value="Cadastra"></input>
                </div>
            </form>
        </>
    )
}
export default Form
