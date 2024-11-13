import React from 'react'
import StudentRow from './StudentRow'
import './StudentTable2.css';

function StudentTable2({ students }) {
    
    return (
        <div>
            <h2>학생 정보</h2>
            <table className="student-table">
                <thead>
                    <tr>
                        <th>번호</th><th>이름</th><th>이메일</th><th>성별</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <StudentRow key={student.id} student={student} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default StudentTable2