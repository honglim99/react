import React, { useState } from 'react'
import Card from '../chap12/Card';

const styles = {
    container: {
        padding: 16,
    },
    inputContainer: {
        marginBottom: 16,
    },
    input: {
        marginRight: 8,
        padding: 8,
        border: "1px solid #ccc",
        borderRadius: 4,
    },
    addButton: {
        padding: 8,
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: 4,
        cursor: "pointer",
    },
    deleteButton: {
        marginTop: 8,
        padding: 8,
        backgroundColor: "#f44336",
        color: "white",
        border: "none",
        borderRadius: 4,
        cursor: "pointer",
    }
};

function TodoApp() {
    const [cards, setCards] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    // 할일 추가 버튼 클릭 시 새로운 카드 추가
    const handleAddCard = () => {
        if (!title || !content) {
            alert("제목과 내용을 입력해주세요.");
            return;
        }
        const newCard = {
            title: title,
            backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`, 
            content: content,
        };
        setCards([...cards, newCard]);
        setTitle(""); // 입력 필드 초기화
        setContent(""); // 입력 필드 초기화
    };
     // 카드 삭제 함수
     const handleDeleteCard = (index) => {
        setCards(cards.filter((_, i) => i !== index));
    };

    return (
        <div style={styles.container}>
            <h1>할일 추가하기</h1>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="제목을 입력하세요"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={styles.input}/>
                <input
                    type="text"
                    placeholder="내용을 입력하세요"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    style={styles.input}/>
                <button
                    onClick={handleAddCard}
                    style={styles.addButton}>
                할일 추가
                </button>
            </div>
            <div>
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        backgroundColor={card.backgroundColor}>
                        <p>{card.content}</p>
                        <button
                            onClick={() => handleDeleteCard(index)}
                            style={styles.deleteButton}>
                            삭제
                        </button>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default TodoApp