import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedbackOptions}>
      {options.map(option => {
        return (
          <button
            onClick={() => onLeaveFeedback(option)}
            key={option}
            type="button"
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
export default FeedbackOptions;
