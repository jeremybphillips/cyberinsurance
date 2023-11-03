import { useState } from 'react';
import CheckBox from '../CheckBox';
import './QuestionRow.css';

export const COLORS = {
    WHITE: '#fff',
    GREY: '#f9f9f9'
};

function QuestionRow({
    background = COLORS.WHITE,
    question = '',
    hasComment = false,
    isEditing = false
}) {
    const [value, setValue] = useState(question);
    const [checkedValue, setCheckedValue] = useState();
    const randomId = 'response_' + Math.floor(Math.random() * 1000);

    function handleChecked(e) {
        setCheckedValue(e.target.value);
    }

    return (
        <div className='row' style={{ background }} >
            <div className='answer'>
                <div className='radios'>
                    <label>
                        <input type="radio" name={randomId} value="Yes" onChange={handleChecked} /> Yes
                    </label><br />
                    <label>
                        <input type="radio" name={randomId} value="No" onChange={handleChecked} /> No
                    </label>
                </div>
                <CheckBox value={checkedValue} className='checkedAnswer' />
            </div>
            <div className='question'>
                {isEditing ?
                    <input type='text' value={value} onChange={(e) => setValue(e.target.value)} style={{ width: '100%' }} /> :
                    <span className='text'>{value}</span>
                }
                {hasComment && (
                    <textarea
                        className='comment'
                        style={{
                            background: background === COLORS.WHITE ? COLORS.GREY : COLORS.WHITE
                        }}
                        placeholder="Comment text here"
                    />
                )}
            </div>
        </div>
    );
}

export default QuestionRow;