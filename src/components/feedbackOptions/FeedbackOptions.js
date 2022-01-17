import { BtnList, ListItem, Button } from "./FeedbackOptions.styled";
import PropTypes from "prop-types";

function FeedbackOptions({ buttons, onFeedback }) {
  return (
    <>
      <BtnList>
        {Object.keys(buttons).map((button) => (
          <ListItem key={button}>
            <Button type="button" onClick={() => onFeedback(button)}>
              {button}
            </Button>
          </ListItem>
        ))}
      </BtnList>
    </>
  );
}

FeedbackOptions.propTypes = {
  buttons: PropTypes.object.isRequired,
  onFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
