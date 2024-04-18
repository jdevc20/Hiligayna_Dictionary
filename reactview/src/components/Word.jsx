import React from 'react';

function Word({ word, onClick }) {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        if (onClick) {
            onClick(word);
        }
    };

    return (
        <div
            className={`container-fluid word ${isHovered ? 'highlight' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            
        >
            <div className="container">
                <p>{word.word}</p>
            </div>
            
        </div>


    );

}

export default Word;
