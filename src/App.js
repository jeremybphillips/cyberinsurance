import { useState } from 'react';
import questions from './lib/questions';
import Section from './components/Section';
import HorizontalRule from './components/HorizontalRule';

import './App.css';

const questionSetOne = questions.slice(0, 6);
const questionSetTwo = questions.slice(6);

function ScoreBlock({score = '0'}) {
  return (
    <>
      <HorizontalRule />
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{
          width: '60px',
          height: '20px',
          background: '#EF4265 0% 0% no-repeat padding-box',
          display: 'inline'
        }}>
          <span style={{color: '#fff', padding: '10px', fontWeight: 700}}>{score}%</span>
        </div>
        <span style={{marginLeft: '10px'}}>{`Overall Cyber Insurability Score: ${score}%`}</span>
      </div>
      <HorizontalRule />
    </>
  );
}

function App() {
  const [score, setScore] = useState();

  function processForm() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const count = [...radioButtons].filter((button) => button.checked && button.value === 'Yes');
    const percent = (count.length / (radioButtons.length / 2)) * 100;
    setScore(Math.round(percent));
    window.print();
  }

  function resetForm() {
    window.location.reload();
  }

  return (
    <div className="App">
      <div className='content'>
        <button onClick={processForm} style={{width: '60px'}}>Print</button>
        <button onClick={resetForm} style={{width: '60px'}}>Reset</button>
        <div style={{marginBottom: '15px'}}>
          <h1 style={{marginBottom: '5px'}}>INSURANCE ASSESSMENT</h1>
          <h2 style={{marginBottom: '5px', marginTop: '5px'}}>CLIENT NAME</h2>
        </div>
        <div style={{marginBottom: '20px'}}>
        Conducted on:<br />
        Date Accepted:<br />
        Reviewer Name:
        </div>

        <ScoreBlock score={score} />

        <Section questions={questionSetOne} />

        <HorizontalRule />

        <Section questions={questionSetTwo} />

        <ScoreBlock score={score} />
      </div>
    </div>
  );
}

export default App;
