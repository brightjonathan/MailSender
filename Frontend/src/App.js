import axios from 'axios'
import {useState} from 'react'
import {sendMail} from './Utils/apiRoutes'

const App = () => {

  //
  const [sent, setSent] = useState(false);
  const [text, setText] = useState('')

  //
  const handleSend = async () =>{
     setSent(true)
     try {
        await axios.post(sendMail, {
          text
        })
     } catch (error) {
       console.log(error);
     }
  }

  return (
    <div className='App'>
      {!sent ? (
        <form onSubmit={handleSend}>
        <input type='text' value={text} onChange={(e)=> setText(e.target.value)} />
        <button type='submit'>Send Email</button>
    </form>
      ): (<h2>Email Sent</h2>) }
    
    </div>

  )
}

export default App
