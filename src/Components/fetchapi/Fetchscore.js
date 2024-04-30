import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../Cards";

function Fetchscore() {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    axios.get("https://api.cricapi.com/v1/matches?apikey=ea674787-d3ad-4831-a1d7-8167ff40c7f1&offset=0")
      .then((res) => {
        console.log(res.data.data);
        setMatches(res.data.data);
      })
  }, []);

  return(
    <div style={{display:"flex",flexWrap:"wrap"}}>
        {matches.map((match) => {
          return(
            <Cards inf={match} />
            )
        })
      }
    </div>
    
  );
}

export default Fetchscore;
