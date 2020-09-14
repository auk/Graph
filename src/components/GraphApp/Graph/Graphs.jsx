import React, { useEffect, useState } from "react";
import Card from '../Card/Card'
import { useSelector } from 'react-redux'
import { VictoryChart, 
         VictoryTheme,
         VictoryAxis, 
         VictoryLine } from "victory";
import Timer from '../Store/Timer'
import play from '../Ikonate/svg/play.svg';
import pause from '../Ikonate/svg/pause.svg';


const Graphs = () => {
 
let State = useSelector(state => state);
let dataState = State[0].data;
let normalization = (data) => {
  let result = [];
  for (const [index, value] of data.entries()) {
    let obj = JSON.parse(value);
    let obj1 = {x: new Date (Number(obj.x)), y:Number(obj.y)};
    result.push(obj1);
  }
  return result;
 } 
 
const [stop, setStop] = useState(true);
const stopTimer = (e) => {setStop(true)}; 
const startTimer = (e) => {setStop(false)};       
    
return (
<Card wrapperGraphs>
 <Card wrapperControl>
 <Card wrapperTimer>{stop == false ?  <Timer/> : <div>stop</div>}</Card>
 <div className = 'controlButton' onClick={stopTimer} >
 <div className = 'innerButton'>
   <img className ='playSvg' src ={pause} alt='||' />
 </div></div>
 <div className = 'controlButton' onClick={startTimer} >
   <div className = 'innerButton'>
   <img className ='playSvg' src ={play} alt='>' />
 </div></div>
 </Card>
 <Card victoryChart>
 <svg> 
<VictoryChart
scale={{ x: "time" , y:"linear"}}
 standalone={false}
 width={1600} height={500}
 theme={VictoryTheme.material}
 minDomain={{ y: 0 }}
>
 <VictoryAxis 
  orientation="bottom"/>
 <VictoryAxis dependentAxis
  orientation="left"/>
  {
   dataState.dataset.map(obj => (

    <VictoryLine
     interpolation="monotoneX"
     scale={{ x: "time" , y:"linear"}}
     style={{ data: { stroke: obj.color, strokeWidth: 3 }}}
     data = {normalization(obj.data)}
   />
  ))
 }
</VictoryChart>
</svg> 
 {/* <div className = 'test'/> */}
 </Card>
 
 </Card>
)

};
export default Graphs;