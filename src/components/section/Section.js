import { FeedbackContainer, FeedbackTitle } from "./Section.styled";
import PropTypes from "prop-types";

function Section({ title, children }) {
  return (
    <FeedbackContainer>
      <FeedbackTitle>{title}</FeedbackTitle>
      {children}
    </FeedbackContainer>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
