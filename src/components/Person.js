import Proptypes from 'prop-types'

export const Person = ({ name, email, age, isMarried, friends }) => {

    return (
        <div>
            <h1>Name: {name}</h1>
            <h1>E-mail: {email}</h1>
            <h1>Age: {age}</h1>
            <h1>This person {isMarried ? 'is' : 'is not'} married</h1>
            {friends.map((friend, key) => (
                <h1 key={key}>{friend}</h1>
            ))}
        </div>
    )
}

Person.propType = {
    name: Proptypes.string,
    email: Proptypes.string,
    age: Proptypes.number,
    isMarried: Proptypes.bool,
    friends: Proptypes.arrayOf(Proptypes.string),
}