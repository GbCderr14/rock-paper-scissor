import Rock from "./rock";
import Paper from "./paper";
import Scissor from "./scissor";
// import Scissor from "./scissor";
function Rps(props)
{
    return <div id="rps">
        <svg xmlns="http://www.w3.org/2000/svg" width="313" height="278" id="triangle" >
      <path
        fill="none"
        stroke="#000"
        strokeWidth="15"
        d="M156.5 262L300 8H13z"
        opacity="0.2"
      ></path>
    </svg>
    <Paper class="paper" onClick={props.onClick}/>
    <Rock class="rock" onClick={props.onClick}/>
    <Scissor class="scissors" onClick={props.onClick}/>
    </div>;
}
export default Rps;