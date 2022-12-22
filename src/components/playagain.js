import Rock from "./rock";
import Paper from "./paper";
import Scissor from "./scissor";
function PlayAgain(props) {
  // console.log(props.id);
  var rr2=props.id;
  var rr1 = Math.random();
  rr1 = rr1 * 3;
  rr1 = Math.floor(rr1);
  var sc=document.getElementById("score");
  sc=parseInt(sc.innerHTML);
  var sc1=document.getElementById("status");
  
  if(rr1==rr2){
    document.getElementById("score").innerHTML=sc;
    sc1.innerHTML="TIE BREAKER";
  }
  if(rr1==0 && rr2==1){
    document.getElementById("score").innerHTML=sc+1;
    sc1.innerHTML="YOU WON:)";
    
  }
  if(rr1==0 && rr2==2){
    document.getElementById("score").innerHTML=sc-1;
    sc1.innerHTML="YOU LOST:(";
  }
  if(rr1==1 && rr2==0){
    document.getElementById("score").innerHTML=sc-1;
    sc1.innerHTML="YOU LOST:(";
    
  }
  if(rr1==1 && rr2==2){
    document.getElementById("score").innerHTML=sc+1;
    sc1.innerHTML="YOU WON:)";
  }
  if(rr1==2 && rr2==0){
    document.getElementById("score").innerHTML=sc+1;
    sc1.innerHTML="YOU WON:)";
  }
  if(rr1==2 && rr2==1){
    document.getElementById("score").innerHTML=sc-1;
    sc1.innerHTML="YOU LOST:(";
  }
  return (
    <div class="row">
    <div className="play-again">
      {rr2 == 0 ?<div className="col-lg-4 ele"> <Rock class="prock" /><p className="chooser">You chose</p></div> : null}
      {rr2 == 1 ? <div className="col-lg-4 ele"><Paper class="ppaper" /><p className="chooser">You chose</p> </div>: null}
      {rr2 == 2 ? <div className="col-lg-4 ele"><Scissor class="pscissors" /><p className="chooser">You chose</p></div> : null}
      <button className="col-lg-4 pbutton" onClick={props.onClick}>
        Play Again
      </button>
      {rr1 == 0 ? <div className="col-lg-4 ele"><Rock class="prock" /> <p className="chooser">Computer chose</p></div>: null}
      {rr1 == 1 ? <div className="col-lg-4 ele"><Paper class="ppaper" /> <p className="chooser">Computer chose</p></div>: null}
      {rr1 == 2 ? <div className="col-lg-4 ele"><Scissor class="pscissors" /> <p className="chooser">Computer chose</p></div>: null}
    </div></div>
  );
}
export default PlayAgain;
