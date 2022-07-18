import React from 'react'
var names = [
    'Alice',
    'Bob',
    'Charles',
    'Darwin',
    'Emily',
    'Fiona',
    'Garret'
]

function Names(props) {
    var namesList = []
    for (var i = 0; i <= props.upto; i++) {
        namesList.push(props.children(i, names))
        console.log(i)
    }
    return <div>{namesList}</div>
}

function NamesList(props) {

    let { upto = 2 } = { ...props }

    return (
        <Names upto={upto}>
            {(index, names) => { return <div key={index}>{names[index]}</div> }}
        </Names>
    )
}

export { NamesList }