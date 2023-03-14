import React from "react"

function Show(props) {
    return (
        <div>
            <h1>{props.student.name} {props.student.lastName}</h1>
            <p><strong>Age:</strong> {props.student.age}</p>
            <p><strong>Course:</strong> {props.student.course}</p>
            <p><strong>Grade:</strong> {props.student.grade}</p>
            <a href="/students">Back</a>
        </div>
    )
}

export default Show;