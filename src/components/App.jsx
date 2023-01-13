import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

const assessmentList = [
  { id: 'good', title: 'Good' },
  { id: 'neutral', title: 'Neutral' },
  { id: 'bad', title: 'Bad' },
];

export const App = () => {
  const [votes, setVoutes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleCountFeedback = event => {
    const { name } = event.target;
    setVoutes(prev => ({ ...prev, [name]: prev[name] + 1 }));
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  };

  const countTotalFeedback = () => {
    const values = Object.values(votes);
    const totalSum = values.reduce((total, value) => {
      return total + value;
    });
    return totalSum;
  };

  const countPositiveFeedbackPercentage = () => {
    if (votes.good >= 1) {
      const roundSum = Math.ceil((votes.good / countTotalFeedback()) * 100);
      const feedbackPercentage = `${roundSum + '%'}`;
      return feedbackPercentage;
    }
  };

  const totalSum = countTotalFeedback();

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={assessmentList}
          onLeaveFeedback={handleCountFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {totalSum === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            votes={votes}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </>
  );
};
