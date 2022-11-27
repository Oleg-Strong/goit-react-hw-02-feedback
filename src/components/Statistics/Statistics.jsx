import css from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.statisticsList}>
      <li className={css.statisticsItem}>Good: {good}</li>
      <li className={css.statisticsItem}>Neutral: {neutral}</li>
      <li className={css.statisticsItem}>Bad: {bad}</li>
      <li className={css.statisticsItem}>Toal: {total}</li>
      <li className={css.statisticsItem}>
        PositivePercentage: {positivePercentage}%
      </li>
    </ul>
  );
};
export default Statistics;
