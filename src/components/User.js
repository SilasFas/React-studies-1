import { Person } from "./Person"

export const User = () => {
    return (
        <div>
            <Person
                name='Silas'
                email='silasfas@hotmail.com'
                age={26}
                isMarried={true}
                friends={['Jessica', 'Jake', 'Jerry', 'Jasmine']}
            />
        </div>
    )
}