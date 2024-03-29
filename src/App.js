import React, {useState} from 'react';
import './App.css';
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'
import InfoModal from './components/InfoModal'

const fragmentList = [
  'hunger as',
  'a function of belief',
  'hunger, in this case,',
  "directly related to",
  'one’s willingness to indulge',
  'the innumerable sensory stimuli',
  'constantly lending the body reason',
  'for instance',
  "a rejection of margaret price's \nrejection of cartesian dualism",
  'because one cannot remember \nhaving ever been a bodymind, anyway',
  'anyway',
  'hunger as a function of',
  'belief',
  'itself',
  'a function of hunger',
  'and one will figure out what it’s all about in the \nblack hole at the center of that ourobouros',
  'hunger as mere sensation',
  'for instance',
  'hunger being',
  'one’s direct fucking line to god, \nvia simone weil anyway',
  'maybe just a direct line to simone weil',
  'which is probably good enough',
  'a tool, a cudgel',
  'heavy in the hand',
  'but which',
  'nevertheless',
  'hunger',
  'an impression',
  'hunger an image of',
  'the equation, but not necessarily that'
]

function App() {
  const [state, setState] = useState({fragments:[], lines:[]})
  const [modalOpen, setModalOpen] = useState(false)

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
      <RightPanel lines={state.lines} fragments={fragmentList} clickHandle={handleFragmentClick} />
      <LeftPanel fragments={state.fragments} />
      <button onClick={() => setModalOpen(true)} className="modal-link">?</button>
      <InfoModal isOpen={modalOpen}>
        <div className="modal-inner">
          “Tell yourself” is a poem by <a href="mailto:a.jinha.song@gmail.com">A. Jinha Song</a>, produced in collaboration with designer <a href="mailto:taylorwilhite@gmail.com">Taylor Wilhite</a>. 2019. Refresh this page to begin again.
        </div>
        <button onClick={() => setModalOpen(false)} className="modal-link">X</button>
      </InfoModal>
    </div>
  );
}

export default App;
