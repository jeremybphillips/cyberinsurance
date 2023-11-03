import questions from './lib/questions';
import Section from './components/Section';

import './App.css';

const questionSetOne = questions.slice(0, 6);
const questionSetTwo = questions.slice(6);

function App() {
  function processForm() {
    // calculate percentages
    window.print();
  }

  function resetForm() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function(radioButton) {
      radioButton.checked = false;
    });
  }

  return (
    <div className="App">
      <div className='content'>
        <button onClick={processForm} style={{width: '60px'}}>Print</button>
        <button onClick={resetForm} style={{width: '60px'}}>Reset</button>
        <h1>Insurance Assessment</h1>
        <Section questions={questionSetOne} />

        <div
          style={{
            background: 'rgb(221, 221, 228)',
            height: '1px',
            margin: '30px 0px'
          }}
        />

        <Section questions={questionSetTwo} />
      </div>
    </div>
  );
}

export default App;
