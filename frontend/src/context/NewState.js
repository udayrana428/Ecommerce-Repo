import React,{useState} from 'react'
import App from '../App'
import NewContext from './newContext'
const NewState = (props) => {
    const [progress, setprogress] = useState(0)
  return (
    <NewContext.Provider value={{progress,setprogress}}>
        {props.children}
    </NewContext.Provider>
  )
}

export default NewState