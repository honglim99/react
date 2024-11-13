import React from 'react'

const students = [
    {id:1, name: "Inje"},
    {id:2, name: "Steve"},
    {id:3, name: "Bill"},
    {id:4, name: "Jeff"},
]

function StudentList() {
    const studentList = students.map((student) => (<li key={student.id}>{student.name}</li>))

    return (
        <div>{studentList}</div>
    )
}

export default StudentList