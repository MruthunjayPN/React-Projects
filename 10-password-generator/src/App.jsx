import { useCallback, useEffect, useState , useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password , setPassword] = useState("")

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()-_=+[{]};:'\",<.>/?"

    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length +1)];
    }
    setPassword(pass)

  },[length, numberAllowed , charAllowed, setPassword] )

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed, generatePassword])

  return (
    <div className='w-full max-w-md mx-auto my-8 shadow-md rounded-lg px-4 text-orange-500 bg-gray-700 '>
      <h1 className='text-white text-center pt-3 text-lg'> Password Generator </h1>
      <div className='flex justify-center shadow rounded-lg overflow-hidden mt-4 mb-4'>
        <input type="text"
               placeholder='Password'
               value={password} 
               ref={passwordRef}
               readOnly
               className='outilne-none w-full py-1 px-3'/>
        <button className='min-w-9 py-1 px-3 text-white bg-blue-500 hover:bg-blue-600' 
                onClick={copyPasswordToClipboard}> copy </button>
      </div>

      <div className='flex justify-around text-sm gap-x-2 pb-5 pt-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
                id="lengths" 
                name="length" 
                min={8} max={50} 
                value={length} 
                onChange={(e) => setLength(e.target.value)} 
                className='h-5 w-20 text-blue-500 pr-2 cursor-pointer' />
          <label >Length({length})</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
                id="numbers" 
                name="Number" 
                defaultChecked={numberAllowed}
                onChange={() => { setNumberAllowed((prev) => !prev);}} />
          <label>Number</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
                id="Characters" 
                defaultChecked={charAllowed} 
                name="Character" 
                onChange={() => { setCharAllowed((prev) => !prev )}} />
          <label>Character</label>
        </div>
      </div>
     </div>
  )
}

export default App
