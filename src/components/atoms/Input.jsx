import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  state = {
    hasValue: this.props.input && !!this.props.input.defaultValue,
  };

  setInput = (e, callback) => {
    const { id } = this.props;
    this.setState({
      hasValue: !!e.target.value,
    });
    if (callback) {
      callback(e.target.value, id);
    }
  };


  render() {
    const {
      meta,
      input,
      className,
      id,
      type,
      readOnly,
      maxLength,
      placeholder,
      title,
      autoComplete,
      ariaLabel,
      dataEvent,
      dataValue,
      noLabel,
      label,
      ariaRequired,
    } = this.props;

    const { hasValue } = this.state;

    const invalid = meta && meta.invalid;

    const touched = meta && meta.touched;

    const labelClass = `${hasValue && 'is-active'}`;
    return (
      <div className={`${className}`}>
        {!noLabel && (
            <label
              htmlFor={id}
              className={labelClass}
            >
              {label}
            </label>
          )}
        <div className="c-input-group">
          <input
            id={id}
            {...input}
            className={`c-input-group__input ${touched && invalid && 'error'}`}
            type={type}
            readOnly={readOnly}
            maxLength={maxLength}
            placeholder={placeholder}
            title={title}
            autoComplete={autoComplete}
            aria-label={ariaLabel}
            formNoValidate
            onKeyUp={evt => this.setInput(evt, input.onKeyUp)}
            onBlur={evt => this.setInput(evt, input.onBlur, true)}
            onInput={e => {
              if (e.target.value.length > maxLength) {
                e.target.value = e.target.value.slice(0, maxLength);
              }
            }}
            data-event={dataEvent}
            data-value={dataValue}
            aria-required={ariaRequired}
          />
        </div>
      </div>
    );
  }
}

Input.propTypes = {
  readOnly: PropTypes.bool,
  noLabel: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  input: PropTypes.shape({
    onBlur: PropTypes.func,
    onKeyUp: PropTypes.func,
    defaultValue: PropTypes.string,
  }),
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  title: PropTypes.string,
  autoComplete: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    invalid: PropTypes.bool,
    pristine: PropTypes.bool,
    visited: PropTypes.bool,
    error: PropTypes.string,
  }),
  dataEvent: PropTypes.string,
  dataValue: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaRequired: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  label: '',
  id: 'name',
  value: '',
  placeholder: ' ',
  meta: null,
  input: {
    onBlur: () => {},
    onKeyUp: () => {},
    defaultValue: '',
  },
  className: '',
  readOnly: false,
  maxLength: 100,
  noLabel: false,
  title: '',
  autoComplete: 'off',
  dataEvent: null,
  dataValue: null,
  ariaLabel: '',
  ariaRequired: false,
};

export default Input;
