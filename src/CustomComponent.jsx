import React from 'react';
import PropTypes from 'prop-types';

function CustomComponent(props) {
  const subject = props.data[0].fields.find((field) => field.key === 'subject');
  const body = props.data[0].fields.find((field) => field.key === 'body');
  const accepted = props.data[0].fields.find(
    (field) => field.key === 'accepted'
  );

  return (
    <div style={props.style}>
      <h1>Federated Custom Edit Page</h1>
      <label forHtml={subject.key}>{subject.label}:</label>
      <input id={subject.key} value={subject.value} />
      <br />
      <label forHtml={body.key}>{body.label}:</label>
      <input id={body.key} value={body.value} />
      <br />
      <label forHtml={accepted.key}>{accepted.label}:</label>
      <input type="checkbox" id={accepted.key} checked={accepted.value} />
    </div>
  );
}

CustomComponent.propTypes = {
  data: PropTypes.shape({
    subject: PropTypes.string,
    body: PropTypes.string,
    accepted: PropTypes.bool,
  }),
};

CustomComponent.defaultProps = {
  data: {
    subject: '',
    body: '',
    accepted: false,
  },
};

export default CustomComponent;
