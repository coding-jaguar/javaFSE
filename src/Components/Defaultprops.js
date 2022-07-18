import React from 'react'

export default function Student(props) {

    let { name, id = Math.floor(Math.random() * 10000), enrolled = true } = { ...props }

    return (
        <div className='student'>
            <div>
                Student ID: {id}
            </div>
            <div>
                Name: {name}
            </div>
            <div>
                Enrolled: {enrolled ? 'Yes' : 'No'}
            </div>
        </div>
    )
}

export { Student }