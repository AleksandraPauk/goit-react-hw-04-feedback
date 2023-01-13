import PropTypes from 'prop-types';

export const Statistics = ({ votes, total, positivePercentage }) => {
  const { good, neutral, bad } = votes;
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total()}</p>
      <p>Positive feedback: {positivePercentage()}</p>
    </>
  );
};

Statistics.propTypes = {
  votes: PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }),
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
