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
  const [state, setState] = useState({})

  const handleFragmentClick = (newFragment) => {
    state.fragments
    ? setState({fragments: [...state.fragments, newFragment]})
    : setState({fragments: [newFragment]})

  }
  return (
    <div className="App">
      <LeftPanel fragments={state.fragments} />
      <RightPanel fragments={fragmentList} clickHandle={handleFragmentClick} />
    </div>
  );
}

export default App;
