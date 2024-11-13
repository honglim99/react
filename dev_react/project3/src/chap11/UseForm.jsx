import React, { useState } from 'react';

function UseForm() {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        age: '',
        fruit: ''
    });

    const [submittedData, setSubmittedData] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    return (
        <div>
            <h2>사용자 정보 입력</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>이름: </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>성별: </label>
                    <input
                        type="radio"
                        name="gender"
                        value="남성"
                        checked={formData.gender === '남성'}
                        onChange={handleChange}
                    />
                    남성
                    <input
                        type="radio"
                        name="gender"
                        value="여성"
                        checked={formData.gender === '여성'}
                        onChange={handleChange}
                    />
                    여성
                </div>
                <div>
                    <label>나이: </label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>좋아하는 과일: </label>
                    <select
                        name="fruit"
                        value={formData.fruit}
                        onChange={handleChange}
                    >
                        <option value="">선택하세요</option>
                        <option value="사과">사과</option>
                        <option value="바나나">바나나</option>
                        <option value="포도">포도</option>
                        <option value="체리">체리</option>
                    </select>
                </div>
                <button type="submit">제출</button>
            </form>

            {submittedData && (
                <div style={{ marginTop: '20px' }}>
                    <h3>입력한 사용자 정보</h3>
                    <p>이름: {submittedData.name}</p>
                    <p>성별: {submittedData.gender}</p>
                    <p>나이: {submittedData.age}</p>
                    <p>좋아하는 과일: {submittedData.fruit}</p>
                </div>
            )}
        </div>
    );
}

export default UseForm;
