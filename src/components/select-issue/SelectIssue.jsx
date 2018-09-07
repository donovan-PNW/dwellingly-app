import React from 'react';
import PropTypes from 'prop-types';
import Input from '../input/Input';

const SelectIssue = ({ issueOptions, issue, onChange }) => (
  <fieldset>
    <div className="message message--light">
      <p>
        <strong>Step 1: Select Issue</strong>
      </p>
    </div>
    {issueOptions.map(option => {
      const key = Object.keys(option)[0];
      return (
        <Input
          id={`settings-issue-${key}`}
          key={key}
          label={option[key]}
          model={issue}
          name="issue"
          onChange={onChange}
          type="radio"
          value={option[key]}
          />
      );
    })}
  </fieldset>
)

SelectIssue.propTypes = {
  issueOptions: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  issue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default SelectIssue;
