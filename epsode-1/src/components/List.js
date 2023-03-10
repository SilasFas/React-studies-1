// REACT FRAGMENTS = <></>

import Item from "./Item"

function List() { // 

    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca = 'Ferrari'/>
                <Item marca = 'Fiat'/>
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