import React, { useState } from 'react';
import Poll from 'react-polls';
 


function Polls({user,story}){
  
  const [pollAnswers, setPollAnswers] = useState([
  { option: story[user.level].choices[0], votes: 8 },
  { option: story[user.level].choices[1], votes: 3 }
  ]
    )

   function handleVote(voteAnswer) {
     console.log("VOTEANSWER",voteAnswer)
    const newPollAnswers = pollAnswers.map(answer => {
      if (answer.option === voteAnswer) answer.votes++
      return answer
    })
    setPollAnswers({
      pollAnswers: newPollAnswers
    })
  }

  return (
    <div className= "Container fixed-bottom">
    <div className="row">
        <p>{story[user.level].story}</p>
        <Poll answers={pollAnswers} onVote={handleVote} />
    </div>
    </div>
      
    );
  
}

export default Polls;


