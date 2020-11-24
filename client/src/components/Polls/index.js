import React, { useState } from 'react';
import Poll from 'react-polls';
 


function Polls({user,story}){
  
  const [pollAnswers, setPollAnswers] = useState(
    story[user.level].choices.map(choice => {
      return(
        { option: choice, votes: 0 }
      )
    })

  
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
        <Poll  classname="col btn" answers={pollAnswers} onVote={handleVote} />
    </div>
    </div>
      
    );
  
}

export default Polls;


