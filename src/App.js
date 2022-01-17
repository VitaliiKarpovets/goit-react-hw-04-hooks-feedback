import React, { Component } from "react";
import Section from "./components/section/Section";
import FeedbackOptions from "./components/feedbackOptions/FeedbackOptions";
import Statistics from "./components/statistics/Statistics";
import Notification from "./components/notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedback = (count) => {
    this.setState((prevState) => ({ [count]: prevState[count] + 1 }));
  };

  countTotalFeedback() {
    const arrayValue = Object.values(this.state);
    return arrayValue.reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions buttons={this.state} onFeedback={this.onFeedback} />
        </Section>
        <Section title={"Statistics"}>
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
