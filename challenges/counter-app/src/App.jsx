import { useState } from 'react'
import logo from './avalith-logo.svg'
import './App.css'
import 'animate.css';

const Button = ({handler, text, type, className}) => {
  return (<button onClick={handler} type={type} className={className}>
            {text}
          </button>)
}

function App() {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <>
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className='mainTitle'>Counter App</h1>
            <div className='counterContainer'>
              <h2 className='counterDisplay'>{counter}</h2>
            </div>
            <div className='buttonsContainer'>
              <Button handler={increaseByOne} text={'+'} type={'button'} className={'button'}></Button>
              <Button handler={setToZero} text={'reset'} type={'button'} className={'button'}></Button>
              <Button handler={decreaseByOne} text={'-'} type={'button'} className={'button'}></Button>
            </div>  
        </header>     
      </div>
    </>
    
  )
}

export default App
