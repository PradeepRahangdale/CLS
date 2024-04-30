import React from "react";

const Cards = (props) => {
  // console.log(props,"123")
  return (
    <div className="card">
      <div className="flex cardInner">
        <div>{props.inf.name}</div>
        <div>{props.inf.date}</div>
        <div>{props.inf.country}</div>
      </div>
      <div className="team"> 
        {
            props.inf.teamInfo?props.inf.teamInfo.map((team,index)=>{
                console.log(index)
                return( 
                <div className="flex">
                    <div className="flag flex"><img src={team.img} style={{width:"10px",height:"10px"}}/>
                    <div>{team.shortname?team.shortname:"nth"}</div></div>
                    <div>{props.inf.score? props.inf.score[index]?<span>{props.inf.score[index].r}/{props.inf.score[index].w } ({props.inf.score[index].o})</span>:"":""}</div>
                </div>)
            }):""
        }
       
        
      </div>
      <div>{props.inf.matchStarted?"match is live":"----"}</div>
    </div>
  );
};
export default Cards