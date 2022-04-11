import { useEffect, useState } from 'react'

function App() {
  const [show, setShow] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const test = async ():Promise<void>=>{
    setName('')
     try {
      await fetch('http://localhost:4000/send',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name})
      })
      setShow(true)
     } catch (error) {
        console.log('getting error '+error)
     }
  }
  const onEnter = (e:any):void=>{
    if(e.key === 'Enter'){
      setShow(false)
      test()
    }
  }
  return (
    <div >
      <h1>this is pdf preview</h1>
      <input type="text" onKeyUp={(e)=>onEnter(e)} onChange={(e)=>setName(e.target.value)} value={name} />
      {
        show && <iframe title='pdfIfrem' style={{width:'40vw', height:'80vh'}} src="http://localhost:4000" frameBorder="0"></iframe>
      }
    </div>
  );
}

export default App;
