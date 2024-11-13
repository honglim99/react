import React from 'react'
import StudentTable2 from './StudentTable2';

function App() {
    const students = [
        { id: 1, name: "Alice", email: "alice@example.com", gender: "Female" },
        { id: 2, name: "Bob", email: "bob@example.com", gender: "Male" },
        { id: 3, name: "Charlie", email: "charlie@example.com", gender: "Male" },
        ];
    return (
        <div>
            <StudentTable2 students={students} />
        </div>
    )
}

export default App