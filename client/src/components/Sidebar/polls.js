import React, { useState } from 'react';
import Poll from 'react-polls';
 


function Polls({user,story}){
  const pollQuestion = ""
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
        <Poll question={pollQuestion} answers={pollAnswers} onVote={handleVote} />
    </div>
    </div>
      
    );
  
}

export default Polls;

// Declaring poll question and answers
// const pollQuestion = 'Is JERONIVOSH the best game ever?'
// const pollAnswers = [
//   { option: 'Yes', votes: 0 },
//   { option: 'Absolutely', votes: 0 }
// ]
 
// class Polls extends Component {
//   // Setting answers to state to reload the component with each vote
//   state = {
//     pollAnswers: [...pollAnswers]
//   }
 
  // Handling user vote
  // Increments the votes count of answer when the user votes
  // handleVote = voteAnswer => {
  //   const { pollAnswers } = this.state
  //   const newPollAnswers = pollAnswers.map(answer => {
  //     if (answer.option === voteAnswer) answer.votes++
  //     return answer
  //   })
  //   this.setState({
  //     pollAnswers: newPollAnswers
  //   })
  // }
 
//   render () {
//     const { pollAnswers } = this.state
//     return (
//       <div>
//         <Poll question={pollQuestion} answers={pollAnswers} onVote={this.handleVote} />
//       </div>
//     );
//   }
// };

