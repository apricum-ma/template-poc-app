import React, { Component } from 'react';

class Input extends Component {
  state = {
    hasValue: !!this.props.input.defaultValue,
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
      <div className={`o-component ${className}`}>
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

export default Input;
