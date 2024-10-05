import { useState } from "react"
import Modal from "react-modal"
import './App.css'
import {questions} from "./components/questions"
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

Modal.setAppElement('#root')

export default function App(){

  const[check,setcheck]=useState(false)
//----------------ALL functionality here--------------------------
  function Main()
{
 
const[modalIsOpen, setIsOpen] = useState(false)
const[Qindex,setQindex]=useState(0)
const[score,setScore]=useState(0)
let Question=questions[Qindex]


// -----------------TO RESET-------------------------------
function reset(){
  setIsOpen(false)
  setQindex(0)
  setScore(0)
  toast.info("Quiz reseted !!!") 
}
// -----------------main checker----------------------

function handleclick(props){
  
  if(props===Question.answer){
    toast.success("Correct Answer!!!")
    setScore(score+1)
    
  }
  else{
    toast.error("Wrong Answer!!!")
  }
  setQindex(Qindex+1)
  
}
// -------------------------------------------------------
function jumpnext(){
  setQindex(Qindex+1)
}

if(Qindex<questions.length)
{
  
  return (<>
  <div className="main-board">
    <header><h1>Quiz App</h1></header>
    <main>
      <div className="board">
        <h2>{Question.question}</h2>
        <ul>
          {Question.options.map((option,index)=>(
            <button key={index} onClick={()=>handleclick(option)} value={option}>{option}</button>
          ))}
        </ul>
      </div>
    </main>
    <footer>
      <Modal 
      isOpen={modalIsOpen} 
      style={
        {
          overlay:{
          backgroundColor:'#141414'
          },
          content:{
            backgroundColor:'rgb(42, 41, 41)',
            textAlign:'center',
            borderRadius:'15px',
            padding:'20px',
            height:'50%',
            width:'50%',
            fontFamily:'Arial, sans-serif',
            fontSize:'32px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            cursor:'pointer',
            marginTop:'170px',
            transition:'background-color 0.3s ease',
            '&:hover':{
              backgroundColor:'rgb(32, 32, 32)'
            },
            top:'25%',
            left:'50%',
            transform:'translate(-50%, -50%)',
            position:'absolute',
            boxShadow:'1px 1px white',
          }
        }
      }>
        <div className="starting">
        <h1>Do you want to Restart?</h1>
        <button  onClick={reset}>Yes</button>
        <button  onClick={()=>setIsOpen(false)}>No</button>
        </div>
        
      </Modal>

    <button className="left" onClick={jumpnext}>Next</button>
    <button className="right" onClick={()=>setIsOpen(true)}>Restart</button>
    </footer>
    <ToastContainer  stacked/>
  </div>
  </>)}
  else {
    
    return (<><Modal 
      isOpen={modalIsOpen} 
      style={
        {
          overlay:{
          backgroundColor:'#141414'
          },
          content:{
            backgroundColor:'rgb(42, 41, 41)',
            textAlign:'center',
            borderRadius:'15px',
            padding:'20px',
            height:'50%',
            width:'50%',
            fontFamily:'Arial, sans-serif',
            fontSize:'32px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            cursor:'pointer',
            marginTop:'170px',
            transition:'background-color 0.3s ease',
            '&:hover':{
              backgroundColor:'rgb(32, 32, 32)'
            },
            top:'25%',
            left:'50%',
            transform:'translate(-50%, -50%)',
            position:'absolute',
            boxShadow:'1px 1px white',
          }
        }
      }>
        <div className="starting">
        <h1>Do you want to Restart?</h1>
        <button  onClick={reset}>Yes</button>
        <button  onClick={()=>setcheck(false)}>No</button>
        </div>
        
      </Modal><div className="starting">Quiz Finished!!! Your Score is {score}/{questions.length}</div>
      <button className="main-btn" onClick={()=>setIsOpen(true)}>OK</button></>
    )
  }
}
  if(check){
    return (<Main/>)
  }
  else{
    return (<><div className="starting">Welcome to Quiz App!!!</div><div className="starting"> Do you want to start Quiz? </div>
      <button  className="main-btn" onClick={()=>setcheck(true)}>Start Quiz</button></>)
  }
   
  
}