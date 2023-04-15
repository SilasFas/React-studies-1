import { useState, useEffect } from "react"

export const Text = () => {
    const [text, setText] = useState('')

    useEffect(() => {
        console.log('component mounted')
        
        return () => {
            console.log('component unmounted')
        }
    },[])

    return (
        <div>
            <input type="text"
                onChange={(event) => {
                    setText(event.target.value)
                }}
            />
            <h1>{text}</h1>
        </div>
    )
}

/*
> Lifecycle = is what happen from the birth of a componet to the death of a conponent.
>> There are 3 stages:

1 - mounting stage (the component apears in the screen)

2 - updating stage (changing the UI)

3 - unmounting stage  (the component stops apearing in the screen)


The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)

    useEffect(() => {
        console.log('component mounted')
    })
>>>You will see only the: mounting stage

    useEffect(() => {
        console.log('component mounted')
    },[text])
>>>You will see the: mounting stage and the updating stage

    useEffect(() => {
        console.log('component mounted')
        
        return () => {
            console.log('component unmounted')
        }
    },[])
>>>You will see the: mounting stage and the unmounting stage

*/