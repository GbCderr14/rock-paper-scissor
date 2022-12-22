import Header from "./components/header"; 
import Rock from "./components/rock";
import Paper from "./components/paper";
import Scissor from "./components/scissor";
import Rules from "./components/rules";
import Back from "./components/back";
import PlayAgain from "./components/playagain";
import { useState } from "react";
function App() {
    const [clicked,setid]=useState(0);
    const[modalIsOpen,setModalIsOpen]=useState(false);
    const[rmodalIsOpen,setrModalIsOpen]=useState(true);
    function rulesHandler() {
    setModalIsOpen(true);
  }
  function gameHandler() {
    setrModalIsOpen(true);
  }
  function pgameHandler() {
    setid(1);
    setrModalIsOpen(false);
  }
  function rgameHandler() {
    setid(0);
    setrModalIsOpen(false);
  }
  function sgameHandler() {
    setid(2);
    setrModalIsOpen(false);
  }
  function closeModalHandler(){
    setModalIsOpen(false);
  }
  return (
    <div className="App">
      <Header score="0"/>
      {rmodalIsOpen ? <div id="rps">
        <svg xmlns="http://www.w3.org/2000/svg" width="313" height="278" id="triangle" >
      <path
        fill="none"
        stroke="#000"
        strokeWidth="15"
        d="M156.5 262L300 8H13z"
        opacity="0.2"
      ></path>
    </svg>
    <Paper class="paper" onClick={pgameHandler}/>
    <Rock class="rock" onClick={rgameHandler}/>
    <Scissor class="scissors" onClick={sgameHandler}/>
    </div>:<PlayAgain onClick={gameHandler} id={clicked}/>}
      {modalIsOpen ? <Rules onCancel={closeModalHandler}/>:null}
      {modalIsOpen ? <Back onClick={closeModalHandler}/>:null}
      <button onClick={rulesHandler} className="button">Rules</button>
    </div>
  );
}

export default App;
