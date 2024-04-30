import React from "react";

const Livescorecard = (props) => {
    console.log(props); 
  return (
    <div style={{background:" ",margin:"20px"}}>
        {props.inf.score.map((sc)=>{
            return(<div className=" livescorecard" >
            <div className="div1">Inning : {sc.inning} </div>
            <div className="div2">Runs : {sc.r} </div>
            <div className="div3">Wickets : {sc.w} </div>
            <div className="div4">Overs : {sc.o} </div>
          </div>)
        })}
    </div>
  );
};
export default Livescorecard;