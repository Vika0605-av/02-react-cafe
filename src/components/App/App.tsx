import { useState } from 'react'
import css from './App.module.css'
import CafeInfo from "../CafeInfo/CafeInfo"
import  VoteOptions  from "../VoteOptions/VoteOptions"
import  VoteStats  from "../VoteStats/VoteStats"
import  Notification  from "../Notification/Notification"

interface Votes {
  good: number;
  neutral: number;
  bad: number;
}
type VoteType = "good" | "neutral" | "bad";
export default function App() {
  
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0
  });
  const handleVote = (type: VoteType) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1
    }));
  };
  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positivePercentage = totalVotes > 0 ? Math.round((votes.good / totalVotes) * 100) : 0;
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes > 0}
      />
      {totalVotes > 0 ? (
        <VoteStats  votes={votes} totalVotes={totalVotes}  positivePercentage={positivePercentage} />
      ) : (
        <Notification   message="No votes yet. Be the first to vote!" />
      )}
    </div>
  );
}