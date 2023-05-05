import { useToggle } from "./useToggle"

export const HideShow = () => {
    const [isVisible, toggle] = useToggle()

    return (
        <div>
            <button onClick={toggle} >{isVisible ? 'Hide' : 'Show'}</button>
            {isVisible && <h1>Hidden text</h1>}
        </div>
    )
} 