import React from 'react';
import Word from './Word'; 
function WordResultList({ dictionaryObjects, onWordSelect }) {
    const handleWordSelect = (word) => {
        onWordSelect(word);
    };

    return (
        <div className="container word-result-list">
            {dictionaryObjects.map((word, index) => (
                <Word
                    key={index}
                    word={word}
                    onClick={() => handleWordSelect(word)}
                />
            ))}
        </div>
    );
}

export default WordResultList;
