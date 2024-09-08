import './App.css'
import Button2 from './Button2'

function App() {

  return (
    <>
      <Button2/>
    </>
  )
}

export default App

/* 1.so here i have installed bootstrap first by using "npm i bootstrap@5.3.3"
2. then imported this "import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
" in main.jsx file
3.then installed this 'npm install @popperjs/core
4. then imported this "import 'bootstrap/dist/js/bootstrap.bundle.min.js'" in main.jsx file
5. then you can copy paste code from the bootstrap without any issue
 */



//TEACHERS CODE 
/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  // function changeColor(color) {
  //   setColor(color)
  // }

  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          onClick={() => setColor('red')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'red'}}
          >Red</button>
          <button
          onClick={() => setColor('green')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'green'}}
          >Green</button>
          
          </div>
      </div>
    </div>
  )
}

export default App
 */