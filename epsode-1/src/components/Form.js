function Form() {

    function cadastrarUsuario(event) {
        event.preventDefault()
        console.log('Tudo okay')
    }

    return (
        <>
            <h1>Meu cadastro</h1>

            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome:" />
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
