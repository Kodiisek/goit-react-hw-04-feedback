import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import { countTotalFeedback, countPositiveFeedbackPercentage } from './FeedbackUtils';

const FeedbackWidget = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1
    }));
  };

  const { good, neutral, bad } = feedback;
  const total = countTotalFeedback(feedback);
  const positivePercentage = countPositiveFeedbackPercentage(feedback);

  return (
    <div>
      <h2>Please leave feedback</h2>
      <FeedbackOptions onLeaveFeedback={handleFeedback} />
      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}

export default FeedbackWidget;
