import React from 'react'

function StudentTable() {
    const students = [
        { id: 1, name: "Alice", email: "alice@example.com", gender: "Female" },
        { id: 2, name: "Bob", email: "bob@example.com", gender: "Male" },
        { id: 3, name: "Charlie", email: "charlie@example.com", gender: "Male" },
    ];

    const studentRow = students.map((student) => (
        <tr key={student.id}>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.email}</td>
        <td>{student.gender}</td>
        </tr>
    ))
    return (
        <div>
            <h2>학생 정보</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>번호</th><th>이름</th><th>이메일</th><th>성별</th>
                    </tr>
                </thead>
                <tbody>
                    { studentRow }
                </tbody>
            </table>
        </div>
    )
}

export default StudentTable