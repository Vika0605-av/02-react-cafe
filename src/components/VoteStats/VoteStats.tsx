import css from "./VoteStats.module.css";

interface VoteStatsProps { 

  votes: { good: number; neutral: number; bad: number };

  totalVotes: number;

  positivePercentage: number;

}

const VoteStats = ({ votes, totalVotes, positivePercentage }: VoteStatsProps) => {

  return (

    <div className={css.container}>

      <p className={css.stat}>Good: <strong>{votes.good}</strong></p>

      <p className={css.stat}>Neutral: <strong>{votes.neutral}</strong></p>

      <p className={css.stat}>Bad: <strong>{votes.bad}</strong></p>

      <p className={css.stat}>Total: <strong>{totalVotes}</strong></p>

      <p className={css.stat}>Positive: <strong>{positivePercentage}%</strong></p>

    </div>

  );

};

export default VoteStats;