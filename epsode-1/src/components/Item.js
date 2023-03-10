import Proptypes from 'prop-types' //pacote que já vem com react

function Item({ marca, ano_lancamento }) {

    return (
        <>
            <li>
                {marca} - {ano_lancamento}
            </li>
        </>
    )
}

Item.proptypes = { // letra minuscula

    marca: Proptypes.string, // transformando a marca em string
    ano_lancamento: Proptypes.number, // transformando em número
}

Item.defaultProps = {
    marca: 'faltou a marca',
    ano_lancamento: 0,
}

export default Item