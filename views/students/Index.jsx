import React from "react"

function Index(props) {

    return (
        <div>
            <h1>Student List</h1>
            <ul key={props.students.id}>
                {props.students.map((student, id) => 
                    <a href={`/students/${id}`}><li>{student.name} {student.lastName}</li></a>
                )}
            </ul>
        </div>
    )
}

export default Index;