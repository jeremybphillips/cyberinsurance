import { useState } from 'react';
import QuestionRow, { COLORS } from './QuestionRow/QuestionRow';

function Section({questions = []}) {
    const [ list, setList ] = useState(questions);
    const [ isEditing, setIsEditing ] = useState();

    function handleAddClick() {
        setList([...list, { question: '' }]);
    }

    function handleEditClick() {
        setIsEditing(!isEditing);
    }

    return (
        <div className='section'>
            <div>
                <h1>Section Title</h1>
                <button className='add-button' onClick={handleAddClick}>Add</button>
                <button onClick={handleEditClick}>Edit</button>
            </div>
            {list.map(({question, hasComment}, i) => (
                <QuestionRow
                    key={i}
                    question={question}
                    hasComment={hasComment}
                    background={i % 2 === 0 ? COLORS.WHITE : COLORS.GREY}
                    isEditing={isEditing}
                />
          ))}
        </div>
    );
}

export default Section;
