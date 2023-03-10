// REACT FRAGMENTS = <></>

import Item from "./Item"

function List() { // 

    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca='Ferrari' ano_lancamento={1985} />
                <Item marca='Fiat' ano_lancamento={1964}/>
                <Item marca='Renault' ano_lancamento={1999}/>
                <Item marca={'Chevrolet'} ano_lancamento= {1999}/>
                <Item/>
            </ul>
        </>
    )
}

export default List

/*
function List() { // 

    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>

        </>
    )
}

export default List
*/