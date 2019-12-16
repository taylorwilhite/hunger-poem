import React, {useState} from 'react';
import './App.css';
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'

const fragmentList = [
  'Hunger as a function of belief',
  'Hunger, in this case,',
  'directly related to',
  "one's willingness to indulge",
  'the innumerable sensory stimuli',
  'constantly lending the body reason',
  'for instance',
  'which is iteself a function of grief'
]

function App() {
  const [state, setState] = useState({fragments:[], lines:[]})

  const handleFragmentClick = (newFragment, id) => {
    const newLine = state.current || state.current === 0
    ? {from: state.current, to: id}
    : null
    setState({
      ...state,
      fragments: [...state.fragments, newFragment],
      lines: newLine ? [...state.lines, newLine] : [...state.lines],
      current: id
    })
  }
  return (
    <div className="App">
      <LeftPanel fragments={state.fragments} />
      <RightPanel lines={state.lines} fragments={fragmentList} clickHandle={handleFragmentClick} />
    </div>
  );
}

export default App;
